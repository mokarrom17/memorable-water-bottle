const getStoredCart = () =>{
    const storeCartString = localStorage.getItem('cart');
    if(storeCartString){
        return JSON.parse(storeCartString);
    }
    return [];
}

const saveCartToLs = cart =>{
    const cartStringiFied = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringiFied);
}

const addToLs = id =>{
    const cart = getStoredCart();
    cart.push(id);

    saveCartToLs(cart);
}

const removeFromLs = id =>{
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx!== id);
    saveCartToLs(remaining);
}

export{ addToLs,getStoredCart ,removeFromLs}