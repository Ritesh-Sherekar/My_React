import { useState } from "react";

function MyComponent3() {
  const [car, setCar] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState();
  const [carModel, setModel] = useState();

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCar((c) => [...c, newCar]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }

  function handleRemoveCar(index) {
    setCar(car.filter((e,i)=> i !== index));
  }

  function handleYearChange(event) {
    setYear(event.target.value);
  }

  function handleMakeChange(event) {
    setMake(event.target.value);
  }

  function handleModelChange(event) {
    setModel(event.target.value);
  }

  return (
    <div>
      <h2>List Of Car`s</h2>
      <ul>
        {car.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} /> <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter the Make"
      />{" "}
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter the Model"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent3;
