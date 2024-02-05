import React from "react";
import Search from "./Search";
import FlavorFiestaLogo from '../images/flavor-fiesta-logo.png'
import '../styles/TopBarStyles.css'

interface TopBarInterface {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    setCurrentSearch: React.Dispatch<React.SetStateAction<string>>;
    setDishType: React.Dispatch<React.SetStateAction<string>>;
    searchValue: string;
    dishType: string;
}

const TopBar: React.FC<TopBarInterface> = ({ setSearchValue, searchValue, setCurrentSearch, setDishType, dishType }) => {
    return (
        <>
            <div className="top-bar-wrapper">
                <div className="logo-container">
                    <img src={FlavorFiestaLogo} />
                </div>
                <div className="search-container">
                    <Search setSearchValue={setSearchValue} searchValue={searchValue} setCurrentSearch={setCurrentSearch} setDishType={setDishType} dishType={dishType} />
                </div>
            </div>
        </>
    )
}

export default TopBar