import React, { useState } from "react";
import {jsPDF} from "jspdf";
import "./App.css";
import { useNavigate } from "react-router-dom";

const PatientForm = () => {
    const navigate =useNavigate();
    const handleBack = () => {
        navigate('/');
    }
    
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        dob: "",
        nextAppointment: "",
        symptoms: "",
        currentMedication: "",
        knownAllergies: "",
        generalHealthStatus: "",
        lifestyleFactors: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Data:", formData);
    alert("Form submitted successfully!");

    generatePDF(formData);
    };

    const generatePDF = (data) => {
        const doc = new jsPDF();

        doc.setFillColor(200, 200, 255);
        doc.rect(0,0, doc.internal.pageSize.width, doc.internal.pageSize.height, 'F');
    
        /*doc.setFont("courier", "bold");
        doc.setFontSize(18);
        doc.text("Self-Report Check-Up Form", doc.internal.pageSize.width / 40, 50, { align: "center" });*/
    
        const title = "Self-Report Check-Up Form";
        //const titleWidth = doc.getTextWidth(title);
        //const pageWidth = doc.pageSize.width;

        //const x = (pageWidth - titleWidth) /2;

        doc.setFont("roman numeral", "bold");
        doc.setFontSize(22);
        doc.setTextColor(0,0,0);
        doc.text(title, 65, 30, { align: "left" });

        doc.setFontSize(12);
        doc.setFont("roman numeral", "normal");

    
        // Add the form data to the PDF
        doc.text(`First Name: ${data.firstName}`, 20, 50);
        doc.text(`Last Name: ${data.lastName}`, 20, 60);
        doc.text(`Gender: ${data.gender}`, 20, 70);
        doc.text(`Date of Birth: ${data.dob}`, 20, 80);
        doc.text(`Date of Next Appointment: ${data.nextAppointment}`, 20, 90);
        doc.text(`Symptoms: ${data.symptoms}`, 20, 100);
        doc.text(`Current Medication: ${data.currentMedication}`, 20, 110);
        doc.text(`Known Allergies: ${data.knownAllergies}`, 20, 120);
        doc.text(`General Health Status: ${data.generalHealthStatus}`, 20, 130);
        doc.text(`Lifestyle Factors: ${data.lifestyleFactors}`, 20, 140);
    
        doc.save("Self-Report_Checkup.pdf");
    };
    
    return (
    <div className="patient-form">
        <h1>Patient Form</h1>
        <p>Fill our your health information here</p>

        <button onClick={handleBack}>Back to Main</button>
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <br/><input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange} required/>
            </label>

            <label>
                Last Name:
                <br/><input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange} required/>
            </label>

        <br />
            <label>
                Gender:
                <br/><select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange} required
                >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                </select>
            </label>
        <br />

        <label>
            Date of Birth:
            <br/><input
                type="date"
                name="dob"
                value={formData.dob}
                id="date_timerpicker_end"
                onChange={handleChange} required/>
        </label>

        <br />

        <label>
            Date of Next Appointment:
            <br/><input
                type="date"
                name="nextAppointment"
                value={formData.newAppointment}
                id="date_timerpicker_end"
                onChange={handleChange} required/>
        </label>

        <br />

        <label>
            Symptoms:
          <br/><textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange} required/>
        </label>
        
        <br />

        <label>
          Current Medication:
          <br/><textarea
            name="currentMedication"
            value={formData.currentMedication}
            onChange={handleChange} required/>
        </label>
        <br />

        <label>
          Known Allergies:
          <br/><textarea
            name="knownAllergies"
            value={formData.knownAllergies}
            onChange={handleChange} required/>
        </label>
        <br />

        <label>
          General Health Status:
          <br/><textarea
            name="generalHealthStatus"
            value={formData.generalHealthStatus}
            onChange={handleChange} required/>
        </label>
        <br />

        <label>
          Lifestyle Factors:
          <br/><textarea
            name="lifestyleFactors"
            value={formData.lifestyleFactors}
            onChange={handleChange} required/>
        </label>
        <br />

        <button id="submit-btn" type="submit">Submit</button>
        </form>
    </div>

    );
};




export default PatientForm;
