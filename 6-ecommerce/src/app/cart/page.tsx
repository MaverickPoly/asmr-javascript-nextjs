"use client";

import {Button, Typography} from "@mui/material";
import {useContext} from "react";
import {CartContext} from "@/context/CartContext";

export default function CartPage() {
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
                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div key={item.product.id} className="flex items-center space-x-4">
                                <img className="w-20 h-20" src={item.product.image} alt={item.product.name}/>
                                <Typography>{item.product.name}</Typography>
                                <div>
                                    <Typography>Quantity: {item.quantity}</Typography>
                                    <Typography>${item.product.price}</Typography>
                                </div>
                                <Typography>Price: ${item.product.price * item.quantity}</Typography>
                                <div>
                                    <Button variant="outlined" onClick={() => removeFromCart(item.product)}>
                                        -
                                    </Button>
                                    <Button variant="outlined" onClick={() => addToCart(item.product)}>
                                        +
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Typography variant="h6" className="mt-20">
                        Total: ${totalPrice()}
                    </Typography>
                </>
            )}
        </div>
    )
}