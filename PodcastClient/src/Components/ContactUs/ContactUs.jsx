import React from "react";
import "./ContactUs.css";
import { HeaderBar } from "../Common/Common";
import SoundBarrierLogo from "../Assets/SoundBarrierLogo.png";

const ContactUs = () => {
  return (
    <div>
      <HeaderBar />

      <img src={SoundBarrierLogo} alt="Podcast Logo" className="about-logo" />
      <div className="testContainer">
        <div className="info-container">
          <div className="contact-support-column">
            <div className="contact-info">
              <h2 className="contact-us-heading">Reach Out to Us:</h2>
              <p>
                <strong>Address:</strong> 130 Dundas St, London, ON N6A 1G2
              </p>
              <p>
                <strong>Email:</strong> bakingdozen2023@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +1 (519) 452-4430
              </p>
            </div>
            <div className="support-hours">
              <h2 className="contact-us-heading">Customer Support Hours:</h2>
              <p>
                <strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM
              </p>
              <p>
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
              </p>
              <p>
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </div>

          <div className="contact-us-container">
            <h2 className="contact-us-heading">Contact Us</h2>
            <p>
              If you have any questions or suggestions, please get in touch:
            </p>
            <form>
              <div className="form-group">
                <label className="label-style">Name</label>
                <input
                  className="contact-us-input"
                  type="text"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <label className="label-style">Email</label>
                <input
                  className="contact-us-input"
                  type="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <label className="label-style">Message</label>
                <textarea
                  className="contact-us-textarea"
                  id="message"
                  placeholder="Your Message"
                  rows="5"
                ></textarea>
              </div>
              <button className="submit-button" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="find-us-title">
          <h2 className="contact-us-heading">Where To Find Us:</h2>
        </div>
        <div className="map-container">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.7490434927777!2d-81.25360142334576!3d42.98355979548258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef3779e9706c1%3A0x6b0cea8bf906455!2sFanshawe%20Downtown%20Campus!5e0!3m2!1sen!2sca!4v1698611706019!5m2!1sen!2sca"
            width="500"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
