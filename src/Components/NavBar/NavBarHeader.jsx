import React from "react";
import { Link } from "react-router-dom";

const NavBarHeader = () => {
    return (
        <div className="navbar-header">

            <a className="nav-toggler waves-effect waves-light d-block d-md-none" href='!#'><i className="ti-menu ti-close"></i></a>

            <Link className="navbar-brand" to={'/'}>

                <b className="logo-icon">

                    <img src="assets/images/logo-icon.png" alt="homepage" className="dark-logo" />

                    <img src="assets/images/logo-light-icon.png" alt="homepage" className="light-logo" />
                </b>

                <span className="logo-text">

                    <img src="assets/images/logo-text.png" alt="homepage" className="dark-logo" />

                    <img src="assets/images/logo-light-text.png" className="light-logo" alt="homepage" />
                </span>
            </Link>

            <a className="topbartoggler d-block d-md-none waves-effect waves-light" href='!#' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more"></i></a>
        </div>
    )
}

export default NavBarHeader;