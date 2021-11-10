import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RestDataLoaderService {
  private _headers = new HttpHeaders();
  constructor(private http:HttpClient) {
    this._headers.append('Content-Type' , 'application/json');
  }
  baseUrl = 'http://vps66.heliohost.us/';

  getModelData(modelName:string, urlFilter:string = ''):Observable<any>{
    return this.http.get(this.baseUrl + modelName + urlFilter);
  }

  deleteModelData(modelName:string, dataToRemove:any[]){
    this.http.delete<any>(this.baseUrl + modelName + '/remove',{
      body:dataToRemove
    }).subscribe();
  }

  saveModelData(modelName:string, dataToSave:any[]){
    this.http.put<any>(this.baseUrl + modelName + '/set',dataToSave,{ headers: this._headers })
      .subscribe();
  }
}

