import React from 'react'
import FoodTypes from '../data/FoodTypes.json'

interface FoodTypesData {
    cuisine: string;
}

interface RecipeHashtagsProps {
    setCuisineType: React.Dispatch<React.SetStateAction<string>>;
}

const RecipeHashtags: React.FC<RecipeHashtagsProps> = ({ setCuisineType }) => {

    return (
        <div>
            {FoodTypes.map((cuisineData: FoodTypesData) => <div className='cuisine-container' onClick={(event: React.MouseEvent<HTMLElement>) => {setCuisineType(cuisineData.cuisine)}}><p>{cuisineData.cuisine}</p></div>)}
        </div>
    )
}

export default RecipeHashtags