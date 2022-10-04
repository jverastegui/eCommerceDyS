import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <aside className="left-sidebar">

            <div className="scroll-sidebar">

                <nav className="sidebar-nav">
                    <ul id="sidebarnav">

                        <li className="nav-small-cap"><i className="mdi mdi-dots-horizontal"></i> <span className="hide-menu">Personal</span></li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark" to={'/category/BtFG4z4AIUKjYM8CJ1Hy'} >
                        <i className="mdi mdi-view-dashboard"></i><span className="hide-menu">Electro </span>
                        </Link>
                        </li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark" to={'/category/afyt3xHf9vjkc1q7yCUb'} ><i className="mdi mdi-view-dashboard"></i><span className="hide-menu">Hombre </span></Link></li>
                        <li className="sidebar-item"> <Link className="sidebar-link waves-effect waves-dark" to={'/category/ttMPZfqLFYOMp2u9syFK'} ><i className="mdi mdi-view-dashboard"></i><span className="hide-menu">Mujer </span></Link></li>
                       
                    </ul>
                </nav>

            </div>
        </aside>

    )
}

export default Menu;