import { useState } from "react";

import Header from "./Components/Header";
import UserInputs from "./Components/UserInputs";
import Results from "./Components/Results";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestere: 10000,
    annualInvester: 1200,
    expectedInvester: 6,
    duration: 10,
  });

  function handleChange(initialIdentifier, newValue) {
    setUserInput((prevIdentifier) => {
      return {
        ...prevIdentifier,
        [initialIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChage={handleChange}/>
      <Results  input={userInput}/>
    </>
  );
}

export default App;
