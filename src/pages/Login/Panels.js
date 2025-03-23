import React from 'react';
import "./Panels.css";

const Panels = () => {
    return (
        <div className="container">
            <div className="panel">All Records</div>
            <div className="panel">Current Medications</div>
            <div className="panel">Doctor Reminders</div>
            <div className="panel">Pre-Visit Forms</div>
            <div className="panel">Expenses</div>
            <div className="panel">Book Appointments</div>
        </div>
            
    );
}

export default Panels;