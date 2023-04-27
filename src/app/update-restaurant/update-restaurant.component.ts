import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  id: number = 0;
  restaurant: Restaurant = new Restaurant();
  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.restaurantService.getRestaurantById(this.id).subscribe(data => {
      this.restaurant = data;
    },
      error => console.log(error));
  }
  /*
  Update confirmation method. If the user click ok, then only they will able to update the record. After updated the record, the message will show
  as updated successfully
  */
  onSubmit() {
    let confirmation = confirm("Do you want to update?");
    if (confirmation ==true) {
      this.restaurantService.updateRestaurant(this.id, this.restaurant).subscribe(data => {
        this.goToRestaurantList();
        let success = confirm("Updated Successfully");
        if (success ==true)
          this.router.navigate(['restaurant']);
        else {
          this.router.navigate(['restaurant']);
        }
      },
        error => console.log(error));
    } else {
      this.router.navigate(['restaurant']);
    }
  }
  /*
    Whenever the below method is called, it will navigate to restaurant list component.
  */
  goToRestaurantList() {
    this.router.navigate(['/restaurant']);
  }

}




