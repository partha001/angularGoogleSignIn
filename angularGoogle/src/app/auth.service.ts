import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public signOutExternal = ()=> {
    localStorage.removeItem("token");
    console.log("token deleted");
  }

  LoginWithGoogle(credentials:string): void {
    const header = new HttpHeaders().set("Content-type","application/json");
    //return this.httpClient.post(this.path )
    console.log("make backend call here to pass received credentials");
  }
}
