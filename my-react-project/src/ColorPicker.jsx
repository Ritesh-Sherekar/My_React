import { useState } from "react";

function ColorPicker(){

    const [color, setColor] = useState("#ffffff");

    const handleColorChange = (event) =>{
        setColor(event.target.value);
    }

    return(
        <div className="color-picker-main">
            <h1>Color Picker</h1>
            <div className="color-picker-display" style={{backgroundColor: color}}>
                <p>Selected Color:- {color}</p>
            </div>
            <label>Select Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker