import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";

const CartWidget = () => {
    const { TotalProductos } = useContext(CartContext);
    const TotalItems = TotalProductos();
    return (
        <Link className="nav-link waves-effect waves-dark" to={'/cart'} >
            <i className="mdi mdi-cart font-24"></i>
            <span className="position-absolute badge rounded-pill bg-danger" style={{ top: '9px', fontWeight: 'bold' }}>{TotalItems}</span>
        </Link>
    )
}

export default CartWidget;