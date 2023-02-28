import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }
  Test() {
    return this.http.get('/api/user/Test', {responseType: "text"});
  }

  Test2(dateOfBirth: any, userName: any) {
    let obj = {
      date: dateOfBirth,
      name: userName
    }
    return this.http.post<any>(`/api/user/Test2`, obj);
  }
}
