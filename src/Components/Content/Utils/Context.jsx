import React, { useState, createContext } from "react";

export const CartContext = createContext();

const Provider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let producto = cart.find(x => x.id === item.id);
            cart[cart.indexOf(producto)].cantidad = cantidad;
            cart[cart.indexOf(producto)].subtotal = cantidad * producto.precio;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...item, cantidad: cantidad, subtotal: item.precio * cantidad }]);
           
        }

    }

    const removeItem = (id) => {
        const filterProduct = cart.filter(x => x.id !== id);
        setCart(filterProduct);
    }

    const clear = () => {
        setCart([]);
    }

    const TotalProductos = () => {
        return cart.length;
    }

    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const cartTotal = () => {
        let total=0;
        cart.forEach(x=> total=total+x.subtotal);
        return total;
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, isInCart, removeItem, cartTotal,TotalProductos }}>
            {children}
        </CartContext.Provider>
    )
}

export default Provider;