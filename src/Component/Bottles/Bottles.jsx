import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLs, getStoredCart, removeFromLs } from "../../Utilities/Localstorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {
    const[bottles,setBottles] = useState([])
    const[cart,setCart] = useState([])
    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        console.log('called the useEffect',bottles.length);
        if(bottles.length){
        const storedCart = getStoredCart();
        console.log(storedCart,bottles);
        const saveCart = [];
        for(const id of storedCart){
            console.log(id);
            const bottle = bottles.find(bottle => bottle.id === id);
            if(bottle){
                saveCart.push(bottle);
            }
        }
        console.log('saved cart',saveCart);
        setCart(saveCart);
        }
        
    },[bottles])

    // Event Handler
    const handleAddToCart = bottle =>{
        const newCart = [...cart,bottle];
        setCart(newCart);
        addToLs(bottle.id);
    }
    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLs(id);
    }

    return (
        <div>
            <h2>Bottles Available:{bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle
                 key={bottle.id} 
                 bottle={bottle}
                 handleAddToCart={handleAddToCart}
                 ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;