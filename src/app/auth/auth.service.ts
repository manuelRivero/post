import { environment } from './../../environments/environment.prod';
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
  loginError$ = new BehaviorSubject<string | null>(null);
  user$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  public isAuthenticated(): boolean {
    // Check whether the token is expired and return
    // true or false
    const isExpired = helper.isTokenExpired(this.token!);
    return !isExpired;
  }

  public register(values: any) {
    return this.http.post(
      environment.api + '/register',
      JSON.stringify(values),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  public login(values: any) {
    this.http
      .post(environment.api + '/login', JSON.stringify(values), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .subscribe(
        (res: any) => {
          this.user$.next(res);
        },
        (error) => {
          this.loginError$.next('error');
        }
      );
  }
  get getFormError() {
    return this.registerError$.asObservable();
  }
  set user(user: User) {
    this.user$.next(user);
  }
  set registerError(error: string | null) {
    this.registerError$.next(error);
  }
}
