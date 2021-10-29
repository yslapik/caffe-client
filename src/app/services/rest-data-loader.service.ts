import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestDataLoaderService {
  constructor(private http:HttpClient) {}

  getData():Observable<any>{
    return of([
      {id: '1', name: 'Espresso', price: 12.50,count:0, dailyAmount:0, sum:0},
      {id: '2', name: 'Americano', price: 12.50,count:0, dailyAmount:0, sum:0},
      {id: '3', name: 'Latte', price: 18,count:0, dailyAmount:0, sum:0}
    ]);
  }
}

