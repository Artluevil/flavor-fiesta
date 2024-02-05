import React from 'react'
import { formatString } from '../functions/formatString';

interface RecipeBoxComponent {
    recipeImage: string;
    recipeName: string;
    calories: string;
    numberOfingredients: number;
}

const RecipeBox: React.FC<RecipeBoxComponent> = ({recipeImage, recipeName, calories, numberOfingredients}) => {


  return (
    <div className="recipe-box-container">
      <img src={recipeImage}/>
      <p>{recipeName}</p>
      <div>
        <p>{formatString(calories.toString())}</p>
        <p>{numberOfingredients}</p>
      </div>
    </div>
  )
}

export default RecipeBox