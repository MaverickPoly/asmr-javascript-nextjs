"use client";

import React, {ReactNode, useState} from "react";
import {Product} from "@/types/Product";
import {CartItem} from "@/types/CartItem";
import {CartContextType} from "@/types/CartContext";


const CartContext = React.createContext<CartContextType>({
    cart: [],
    addToCart: (product: Product) => {},
    removeFromCart: (product: Product) => {},
    clearCart: () => {},
    totalPrice: () => 0,
    includes: (product: Product) => false,
});

const CartProvider = ({children}: {children: ReactNode}) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        const newCart = [...cart];
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].product === product) {
                newCart[i].quantity++;
                setCart(newCart);
                return;
            }
        }

        newCart.push({product, quantity: 1});
        setCart(newCart);
    };

    const removeFromCart = (product: Product) => {
        let newCart = [...cart];
        for (let i = 0; i < newCart.length; i++) {
            if (newCart[i].product === product) {
                if (newCart[i].quantity - 1 > 0) {
                    newCart[i].quantity -= 1;
                } else {
                    newCart = newCart.filter((cartItem, index) => i !== index);
                }
                setCart(newCart);
                return;
            }
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const totalPrice = (): number => {
        let total = 0;
        cart.forEach((cartItem, index) => total += cartItem.product.price * cartItem.quantity);
        return total;
    }

    const includes = (product: Product): boolean => {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product === product) {
                return true;
            }
        }
        return false;
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, totalPrice, includes}} >
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext};
