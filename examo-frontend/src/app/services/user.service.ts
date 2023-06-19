import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({ 
  providedIn: 'root'
})
export class UserService { 

  constructor(private http:HttpClient) { }

  //filled upon successful login
  accessToken:string = "Bearer: ";

  login(loginCreds:any):Observable<HttpResponse<any>> {

    return this.http.post("http://localhost:8095/examo/auth", loginCreds,
    {observe: "response"}) as Observable<HttpResponse<any>>;

  }

  //getter for the most recent accessToken
  getAccessToken():string{
    return this.accessToken
  }

}
