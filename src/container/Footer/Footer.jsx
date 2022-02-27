import React from 'react';
import './Footer.css';
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FaTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div classname="app__footer-links_contact"></div>
      <div className="app__footer-links_logo"></div>
    </div>
  </div>
);

export default Footer;
