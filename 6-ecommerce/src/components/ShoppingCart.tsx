"use client";

import {Button, Typography} from "@mui/material";
import {useContext} from "react";
import {CartContext} from "@/context/CartContext";

export default function ShoppingCart() {
    const {cart, addToCart, removeFromCart, clearCart, totalPrice, includes} = useContext(CartContext);

    return (
        <div className="p-10">
            <Typography variant="h3" gutterBottom>
                Shopping Cart
            </Typography>
            {cart.length === 0 ? (
                <Typography variant="h4">Your Cart is empty!</Typography>
            ) : (
                <>
                    <div className="space-y-4 max-w-2xl">
                        {cart.map((item) => (
                            <div key={item.product.id} className="flex items-center space-x-8 bg-neutral-50 justify-center p-4">
                                <img className="w-20 h-20" src={item.product.image} alt={item.product.name}/>
                                <Typography>{item.product.name}</Typography>
                                <div>
                                    <Typography>Quantity: {item.quantity}</Typography>
                                    <Typography>Price: ${item.product.price}</Typography>
                                </div>
                                <Typography>${item.product.price * item.quantity}</Typography>
                                <div>
                                    <Button variant="outlined" onClick={() => removeFromCart(item.product)}>
                                        <Typography variant="h4">-</Typography>
                                    </Button>
                                    <Button variant="outlined" onClick={() => addToCart(item.product)} size="large">
                                        <Typography variant="h4">+</Typography>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Typography variant="h6" className="mt-20" gutterBottom>
                        Total: ${totalPrice()}
                    </Typography>
                    <Button variant="contained" size="large">
                        Pay Now
                    </Button>
                </>
            )}
        </div>
    )
}