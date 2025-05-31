import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Feedbackmodel } from '../feedbackmodel';
import { FeedbackserviceService } from '../feedbackservice.service';

@Component({
  selector: 'app-myfeedbacks',
  templateUrl: './myfeedbacks.component.html',
  styleUrl: './myfeedbacks.component.css'
})
export class MyfeedbacksComponent {

  dataSource:Feedbackmodel[]=[];
  useridInt: number = 0;
  
  constructor(private feedbackService:FeedbackserviceService,private router:Router){
    this.getFeedBackUser();
  }

  getFeedBackUser(): void {

    const useridString = sessionStorage.getItem('id');
    if (useridString !== null) {
      this.useridInt = parseInt(useridString, 10);
      console.log(this.useridInt);
    } else {
      console.error(`No data found for key '${'id'}' in sessionStorage.`);
    }
    this.feedbackService.getFeedBackUser(this.useridInt).subscribe(
      {
        next: (res: Feedbackmodel[]) => {
          this.dataSource = res;
        },
        error: (err: HttpErrorResponse)=> {
          console.log(err);
        }
      }
    );
  }


}
