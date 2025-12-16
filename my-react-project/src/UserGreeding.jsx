
function UserGreeding(props){

    // if(props.isLogging){
    //     return <h2>Welcome {props.userName}</h2>
    // }
    // return <h2>Please Login in to continue</h2>

    //return props.isLogging ? <h2>Welcome {props.userName}</h2> : <h2>Please Login in to continue</h2>;

    const welcomeMessage = <h2 className="welcome">Welcome {props.userName}</h2> ;

    const loginMessage = <h2 className="login">Please Login in to continue</h2>

    return props.isLogging ? welcomeMessage : loginMessage;
}

export default UserGreeding