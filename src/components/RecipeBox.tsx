import React from 'react'

interface RecipeBoxComponent {
    recipeImage: string;
}

const RecipeBox: React.FC<RecipeBoxComponent> = ({recipeImage}) => {


  return (
    <div><img src={recipeImage}/></div>
  )
}

export default RecipeBox