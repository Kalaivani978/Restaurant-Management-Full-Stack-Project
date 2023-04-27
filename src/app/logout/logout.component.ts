import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit{
  /*Reference type of Router and autheticationService will be created.*/
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router) {

  }
  /*
  Log out confirmation method. If the user confirm to logout, then only it will call the logout method from authentication service. Else it will be in the restaurant
  list page.
  */
  ngOnInit() {
    var value=confirm("Are you sure you need to log out");
    if(value==true){
    this.authenticationService.logOut();
    this.router.navigate(['logout']);
    }
    else{
      this.router.navigate(['restaurant']);
     
    }
    
  }
 

}
