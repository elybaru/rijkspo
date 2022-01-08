import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <div>
            <h1>Rijkspo</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/search">Search</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
            <NavLink to="/visitorlog">Visitor Log</NavLink>
        </div>
    )
}

export default NavBar;