import { useEffect, useState } from "react";

const CartList = ({ cart }) => {
    const[CART,setCART]=useState([])
    useEffect(()=>{
        setCART(cart)
    },[cart])
    return (
        <>
            {CART?.map((CartItem, i) => {
                return (
                    <div className="cart-item" key={i}>
                        <img src={CartItem.url} alt={CartItem.name} />
                        <span>{CartItem.name}</span>
                        <button>-</button>
                        <span>{CartItem.quantity}</span>
                        <button>+</button>
                        <span>Rs. {CartItem.price} /-</span>
                    </div>
                );
            })}
            <p>
                {cart
                    .map((items) => items.price * items.quantity)
                    .reduce((total, value) => total + value, 0)}
            </p>
        </>
    );
};

export default CartList;
