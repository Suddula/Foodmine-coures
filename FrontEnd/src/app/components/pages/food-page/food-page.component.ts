import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
import { FoodService } from 'src/app/Services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:Food;
  constructor(activatedRoute:ActivatedRoute,private foodService:FoodService,
    private cartService:CartService,private router:Router){

      activatedRoute.params.subscribe((params)=>{
        if(params.id)
        this.foodService.getFoodById(params.id).subscribe((serverFood)=>{
          this.food =serverFood;
        });
      })
  }
  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart();
    this.router.navigateByUrl('/cart-page');
  }
}
