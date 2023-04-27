import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit{
  fname='';
  lname='';
  email='';
  feedback='';
  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }
    ngOnInit(): void {
      
    }
    /*when you click on send a feedback, the success method will be called and check whether the required field is filled or not. 
  If not it will send a message as mandatory. If all are filled, then it will show as thanks for feedback.
  */
    
  Success(){
    if(this.fname===''||this.lname === ''|| this.email===''|| this.feedback==''){
      var status = confirm("Name, email and feedback fields are mandatory");
  
    }else{
    let success = confirm("Thanks for your feedback");
    if(success==true){
      this.router.navigate(['login']);
    }
  }
  }

}
