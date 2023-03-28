import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'http://127.0.0.1:5000/';

  constructor(private httpClient: HttpClient) {}

  public addUser(name: any, email: any, password: any, contact: any) {
    return this.httpClient
      .post<any>(this.baseUrl + 'users', {
        name,
        email,
        password,
        contact,
      })
      .pipe(
        map((Users: any) => {
          return Users;
        })
      );
  }
  public checkUser(email: any, password: any) {
    return this.httpClient
      .post<any>(this.baseUrl + 'users', {
        email,
        password,
      })
      .pipe(
        map((Users: any) => {
          return Users;
        })
      );
  }
}
