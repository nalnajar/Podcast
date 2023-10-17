// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import TermsModal from "../Terms/TermsModal";
import PrivacyModal from "../Privacy/PrivacyModal";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/about">About</Link>
      <Link to="/contact-us">Contact Us</Link>
      <TermsModal />
      <PrivacyModal />
    </div>
  );
};

export { Footer };
