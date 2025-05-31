import { Component } from '@angular/core';
import { Adminmodel } from '../adminmodel';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adminnavbar',
  templateUrl: './adminnavbar.component.html',
  styleUrl: './adminnavbar.component.css'
})
export class AdminnavbarComponent {
  admin=new Adminmodel()
  constructor(public _adminservice: AdminService, private _router: Router,private toastr:ToastrService) {

  }
  logout() {
    this._adminservice.logout().subscribe(() => {
      console.log('Logout successful');
      this.toastr.success("Admin LogOut Successfully")
      this._router.navigate(['/']);
      // Optionally, navigate to the login page or any other page after logout
    });
  }


}
