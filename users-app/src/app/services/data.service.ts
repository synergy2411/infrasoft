import { Injectable } from '@angular/core';
import { USER_DATA } from '../model/mocks';

@Injectable()
export class DataService {

  getUserData(){
    return USER_DATA;
  }
  constructor() { }
}
