import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../user-profile.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  repos: any;
  username: any;
  


  constructor(private userProfileService: UserProfile) { }
  searchUsers(){
    this.userProfileService.getUserNames(this.username);
    this.userProfileService.getProfileRepos().subscribe(repos => {
    this.repos = repos;
    });
    this.userProfileService.getProfileInfo().subscribe(username => {
      this.username =username;

    });
  }
  ngOnInit() {}
}
