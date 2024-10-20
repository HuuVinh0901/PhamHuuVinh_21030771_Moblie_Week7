import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const productExists = prevCart.find(item => item.id === product.id);
            if (productExists) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
    const clearCart = () => {
        setCart([]); // Đặt giỏ hàng về một mảng trống
    };
    return (
        <CartContext.Provider value={{ cart, addToCart,removeFromCart,clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
