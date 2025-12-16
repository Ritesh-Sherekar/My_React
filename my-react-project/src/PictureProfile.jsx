
function PictureProfile(){

    const profileUrl = './src/assets/react.svg';

    const handleClick = (e) => e.target.style.display = "none";

  return(<img onClick={(e) => handleClick(e)} src={profileUrl}/>);
}

export default PictureProfile