import { Component } from '@angular/core';
type data = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea:string;
  strMealThumb:string;
  Year: string;
  strInstructions:string;
};

@Component({
  selector: 'app-foodes',
  templateUrl: './foodes.component.html',
  styleUrls: ['./foodes.component.sass'],
})
export class FoodesComponent {
  foodName: string = '';

  foodData: Array<data> = [];

  loading: boolean = false;

  handleSubmit() {
    this.loading = true;

    console.log(this.foodName);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.foodName}`)
      .then((res) => res.json())
      .then((res) => {
        this.loading = false;
        this.foodData = res.meals;
        console.log(this.foodData);
      });
  }
}
