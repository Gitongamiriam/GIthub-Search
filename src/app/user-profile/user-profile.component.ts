import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { UserProfile } from '../user-profile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userProfileService:UserProfileService;
  userDetail:UserProfile;
  user:string;
  userNames:string;

  constructor(userProfileService: UserProfileService) {
    this.userProfileService = userProfileService;
   }

  ngOnInit() {
    this.userProfileService.getName(this.userNames)
    this.userProfileService.getUserInfo().subscribe(user=>{
    })
  }


}
