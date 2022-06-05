import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Signup} from "../model/signup";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Login} from "../model/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:3000/';
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {
  }

  signup(signUpData: Signup): Observable<Signup> {
    return this.http
      .post<Signup>(this.baseUrl + 'auth/register', JSON.stringify(signUpData), this.headers)
      .pipe(retry(1), catchError(this.handleError))
  }

  login(logInData: Login): Observable<Login> {
    return this.http
      .post<Login>(this.baseUrl+ 'auth/login', JSON.stringify(logInData), this.headers)
      .pipe(retry(1), catchError(this.handleError))
  }

  handleError(err: any) {
    let errMessage: string;
    if (err.error instanceof ErrorEvent) {
      errMessage = err.error.message;
    } else {
      errMessage = 'Error nih'
    }
    window.alert(errMessage);
    return throwError(() => {
      return errMessage;
    })
  }
}
