import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../user-model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {
  useridInt: number = 0;
  user:UserModel=new UserModel;
  constructor(private _userservice: UserService, private _router: Router) {
    this.getUserProfile();
  }

  getUserProfile() {
    const useridString = sessionStorage.getItem('id');
    if (useridString !== null) {
      this.useridInt = parseInt(useridString, 10);
      console.log(this.useridInt);
    } else {
      console.error(`No data found for key '${'id'}' in sessionStorage.`);
    }
  
    this._userservice.getUser(this.useridInt).subscribe(
      {
        next: (res: UserModel) => {
          this.user = res;
          console.log(this.user)
         
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }

}
