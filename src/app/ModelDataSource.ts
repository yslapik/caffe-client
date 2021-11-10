import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, Observable, of} from "rxjs";
import {RestDataLoaderService} from "./services/rest-data-loader.service";
import {finalize} from "rxjs/operators";
import {MatTableDataSource} from "@angular/material/table";

export class ModelDataSource extends MatTableDataSource<any> {
  private modelDataSubject = new BehaviorSubject<any>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  modelName:string = '';

  constructor(private loaderService:RestDataLoaderService) {
    super();
  }

  connect(): BehaviorSubject<any> {
    return this.modelDataSubject;
  }

  disconnect(): void {
    this.modelDataSubject.complete();
    this.loadingSubject.complete();
  }

  appendData(dataObject:any){
    let appendedDataArray = [...this.modelDataSubject.value,dataObject]
    this.modelDataSubject.next(appendedDataArray);
  }

  removeData(dataObject:any){
    let filteredDataArray = this.modelDataSubject.value;
    if(!dataObject.id){
      filteredDataArray = filteredDataArray.filter((item:any) => item.name !== dataObject.name);
    }
    else{
      filteredDataArray = this.modelDataSubject.value.filter((item:any) => item.id !== dataObject.id);
      this.loaderService.deleteModelData(this.modelName,[dataObject])
    }
    this.modelDataSubject.next(filteredDataArray);
  }

  saveData(){
    this.loaderService.saveModelData(this.modelName,this.modelDataSubject.value);
  }

  loadData(requestParams:any) {
    this.loadingSubject.next(true);
    this.loaderService.getModelData(this.modelName, requestParams.filter).pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(data => this.modelDataSubject.next(data));
  }
}
