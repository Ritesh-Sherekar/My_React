
function Button(){
    //let count = 0;

    // const handleClick = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${count} ${name} Click Me!`)
    //     }else{
    //          console.log(`${name} Stop Clicking Me!`)
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "Hey 🙋‍♂️";
    

    return(<button onClick={(e)=> handleClick(e)}>Click Me 😊</button>);
}

export default Button