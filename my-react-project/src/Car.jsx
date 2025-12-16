
import { useState } from "react";

function Car(){

    const [car, setCar] = useState({Year: 2024,
                                    Make: "Ford",
                                    Model: "Mastang"});

    const handleYearChange = (event)=>{
        setCar(c => ({...c, Year: event.target.value}));
    }

    const handleMakeChange = (event)=>{
        setCar(c => ({...c, Make: event.target.value}));
    }

    const handleModelChange = (event) =>{
        setCar(c => ({...c, Model: event.target.value}));
    }

    return(
        <div>
            <p>My Car is :- {car.Year} {car.Make} {car.Model}</p>

            <input type="number" value={car.Year} onChange={handleYearChange}/>
            <input type="text" value={car.Make} onChange={handleMakeChange}/>
            <input type="text" value={car.Model} onChange={handleModelChange}/>
        </div>
    );
}

export default Car