import React from 'react'

interface RecipeBoxComponent {
    recipeImage: string;
    recipeName: string;
}

const RecipeBox: React.FC<RecipeBoxComponent> = ({recipeImage, recipeName}) => {


  return (
    <div>
      <img src={recipeImage}/>
      <p>{recipeName}</p>
    </div>
  )
}

export default RecipeBox