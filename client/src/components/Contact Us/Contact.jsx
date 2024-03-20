import React, { useState } from 'react';
import './Contact.scss'
import { mobile, mail } from '../../assets';

const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
  }

  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"auto", flexDirection:"column", marginTop:"2 rem"}}>
    <h2 className="head-text">Contact Us!</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card ">
        <img src={mail} alt="email" />
        <a href="mailto:contact@learnweb.com" className="p-text">contact@learnweb.com</a>
      </div>
      <div className="app__footer-card">
        <img src={mobile} alt="phone" />
        <a href="tel:+91 8080558210" className="p-text">+91 8080558210</a>
      </div>
    </div>
    {!isFormSubmitted ? (
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChange} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChange} />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChange}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
      </div>
    ) : (
      <div>
        <h3 className="head-text">
          Thank you for getting in touch!
        </h3>
      </div>
    )}
  </div>
  )
}

export default Contact