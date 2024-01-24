import React, { useState } from 'react'
import FoodTypes from '../data/FoodTypes.json'

interface SpecificFilterInterface {
    setCaloriesRange: React.Dispatch<React.SetStateAction<string>>;
}

const SpecificFilter: React.FC<SpecificFilterInterface> = ({setCaloriesRange}) => {

    const [caloriesFrom, setCaloriesFrom] = useState<string>("")
    const [caloriesTo, setCaloriesTo] = useState<string>("")

    const handleFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCaloriesFrom(event.target.value)
    }
    const handleToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCaloriesTo(event.target.value)
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
                    <input type="text" onChange={handleFromChange}/>
                </div>
                <div>
                    <p>To</p>
                    <input type="text" onChange={handleToChange}/>
                </div>
            </div>
            <div>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}

export default SpecificFilter