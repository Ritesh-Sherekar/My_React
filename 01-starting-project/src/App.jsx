import { useState } from "react";

import Header from "./Components/Header";
import UserInputs from "./Components/UserInputs";
import Results from "./Components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration >= 1;

  function handleChange(initialIdentifier, newValue) {
    setUserInput((prevIdentifier) => {
      return {
        ...prevIdentifier,
        [initialIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInputs userInput={userInput} onChage={handleChange} />
      {!isValidInput && (
        <p className="center">
          Entered the valid duration i.e. Greater then zero.
        </p>
      )}
      {isValidInput && <Results input={userInput} />}
    </>
  );
}

export default App;
