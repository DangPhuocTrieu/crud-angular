import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = 'https://jsonplaceholder.typicode.com/users'
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.BASE_URL)
  }
  getUser(id: number) {
    return this.http.get<User>(this.BASE_URL + '/'+ id)
  }
}
