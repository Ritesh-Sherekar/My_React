import { useState } from "react"

function Counting(){

    const[count, setCount] = useState(0);

    const handleInc = () => {
        setCount(count + 1);
    }

    const handleReset = () =>{
        setCount(0);
    }

    const handleDec = () =>{
        setCount(count - 1);
    }

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={handleInc}>Increse</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDec}>Decrease</button>
        </div>
    );

}

export default Counting