import React, { useEffect, useState } from 'react';
import RecipeBox from './components/RecipeBox';
import Recipe from './pages/Recipe';
import Homepage from './pages/Homepage';
import Search from './components/Search';
import RecipeHashtags from './components/RecipeHashtags';
import SpecificFilter from './components/SpecificFilter';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { createLink } from './functions/createLink';
import './App.css'

interface ApiResponse {
  data: any;
  hits: any;
}

const App: React.FC = () => {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null | unknown>(null);
  const [searchValue, setSearchValue] = useState<string>("")
  const [cuisineType, setCuisineType] = useState<string>("")
  const [currentSearch, setCurrentSearch] = useState<string>("")
  const [dishType, setDishType] = useState<string>("")
  const [caloriesRange, setCaloriesRange] = useState<string>("")

  function getApiParams() {
    let params = ""
    if(cuisineType !== "") {
      params = params + "&cuisineType=" + cuisineType
    }
    if(dishType !== "") {
      params = params + "&dishType=" + dishType
    }
    if(caloriesRange !== "") {
      params = params + "&calories=" + caloriesRange
    }
    console.log(params)
    return params
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=910314ba&app_key=%20cc0b2a58b3b617ec5737f94f4cf48edd%09&diet=balanced')
        if(cuisineType === "" && dishType === "" && caloriesRange === "") {
          response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=910314ba&app_key=%20cc0b2a58b3b617ec5737f94f4cf48edd%09&diet=balanced');
        } else {
          response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=910314ba&app_key=%20cc0b2a58b3b617ec5737f94f4cf48edd%09${getApiParams()}`);
        }
        console.log(response)
        console.log(dishType)

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: ApiResponse = await response.json();
        console.log(data)
        setApiData(data);
      } catch (error) {
        if (typeof error === "object" && error && "message" in error && typeof error.message === "string") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [cuisineType, dishType, caloriesRange]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!apiData) {
    return <div>No data received from the API</div>;
  }

  return (
    <Router>
      <Search setSearchValue={setSearchValue} searchValue={searchValue} setCurrentSearch={setCurrentSearch} setDishType={setDishType}/>
      <SpecificFilter setCaloriesRange={setCaloriesRange}/>
      <p>{caloriesRange}</p>
      <RecipeHashtags setCuisineType={setCuisineType}/>
      <Routes>
        <Route path="/" element={<Homepage data={apiData}/>}/>
        {apiData.hits.map((recipeData: any) => <Route path={`/recipe/${createLink(recipeData.recipe.label)}`} element={<Recipe additionalProp={recipeData} />} />)}
      </Routes>
    </Router>
  );
};

export default App;