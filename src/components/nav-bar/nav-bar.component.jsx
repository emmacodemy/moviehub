import React from 'react';
import "./nav-bar.styles.scss"


const NavBar = () => {
    return (
        <nav className="nav-bar">
            <div className="logo">
                <h1>MOVIEHUB</h1>
            </div>
            <ul className="nav-links">
                <li><a href="dd">Discover</a></li>
                <li><a href="ddd">Pricing</a></li>
                <li><a href="ddd">Sign In</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;