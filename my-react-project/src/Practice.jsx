import { useState } from "react";

function Practice() {
  const [mobile, setMobile] = useState([]);
  const [mobileYear, setMobileYear] = useState(new Date().getFullYear());
  const [mobileMake, setMobileMake] = useState();
  const [mobileModel, setMobileModel] = useState();

  function handelAddMobile() {
    const newMobile = {
                        year: mobileYear,
                        make: mobileMake,
                        model: mobileModel
                    }

     setMobile(m => [...m, newMobile]);  
     
     setMobileYear(new Date().getFullYear());
     setMobileMake("");
     setMobileModel("");
  }

  function handelRemoveMobile(index) {
    setMobile(mobile.filter((_, i) => i !== index));
  }

  function handleMobileYearChange(event) {
    setMobileYear(event.target.value);
  }

  function handleMobileMakeChange(event) {
    setMobileMake(event.target.value);
  }

  function handleMobileModelChange(event) {
    setMobileModel(event.target.value);
  }

  return (
    <div>
      <h2>List Of Mobile`s</h2>
      <ul>
        {mobile.map((mobile, index)=> 
            <li key={index} onClick={()=>handelRemoveMobile(index)}>
                {mobile.year} {mobile.make} {mobile.model}
            </li>
        )}
      </ul>
      <input
        type="number"
        value={mobileYear}
        onChange={handleMobileYearChange}
      />
      <br />
      <input
        type="text"
        value={mobileMake}
        onChange={handleMobileMakeChange}
        placeholder="Enter Mobile Make"
      />
      <br />
      <input
        type="text"
        value={mobileModel}
        onChange={handleMobileModelChange}
        placeholder="Enter Mobile Model"
      />
      <br />
      <button onClick={handelAddMobile}>Add Mobile</button>
    </div>
  );
}

export default Practice;
