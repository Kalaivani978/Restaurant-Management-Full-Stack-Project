import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../restaurant.service';


@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit{
  id: number = 0;
  restaurant: any = [];
  
  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.restaurant = new Restaurant();
    this.restaurantService.getRestaurantById(this.id).subscribe( data => {
      this.restaurant = data;
    });
  }
}


