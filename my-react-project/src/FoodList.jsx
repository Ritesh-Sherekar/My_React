import { func } from "prop-types";
import { useState } from "react"

function FoodList(){

    const [foods, setFoods] = useState(["Apple", "Mango", "Banana"]);

    function handleAddFood(){
        const newFood = document.getElementById("addFood").value;
        document.getElementById("addFood").value = "";

        setFoods([...foods, newFood]);
    }

    function handleRemoveFood(index){
        setFoods(foods.filter((_, i)=> i !== index));
    }

    return(
        <div>
            <h2>Food List</h2>
            <ul>
                {foods.map((foods, index) => <li key={index} onClick={()=>handleRemoveFood(index)}>{foods}</li>)}
            </ul>
            <input type="text" id="addFood"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default FoodList