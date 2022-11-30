import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthData } from './auth-data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string;
  private authStatusSubject = new Subject<boolean>();

  getToken(): string {
    return this.token;
  }

  getAuthStatusSubject(): Observable<boolean> {
    return this.authStatusSubject.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) {}

  createUser(email: string, password: string): void {
    const authData: AuthData = { email, password };

    this.http
      .post('http://localhost:3000/api/user/signup', authData)
      .subscribe((res) => {
        console.log(res);
      });
  }

  login(email: string, password: string): void {
    const authData: AuthData = { email, password };
    this.http
      .post<{ token: string }>('http://localhost:3000/api/user/login', authData)
      .subscribe((res) => {
        this.token = res.token;
        this.authStatusSubject.next(true);
      });
  }
}
