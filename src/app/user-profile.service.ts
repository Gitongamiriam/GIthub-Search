import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
private url="https://api.github.com/users";
private username="Gitongamiriam";
  constructor(private http:HttpClient) { }
    getUserInfo() {
      return this.http.get(this.url + this.username).pipe(map( res => res));
    }
    getName(username:string){
      this.username=username;
    }
  
  }

