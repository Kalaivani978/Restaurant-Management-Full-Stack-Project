import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  link = '';
  ngOnInit(): void {

  }
  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }

    /*when you click on send the forgot method will be called and check whether the required field is filled or not. 
  If not it will send a message. If all are filled, then it will show as reset link has been sent. */
  
  forgot() {
    if (this.link === '') {
      var status = confirm("Please provide the registered email address.");

    } else {
      let success = confirm("Reset link has been sent to ur registered mail id");
      if (success == true) {
        this.router.navigate(['login']);
      }
    }
  }

}
