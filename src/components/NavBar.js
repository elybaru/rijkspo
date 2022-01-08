import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css"

function NavBar() {
    return (
        <div className="navBar">
            <div className="navFlexItems">
            </div>
            <div className="navFlexItems">
                <h1 className="logo">Rijkspo</h1>
            </div>
            <div className="navFlexItems">
                <NavLink to="/" className="menuItems">Home</NavLink>
                <NavLink to="/search" className="menuItems">Search</NavLink>
                <NavLink to="/favorites" className="menuItems">Favorites</NavLink>
                <NavLink to="/visitorlog" className="menuItems">Visitor Log</NavLink>
            </div>
        </div>
    )
}

export default NavBar;