import React from "react";
import { Link } from "react-router-dom";
import { createLink } from "../functions/createLink";
import RecipeBox from "../components/RecipeBox";

interface HomepageInterface {
    data: any
}

const Homepage: React.FC<HomepageInterface> = (data: any) => {
    //console.log(data.data)
    //<div><img src={recipeData.recipe.image} /></div>
    return(
        <div>
            {data.data.hits.map((recipeData: any) => <Link to={`recipe/${createLink(recipeData.recipe.label)}`}><RecipeBox recipeImage={recipeData.recipe.image} recipeName={recipeData.recipe.label}/></Link>)}
        </div>
    )
}

export default Homepage