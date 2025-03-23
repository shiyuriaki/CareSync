import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate("/patient-form-title");
    };

    return (
        <div>
            <section id="login" className="login">
            <h1>Login here to Report!</h1>
            
            <button onClick={handleLogin}>Login here to Report</button>
            
            </section>
        </div>  
    );
};

export default Login;
