import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { RestaurantesComponent } from 'app/restaurantes/restaurantes.component';
import { RestaurantDetailComponent } from 'app/restaurant-detail/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from 'app/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from 'app/restaurant-detail/reviews/reviews.component';
import { OrderComponent } from 'app/order/order.component';


export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    {
        path: 'restaurants', component: RestaurantesComponent
    },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'order', component: OrderComponent },
    { path: 'about', component: AboutComponent }
]