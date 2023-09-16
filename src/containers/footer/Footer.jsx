import React from 'react';
import logo from '../../codedeepWhiteTPRectangle.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Its time to seize the moment</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo} alt="gpt3_logo" />
        <p>Insert Address Here <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Insert Address</p>
        <p>Insert Contact Number Here</p>
        <p>info@codedeep.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 Codedeep. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
