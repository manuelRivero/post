import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 

  }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    const isExpired = helper.isTokenExpired(token!);
    return !isExpired;
  }
  
}
