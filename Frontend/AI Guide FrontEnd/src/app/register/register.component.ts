import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { UserModel } from '../user-model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = new UserModel();
  receivednum: number = 3;
  constructor(private _userservice: UserService, private _router: Router, private toastr: ToastrService) { }

  registerUser() {
    this._userservice.RegisterUserfromRemote(this.user).subscribe(
      (data: number) => {
        this.receivednum = data;
        if (this.receivednum == 1) {
          console.log("response received");
          this.toastr.success("Register Successfull")
          this._router.navigate(["/userlogin"]);
        }
        else if (this.receivednum == 0) {
          this.toastr.error("Email Already Exist Please try with another Email....")
        }
      },
      error => console.log("Exception received")
    );
  }
  cancel() {
    this._router.navigate(['/userlogin']);
  }
}
