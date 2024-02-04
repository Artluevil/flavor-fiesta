import React, { useState } from 'react'
import DietTypes from '../data/DietTypes.json'
import HealthTypes from '../data/HealthTypes.json'

interface SpecificFilterInterface {
    setCaloriesRange: React.Dispatch<React.SetStateAction<string>>;
    setDietType: React.Dispatch<React.SetStateAction<string>>;
    setHealthType: React.Dispatch<React.SetStateAction<string>>;
    dietType: string;
    healthType: string;
}

interface DietTypesInterface {
    diet: string,
    label: string,
}

interface HealthTypesInterface {
    health: string,
    label: string,
}

const SpecificFilter: React.FC<SpecificFilterInterface> = ({ setCaloriesRange, setDietType, setHealthType, dietType, healthType }) => {

    const [caloriesFrom, setCaloriesFrom] = useState<string>("")
    const [caloriesTo, setCaloriesTo] = useState<string>("")

    const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCaloriesFrom(event.target.value)
    }
    const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCaloriesTo(event.target.value)
    }

    const handleDietClick = (dietTypeProp: string) => {
        if (dietType == "") {
            setDietType(dietTypeProp)
        } else {
            setDietType(dietType + "")
        }
        setDietType(dietType)
    }
    const handleHealthClick = (healthTypeProp: string) => {
        setHealthType(healthType)
    }

    const handleSearch = () => {
        setCaloriesRange(caloriesFrom + "-" + caloriesTo)
    }
    return (
        <div>
            <div>
                <p>Calories</p>
                <div>
                    <p>From</p>
                    <input type="text" onChange={handleFromChange} />
                </div>
                <div>
                    <p>To</p>
                    <input type="text" onChange={handleToChange} />
                </div>
            </div>
            <div>
                <p>Ingredients</p>
                <div>
                    <p>Up to</p>
                    <input type="text"></input>
                </div>
            </div>
            <div>
                <button onClick={handleSearch}>Search</button>
            </div>
            <div>
                {DietTypes.map((dietType: DietTypesInterface) => <div><span>{dietType.label}</span><input onClick={() => handleDietClick(dietType.diet)} type="checkbox"></input></div>)}
                {HealthTypes.map((healthType: HealthTypesInterface) => <div><span>{healthType.label}</span><input onClick={() => handleHealthClick(healthType.health)} type="checkbox"></input></div>)}
            </div>
        </div>
    )
}

export default SpecificFilter