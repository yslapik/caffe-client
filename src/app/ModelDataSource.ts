import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, Observable, of} from "rxjs";
import {RestDataLoaderService} from "./services/rest-data-loader.service";
import {finalize} from "rxjs/operators";
import {MatTableDataSource} from "@angular/material/table";

export class ModelDataSource extends MatTableDataSource<any> {
  private modelDataSubject = new BehaviorSubject<any>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

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
    //let appendedDataArray = this.modelDataSubject.value.filter(item=>item.id === dataObject.id);

  }

  loadData(requestParams:any) {
    this.loadingSubject.next(true);
    this.loaderService.getModelData(requestParams.modelName, requestParams.filter).pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(data => this.modelDataSubject.next(data));
  }
}
