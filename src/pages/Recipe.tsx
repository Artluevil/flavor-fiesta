import React from 'react'

interface RecipeComponent {
  additionalProp: React.ReactNode;
}

const Recipe: React.FC<RecipeComponent> = (additionalProp: any) => {

  function formatString(targetString: string) {
    let cutoffString = targetString.split('.')[0]
    return cutoffString
  }

  let recipe = additionalProp.additionalProp.recipe

  //console.log(additionalProp)
  return (
    <div>
      <img src={recipe.image} />
      <h2>{recipe.label}</h2>
      <p>Ingridients: {recipe.ingredientLines.length}</p>
      {recipe.ingredientLines.map((ingridient: string) => <p>{ingridient}</p>)}
      <p>Calories: {formatString(recipe.calories.toString())}</p>
      <div>
        <p>Carbs: {formatString(recipe.totalNutrients.CHOCDF.quantity.toString())}g</p>
        <p>Fat: {formatString(recipe.totalNutrients.FAT.quantity.toString())}g</p>
        <p>Protein: {formatString(recipe.totalNutrients.PROCNT.quantity.toString())}g</p>
      </div>
    </div>
  )
}

export default Recipe