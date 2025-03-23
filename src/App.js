// import logo from './logo.svg';
//import { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import PatientForm from "./PatientForm";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Logo from "./components/Logo/Logo";
import Panels from "./pages/Login/Panels";

function Main() {
  return (
    <div className="App">
      <section id="home">
       <Navbar />
        <Logo />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="login">
        <Login/>
      </section>
    </div>
  );
}

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/patient-form-title" element={<PatientForm/>}/>
        </Routes>
      </Router>
  );
}
export default App;
