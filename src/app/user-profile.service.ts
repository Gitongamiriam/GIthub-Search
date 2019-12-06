import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
private url="https://api.github.com/users";
  constructor(private http:HttpClient) { }
  getUserInfo(){
    this.http.get(this.url)
  }
}
