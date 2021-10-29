import {CollectionViewer, DataSource} from "@angular/cdk/collections";
import {BehaviorSubject, Observable, of} from "rxjs";
import {RestDataLoaderService} from "./services/rest-data-loader.service";
import {finalize} from "rxjs/operators";

export class ModelDataSource implements DataSource<any> {
  private modelDataSubject = new BehaviorSubject<any>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private loaderService:RestDataLoaderService) {
  }

  connect(collectionViewer: CollectionViewer): Observable<any[]> {
    return this.modelDataSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.modelDataSubject.complete();
    this.loadingSubject.complete();
  }

  loadData() {
    this.loadingSubject.next(true);
    this.loaderService.getData().pipe(
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(data => this.modelDataSubject.next(data));
  }
}
