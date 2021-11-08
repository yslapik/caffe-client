import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RestDataLoaderService {
  constructor(private http:HttpClient) {}
  baseUrl = 'http://vps66.heliohost.us/';
  getModelData(modelName:string, urlFilter:string = ''):Observable<any>{
    return this.http.get(this.baseUrl + modelName + urlFilter);
  }
}

