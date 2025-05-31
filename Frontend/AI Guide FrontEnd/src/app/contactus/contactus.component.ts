import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'] 
})

export class ContactusComponent {
  cities: string[] = [
    'Mumbai, Maharashtra',
    'Bangalore, Karnataka',
    'Hyderabad, Telangana',
    'Amaravati,AndhraPradesh',
    'Delhi, Delhi',
    'Noida, UP'
  ];

  constructor() {}

  contactInfo = {
    email: 'contact@aitouristguide.com',
    phone: '+91 8555056858',
  };

  address = {
    companyName: 'AI Tourist Pvt Ltd',
    street: '123 Paramount Street',
    city: 'Airoli',
    state: 'Maharashtra',
    zip: '4003001',
    country: 'India',
  };
}