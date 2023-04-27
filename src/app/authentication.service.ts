import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{

  constructor() { }
  /*
  Check the username and password. It allow only if it correct and save the username in sessionstorage
  */
  authenticate(username :any, password: any){
    if(username === "Kalaivani" && password === "kalai@123"){
      sessionStorage.setItem('username', username)
      return true;
    }else{
      alert("Please enter the correct Username and Password");
      return false;
    }
  }
  
  isUserLoggedIn(){
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  logOut(){
    sessionStorage.removeItem('username')
  }
}
