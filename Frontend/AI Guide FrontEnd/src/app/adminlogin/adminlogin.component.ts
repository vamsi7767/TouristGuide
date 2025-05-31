import { Component } from '@angular/core';
import { Adminmodel } from '../adminmodel';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  admin = new Adminmodel();
  loginError = false;

  constructor(private _adminservice: AdminService, private _router: Router,private toastr:ToastrService) {}

  loginAdmin() {
    this.loginError = false; // Reset login error status

    this._adminservice.loginAdminfromRemote(this.admin).subscribe(
      data => {
        console.log("response received");
        this._adminservice.isAuthenticated = true;
        this.toastr.success("Admin Login Successfully")
        this._router.navigate(['/adminnavbar']);
      },
      error => {
        console.log("Exception received");
        this.loginError = true; // Set login error status
      }
    );
  }
  cancel() {
    this._router.navigate(['/']);
  }

}
