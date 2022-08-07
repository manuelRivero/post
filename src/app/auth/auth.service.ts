import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './user.model';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = localStorage.getItem('token');
  registerError$ = new BehaviorSubject<string | null>(null);
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    // Check whether the token is expired and return
    // true or false
    const isExpired = helper.isTokenExpired(this.token!);
    return !isExpired;
  }

  public register(values: any) {
    // login logic

    console.log('register', values);
   return this.http
      .post(
        'https://catarinacci.herokuapp.com/register',
        JSON.stringify(values),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
          },
        }
      )
  }
  get getFormError() {
    return this.registerError$.asObservable()
  }
  set user (user:User){
    this.user$.next(user)
  }
  set registerError (error:string){
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    this.registerError$.next(error)
  }
}
