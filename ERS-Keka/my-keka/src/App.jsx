import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavBar from "../Components/NavBar";
import MainPage  from "../Components/MainPage.jsx";
import LogoSlider from "../Components/LogoSlider.jsx";
import CreateAccount from "../Components/CreateAccount.jsx";
import MyProfile from "../Components/MyProfile.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <MainPage/>
      <LogoSlider/>
      <CreateAccount/>
      <MyProfile/>
    </>
  )
}

export default App
