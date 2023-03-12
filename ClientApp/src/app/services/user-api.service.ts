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

  GetAge(dateOfBirth: any) {
    let obj = {
      date: dateOfBirth
    }
    return this.http.post<any>(`/api/user/GetAge`, obj);
  }
}
