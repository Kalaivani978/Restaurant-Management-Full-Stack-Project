import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { RestaurantService } from '../restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  resName='';
  ownerName='';
  foodType='';
  rating='';
  location='';
  restaurant: Restaurant = new Restaurant();
  /*
  Once the component is called, constructor called automatically. Restaurant service is assigned to restaurant service and Router is assigned to router.
  */
  constructor(private restaurantService:RestaurantService,
    private router: Router) { }

  ngOnInit(): void {
  }
  /*
  call the CreateRestaurant method in the Service file
  */
  saveRestaurant(){
    this.restaurantService.createRestaurant(this.restaurant).subscribe( data =>{
      console.log(data);
      this.goToRestaurantList();
    },
    error => console.log(error));
  }

  goToRestaurantList(){
    this.router.navigate(['/restaurant']);
  }
  /*
  If you click on submit onSubmit method will be called. Confirmation message will be alerted. If you click ok, then only it will be inserted.
  */
  onSubmit(){
    if(this.restaurant.resName === '' || this.restaurant.foodType === '' || this.restaurant.location === '' || this.restaurant.rating === 0 || this.restaurant.ownerName === ''){
      var status = confirm("All fields are mandatory");
    }else{
    let success=confirm("Please confirm. Do you want to insert?")
    if(success==true){
    console.log(this.restaurant);
    this.saveRestaurant();
    
    this.router.navigate(['restaurant']);
    }
    else{
    this.router.navigate(['restaurant'])
    }
  }
  }
}
