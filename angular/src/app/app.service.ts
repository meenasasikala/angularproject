import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpclient:HttpClient) { }
  adduser(){
    return this.httpclient.post('http://localhost:3000/users',{'id':1})
  }
}
