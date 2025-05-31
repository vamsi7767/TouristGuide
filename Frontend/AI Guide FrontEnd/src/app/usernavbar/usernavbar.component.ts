import { Component } from '@angular/core';
import { UserModel } from '../user-model';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-usernavbar',
  templateUrl: './usernavbar.component.html',
  styleUrl: './usernavbar.component.css'
})
export class UsernavbarComponent {
  user=new UserModel()
  constructor(public _userservice: UserService, private _router: Router,private toastr:ToastrService) {

  }
  logout() {
    this._userservice.logout().subscribe(() => {
      console.log('Logout successful');
      this.toastr.success("User LogOut Successfully")
      this._router.navigate(['/']);
      // Optionally, navigate to the login page or any other page after logout
    });
  }


}
