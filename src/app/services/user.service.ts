import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = 'http://localhost:8000/api/user'
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }

  
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL)
  }
  
  getUser(id: any) {
    return this.http.get<User>(this.BASE_URL + '/'+ id)
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl)
  }

  uploadImage(data: FormData) {
    return this.http.post<any>('https://api.cloudinary.com/v1_1/ddwurilrw/image/upload', data)
  }
}
