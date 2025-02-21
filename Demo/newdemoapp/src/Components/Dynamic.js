
const myArray = ['First' , 'Second' , 'Third']

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

export default function Dyanamic(props){
    const description = myArray[genRandomInt(2)];
    return(
        <p class="Dyna">{description} React concepts you will need for almost any app you are
        going to build!</p>
    );
}