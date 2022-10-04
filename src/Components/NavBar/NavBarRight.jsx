import React from "react";
import CartWidget from "../Content/Utils/CartWidget";

const NavBarRight = () => {
    return (
        <ul className="navbar-nav float-right">
            <li className="nav-item dropdown">
                <CartWidget></CartWidget>
            </li>
        </ul>
    )
}

export default NavBarRight;