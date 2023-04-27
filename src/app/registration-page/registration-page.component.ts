import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit{
  name ='';
  email ='';
  password ='';
  cnfpassword ='';
  check='';

  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  /*when you click on submit the success method will be called and check whether the required field is filled or not. 
  If not it will send a message as mandatory. If all are filled, then it will show as registered successfully.
  */
  success(){
    if(this.name===''||this.email === ''|| this.password===''|| this.cnfpassword==''||this.check==''){
      var status = confirm("All field are mandatory");
  
    }else{
    let success = confirm("Registered Successfully");
    if(success==true){
      this.router.navigate(['login']);
    }
  }
  }

}
