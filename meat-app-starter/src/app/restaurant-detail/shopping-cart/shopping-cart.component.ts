import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'app/restaurant-detail/shopping-cart/shopping-cart.service';
import { cartItem } from 'app/restaurant-detail/shopping-cart/cart-item-model';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {


  constructor(private shoppinCartService: ShoppingCartService) { }

  ngOnInit() {

  }

  items(): any[] {
    return this.shoppinCartService.items;
  }

  total(): number {
    return this.shoppinCartService.total();
  }

  clear() {
    this.shoppinCartService.clear();
  }

  removeItem(item: any) {
    this.shoppinCartService.removeItem(item)
  }

  addItem(item: any) {
    this.shoppinCartService.addItem(item);
  }
}
