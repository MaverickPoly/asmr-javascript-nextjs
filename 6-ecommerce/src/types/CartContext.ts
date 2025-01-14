import {CartItem} from "@/types/CartItem";
import {Product} from "@/types/Product";

type CartContextType = {
    cart: CartItem[],
    addToCart: (product: Product) => void,
    removeFromCart: (product: Product) => void,
    clearCart: () => void,
    totalPrice: () => number,
    includes: (product: Product) => boolean,
};


export type {CartContextType};