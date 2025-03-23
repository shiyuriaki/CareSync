import React, { useState } from "react";

import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-title">CareSync</div>
            <ul className={isOpen ? "nav-links open": "nav-links"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#login" className="login-btn">Login</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;