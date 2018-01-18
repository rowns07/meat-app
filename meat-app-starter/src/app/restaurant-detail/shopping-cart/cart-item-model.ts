import { MenuItem } from "app/restaurant-detail/menu-item/menu-item.model";


export class cartItem {

    constructor(public menuItem:MenuItem, public quantity: number = 1){ }

    value(){
        return this.menuItem.price * this.quantity
    }
}