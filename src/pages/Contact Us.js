import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../App.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMessageSent, setMessageSent] = useState(false); // State for the message sent confirmation
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // For now, let's just log the form data
    console.log(formData);

    // Show the message sent confirmation
    setMessageSent(true);

    // Automatically navigate back to the Home page after 2 seconds
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <main>
      <h1>Contact Us</h1>
      {isMessageSent ? (
        <div className="message-sent">
          <p>Your message has been sent!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="contact-button">
              Submit
            </button>
          </div>
        </form>
      )}
    </main>
  );
}

export default ContactUs;




