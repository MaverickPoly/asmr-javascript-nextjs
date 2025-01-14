"use client";

import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Products from "@/data/Products";
import {CartContext} from "@/context/CartContext";
import React, {useContext} from "react";

export default function ProductsList() {
    useContext(CartContext);
    const {cart, addToCart, removeFromCart, clearCart, totalPrice, includes} = useContext(CartContext);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
            {Products.map((product) => (
                <Card key={product.id} className="shadow-md">
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.image}
                        alt={product.name}
                    />
                    <CardContent>
                        <Typography variant="h5">{product.name}</Typography>
                        <Typography variant="body1">${product.price}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" onClick={() =>
                            includes(product) ?
                                removeFromCart(product) :
                                addToCart(product)}
                        >
                            {includes(product) ? "Remove from Cart" : "Add to Cart"}
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}