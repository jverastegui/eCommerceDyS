import React from "react";
import NavBarHeader from "./NavBarHeader";
import NavBarRight from "./NavBarRight";

const NavBart = () => {
    return (
        <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">

                <NavBarHeader></NavBarHeader>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                </div>
                <NavBarRight></NavBarRight>
            </nav>
        </header>

    )
}

export default NavBart;