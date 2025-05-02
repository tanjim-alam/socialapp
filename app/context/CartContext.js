"use client"
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = useCallback(() => {
        const total = cartItems.reduce((acc, item) => acc + item.price, 0);
        setTotalPrice(total);
    }, [cartItems]);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        calculateTotalPrice();
    }, [cartItems, calculateTotalPrice]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
        setTotalPrice(0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, totalPrice, removeItemFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
