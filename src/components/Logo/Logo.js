import React from "react";
import "./Logo.css";
import logoImg from "../../assets/logo.png";

const Logo = () => {
    return (
        <div className="logo-container">
            <img src={logoImg} alt="Logo" className="logo"/>
            <p>For the better of patient care</p>
        </div>
    );
};

export default Logo;