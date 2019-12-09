import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserProfile{
  private username:string;
  private clientid= 'a0fe1319ca77b8784a94';
  private clientsecret = 'da4c63ebe7313eebe7d27bbdb5dd2db1c2edc735';
  constructor(private http:HttpClient) { }
    getProfileInfo(){
      return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
    }
    getProfileRepos(){
      return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret)
    }
    getUserNames(username:string){
      this.username=username;

    }
  }
