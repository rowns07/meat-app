import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurantes/restaurant.service';
import { Restaurant } from 'app/restaurantes/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantService: RestaurantService, 
    private route:ActivatedRoute ) { }

  ngOnInit() {

    this.restaurantService.restaurantsById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
