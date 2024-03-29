import React, { useState } from 'react'
import DishTypes from '../data/DishTypes.json'

interface SearchProps {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    setCurrentSearch: React.Dispatch<React.SetStateAction<string>>;
    setDishType: React.Dispatch<React.SetStateAction<string>>;
    searchValue: string;
    dishType: string;
}

interface dishTypeInterface {
    dish: string;
    label: string;
}

const Search: React.FC<SearchProps> = ({ setSearchValue, searchValue, setCurrentSearch, setDishType, dishType }) => {

    const [searchInputValue, setSearchInputValue] = useState<string>("")
    const [visiblePromps, setVisiblePrompts] = useState<boolean>(false)

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
        setSearchInputValue(event.target.value)
        setVisiblePrompts(true)
    }

    const handlePromptClick = ( dishName: string) => {
        setDishType(dishName)
        setSearchInputValue(dishName)
        setVisiblePrompts(false)
    }

    function showPrompts(dish: string) {
        if(dish.slice(0, searchValue.length).toLocaleLowerCase() === searchValue.toLowerCase() && searchValue.length >= 1) {
            if(visiblePromps) {
                return dish
            }
        }
    }

    function searchButtonClick(){
        setCurrentSearch(searchValue)
    }
    return (
        <>
            <div>
                <input onChange={handleSearchChange} value={searchInputValue} type="text" />
                <button onClick={searchButtonClick}>Search</button>
            </div>
            <div className="search-keys-container">{DishTypes.map((dishType: dishTypeInterface) => <p onClick={() => handlePromptClick(dishType.dish)}>{showPrompts(dishType.label)}</p>)}</div>
        </>
    )
}

export default Search