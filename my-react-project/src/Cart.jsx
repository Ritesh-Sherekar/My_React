import reactImg from "./assets/react.svg";

function Cart(){
    return(
        <div className="cart">
            <img className="cart-img" src={reactImg} alt="React Image"/>
            <h2 className="cart-head">My Website</h2>
            <p className="cart-text">Lorem consequatur eligendi labore iste alias.</p>
        </div>
    );
}

export default Cart