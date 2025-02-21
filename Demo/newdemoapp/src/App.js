import React from "react";
import Navbar from "./Components/NavBar";
import MainPage from "./Components/Main/MainPage";
import Dyanamic from "./Components/Dynamic";

function App() {
  return (
    <div>
      <Navbar />
      <Dyanamic/>
      <MainPage/>
    </div>
  );
}

export default App;