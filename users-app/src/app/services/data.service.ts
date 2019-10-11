import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  getUserData(){
    return USER_DATA;
  }
  getApiData(){
    return this.httpClient.get("https://ng-cap-demo.firebaseio.com/userdata.json")

  }
  constructor(private httpClient : HttpClient) { }
}
