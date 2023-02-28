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

  Test2() {
    return this.http.get<any>('/api/user/Test2');
  }
}
