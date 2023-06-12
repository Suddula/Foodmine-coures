import { Component ,OnInit} from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';
import { Food } from 'src/app/shared/Models/Foods';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
 foods:Food[]=[];

 constructor( private foodService:FoodService){
  this.foods= this.foodService.getAll();
  }
  ngOnInit():void{

  }

}
