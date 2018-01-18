import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';
import { RestaurantService } from 'app/restaurantes/restaurant.service';
import { ActivatedRoute } from '@angular/router';
;

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Output() add = new EventEmitter()
  constructor(private restaurantsService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  emitAddEvent(){
    this.add.emit(this.menuItem)

  }

}
