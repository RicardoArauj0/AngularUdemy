import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
     this.recipeService.recipeSelected
     .subscribe(
       (recipe: Recipe) => {
         this.selectedRecipe = recipe;
       }
     );
  }

}
