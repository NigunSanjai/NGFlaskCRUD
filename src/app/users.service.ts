import { GetData } from './GetData';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users.model';
import { map } from 'rxjs';

interface response {
  result: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl: string = 'http://127.0.0.1:5000/';

  constructor(private httpClient: HttpClient) {}

  public addUser(name: any, email: any, password: any, contact: any) {
    return this.httpClient
      .post<any>(this.baseUrl + 'register', {
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
      .post<any>(this.baseUrl + 'login', {
        email,
        password,
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }
  isLoggedin() {
    return sessionStorage.getItem('email') != null;
  }
  uploadFile(
    currentuser: any,
    column_value: any,
    time_period: any,
    number_value: any,
    file: any
  ) {
    const formData = new FormData();

    // formData.append('file', file, file.name);
    formData.append('currentuser', currentuser);
    formData.append('column_value', column_value);
    formData.append('time_period', time_period);
    formData.append('number_value', number_value);
    formData.append('file', file);
    console.log(JSON.stringify(formData));

    return this.httpClient.post(this.baseUrl + 'upload', formData);
    // {

    //   currentuser,
    //   column_value,
    //   time_period,
    //   number_value,
    //   file,
    // });
  }
}
