import React from "react";
import "./About.css";

const About = () => {

    return (
        <div className="about-container">

            <section className="about-section">
            <h1>About CareSync</h1>
            <p summary = "text-white text-lg max-w-2xl text-center">
            "CareSync is an application designed to create personalized medical records, allowing patients to stay connected to their health, resources, and their primary care provider with just a click. With CareSync, you can expect more seamless doctor visits and up-to-date records of your care. Having trouble? Our AI Assistance is just a step away, ready to guide you through anything!"

            </p>
            </section>

            <section className="motivation-section">
            <h1>Motive</h1>
            <p>
            "Our goal is to provide more effective patient care by streamlining the communication between the patient and the doctor. We want the appointment time between the doctor and patient to be as smooth as possible so our app, and provide better understanding of one own's health"
            </p>
            </section>

        </div>
    );

};


export default About;
