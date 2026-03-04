import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-title">Get in Touch</h1>

      <form className="contact-form">
        <div className="input-group">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
          <label>Subject</label>
          <input type="text" placeholder="Subject of your message" />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea rows="5" placeholder="Write your message here..." />
        </div>

        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;