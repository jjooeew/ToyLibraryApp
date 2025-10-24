import React, {createContext, useState, useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const getTotalItems = () => cart.length;

    const getTotalPrice = () => {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total += parseFloat(cart[i].price)
        }
        return total.toFixed(2);
    }


    const addToCart = (item) => {
        setCart([...cart, item]);
    };
    const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
    };

    return (
    <CartContext.Provider value={{ cart, addToCart, getTotalPrice, removeFromCart, getTotalItems }}>
        {children}
    </CartContext.Provider>
    );
}

