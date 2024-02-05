import React from "react";
import { Link } from "react-router-dom";
import { createLink } from "../functions/createLink";
import RecipeBox from "../components/RecipeBox";
import '../styles/RecipeBoxStyles.css'

interface HomepageInterface {
    data: any
}

const Homepage: React.FC<HomepageInterface> = (data: any) => {
    //console.log(data.data)
    //<div><img src={recipeData.recipe.image} /></div>
    return(
        <div className="recipes-box-wrapper">
            {data.data.hits.map((recipeData: any) => <Link to={`recipe/${createLink(recipeData.recipe.label)}`}><RecipeBox recipeImage={recipeData.recipe.image} recipeName={recipeData.recipe.label} calories={recipeData.recipe.calories} numberOfingredients={recipeData.recipe.ingredients.length}/></Link>)}
        </div>
    )
}

export default Homepage