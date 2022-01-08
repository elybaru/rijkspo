import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css"

function NavBar() {
    return (
        <div className="navBar">
            <div className="flexItems">
            </div>
            <div className="flexItems">
                <h1 className="logo">Rijkspo</h1>
            </div>
            <div className="flexItems">
                <NavLink to="/" className="menusItems">Home</NavLink>
                <NavLink to="/search" className="menusItems">Search</NavLink>
                <NavLink to="/favorites" className="menusItems">Favorites</NavLink>
                <NavLink to="/visitorlog" className="menusItems">Visitor Log</NavLink>
            </div>
        </div>
    )
}

export default NavBar;