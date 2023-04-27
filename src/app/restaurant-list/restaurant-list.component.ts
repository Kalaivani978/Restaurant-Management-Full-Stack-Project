import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant'
import { RestaurantService } from '../restaurant.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  restaurant: Restaurant[] = [];
  resName: String ="";


  constructor(private restaurantService: RestaurantService,
    private router: Router) { }
    /* 
    Search the restaurant using restaurant name
    */
    
  searchByResName(){
    this.restaurantService.findByResName(this.resName).subscribe(
     data =>{
      this.restaurant =data;
      console.log(data);
     },
     error =>{
      console.log(error);
     });
    }
  
  ngOnInit(): void {
    this.getRestaurants();
  }
  /*
  get restaurant from the service can be called
  */

  private getRestaurants(){
    this.restaurantService.getRestaurantList().subscribe(data => {
      this.restaurant = data;

    });
  }
/*
  Below method is used to view the record, only if the user confirm.
*/
  restaurantDetails(id: number){
    var status = confirm("Please confirm do you want to view this restaurant?")
    if(status==true){
    this.router.navigate(['restaurant-details', id]);
    }
    else{
      this.router.navigate([`restaurant`]);
    }
  }
/*
Below method is used to navigate to update restaurant component.
*/
  updateRestaurant(id: number){
    this.router.navigate(['update-restaurant', id]);
  }
  /*
  This method will work only if user confirm to delete the particular record.
  */

  deleteRestaurant(id: number){
    var status = confirm("Do you want to delete this record?");
    if(status==true){
    this.restaurantService.deleteRestaurant(id).subscribe( data => {
      console.log(data);
      this.getRestaurants();
    })
  }else{
    this.getRestaurants();
  }
  }
  /*
  This method will remove all the record from the database , only if user confirm to delete.
  */
  removeAllRestaurant():void{
    var status = confirm("Be Aware!... If you click ok, it will remove all the record from the database");
    if(status==true){
    this.restaurantService.deleteAll().subscribe(data =>{
      console.log(data);
      this.getRestaurants();
    },
    error =>{
      console.log(error);
    });
  }else{
    this.getRestaurants();

  }
  }
  /*
  view veg hotel only method
  */
  fetchVegRestaurant(){
    this.restaurantService.findByVegRestaurant().subscribe(
      data => {
        this.restaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  /*
  view non veg hotel only method
  */
  fetchNonVegRestaurant(){
    this.restaurantService.findByNonVegRestaurant().subscribe(
      data => {
        this.restaurant = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}



