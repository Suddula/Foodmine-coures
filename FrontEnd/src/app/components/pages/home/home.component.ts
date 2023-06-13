import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/Services/food.service';
import { Food } from 'src/app/shared/models/Food';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 foods:Food[]=[];

 constructor( private foodService:FoodService, activatedRoute:ActivatedRoute){
  let foodObservalbe:Observable<Food[]>;
  activatedRoute.params.subscribe((parsams) =>{
    if(parsams.searchTerm)
    foodObservalbe= this.foodService.getAllFoodsBySearchTerm(parsams.searchTerm);
    else if(parsams.tag)
    foodObservalbe = this.foodService.getAllFoodsByTag(parsams.tag);
    else
    foodObservalbe= this.foodService.getAll()

    foodObservalbe.subscribe((serverFoods)=>{
      this.foods =serverFoods;
    })

  })

  }
  ngOnInit():void{

  }

}
