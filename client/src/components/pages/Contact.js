import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="card bg-light mb-3">
        <h1 className="card-header">Contact Us</h1>
        {/* This text and format is janky but it's better than ipsum lorem */}
        <p className="card-body">
            <p>You can reach sheltr Monday through Friday 9AM-5PM at (603) 123-4567</p>
            <p>Feel free to leave a message at contact@sheltr.tech</p>
            <p>Or don't be shy to fill out an application and we will contact you to make an appointment</p>
        </p>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}
