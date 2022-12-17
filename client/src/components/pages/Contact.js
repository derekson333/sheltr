import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="shadow-lg card bg-light mb-3">
        <h1 className="card-header">Contact Us</h1>
        {/* This text and format is janky but it's better than ipsum lorem */}
        <div className="card-body">
            <p>You can reach our support team Monday through Friday, 9AM-5PM, at <a href="tel:+6031234567">(603) 123-4567</a></p>
            <p>Feel free to leave a message at <a href="mailto:contact@sheltr.tech">contact@sheltr.tech</a></p>
            <p>Or don't be shy to fill out an application and we will contact you to make an appointment</p>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}
