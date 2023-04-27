import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username ='';
  password = '';
  invalidLogin = false
  /*
   Reference type of Router and autheticationService will be created.
  */
  constructor(private router: Router, private loginservice:AuthenticationService){}
  /*
  Whenever class implements OnInit interface, ngOnInit method need to be override. No need to call this method, it will be called automatically
  */
  ngOnInit() {
    
  }
  /*
  when you click on submit the checklogin method will be called and authenticate method from the service class is called from this method.
  If it is true it will navigate to restaurant list component. If it is false it will assign the invalidLogin to false.
  */
  checkLogin(){
    if(this.loginservice.authenticate(this.username,this.password)){
      this.router.navigate(['restaurant']);
      console.log("navigate..");
      this.invalidLogin = false;
    }else 
    this.invalidLogin = true;
    
  }

}
