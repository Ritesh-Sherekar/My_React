
import { useState } from "react";

function MyComponent2(){

    const [name, setName] = useState("Guest");
    const [quentity, setQuentity] = useState();
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");

    const handleNameChange = (event) =>{
        setName(event.target.value);
    }

    const handleQuentityChange = (event) =>{
        setQuentity(event.target.value);
    }

    const handleCommentChange = (event) =>{
        setComment(event.target.value);
    }

    const handlePaymentChange = (event) =>{
        setPayment(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name :- {name}</p>

            <input value={quentity} onChange={handleQuentityChange} type="number"/>
            <p>Quentity :- {quentity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter Your Comment"/>
            <p>Comment :- {comment}</p>

            <select onChange={handlePaymentChange}>
                <option value="">Select Option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">MasterCard</option>
                <option value="Rupe">Rupe</option>
            </select>
            <p>Payment :- {payment}</p>
        </div>
    );
}

export default MyComponent2