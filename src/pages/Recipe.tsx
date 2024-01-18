import React from 'react'

interface RecipeComponent {
  additionalProp: React.ReactNode;
}

const Recipe: React.FC<RecipeComponent> = (additionalProp: any) => {

  console.log(additionalProp)
  return (
    <div><img src={additionalProp.additionalProp.recipe.image}/>
    <p>Recipe</p></div>
  )
}

export default Recipe