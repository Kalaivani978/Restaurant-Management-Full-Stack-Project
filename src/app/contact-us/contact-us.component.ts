import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  Name = '';
  email = '';
  message = '';
  constructor(public loginservice: AuthenticationService, private router: Router) {

  }
  ngOnInit(): void {

  }
  /*when you click on submit the confirm method will be called and check whether the required field is filled or not. 
  If not it will send a message as mandatory. If all are filled, then it will show as thanks for contacting.
  */
  confirm() {
    if (this.Name === '' || this.email === '' || this.message === '') {
      var status = confirm("Name,Email & Message fields are mandatory");

    }
    else {
      var status = confirm("Thanks for contacting");
      if (status == true) {
        this.router.navigate(['home'])
      }
    }
  }
}
