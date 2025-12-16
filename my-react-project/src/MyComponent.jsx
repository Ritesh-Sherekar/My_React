import { useState } from "react"

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployee, setIsEmployee] = useState(false);

    const handleSetname = (name) => {
        setName(name);
    }

    const handleIncreaseAge = () => {
        setAge(age + 1);
    }

    const handleSetIsEmployee = () => {
        setIsEmployee(!isEmployee);
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={() => handleSetname("Ritesh")}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={handleIncreaseAge}>Increase Age</button>

            <p>Is Employee: {isEmployee ? "Yes" : "No"}</p>
            <button onClick={handleSetIsEmployee}>Employee Status</button>
        </div>
    );
}

export default MyComponent