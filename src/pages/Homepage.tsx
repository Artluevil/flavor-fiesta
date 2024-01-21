import React from "react";
import { Link } from "react-router-dom";
import { createLink } from "../functions/createLink";

interface HomepageInterface {
    data: any
}

const Homepage: React.FC<HomepageInterface> = (data: any) => {
    //console.log(data.data)
    return(
        <div>
            {data.data.hits.map((recipeData: any) => <Link to={`recipe/${createLink(recipeData.recipe.label)}`}><img src={recipeData.recipe.image} /></Link>)}
        </div>
    )
}

export default Homepage