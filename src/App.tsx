import React, { useEffect, useState } from 'react';
import RecipeBox from './components/RecipeBox';
import Recipe from './pages/Recipe';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { createLink } from './functions/createLink';

interface ApiResponse {
  data: any;
  hits: any;
}

const App: React.FC = () => {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null | unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.edamam.com/api/recipes/v2?type=public&app_id=910314ba&app_key=%20cc0b2a58b3b617ec5737f94f4cf48edd%09&diet=balanced');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data: ApiResponse = await response.json();
        //console.log(data)
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
  }, []);

  // function createLink(recipeLabel: string) {
  //   console.log(recipeLabel.replace(/\s+/g, ''))
  //   return recipeLabel.replace(/\s+/g, '');
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    console.log(error)
  }

  if (!apiData) {
    return <div>No data received from the API</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage data={apiData}/>}/>
        {apiData.hits.map((recipeData: any) => <Route path={`/recipe/${createLink(recipeData.recipe.label)}`} element={<Recipe additionalProp={recipeData} />} />)}
      </Routes>
    </Router>
  );
};

export default App;