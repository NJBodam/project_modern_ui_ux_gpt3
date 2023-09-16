import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Whatever can be imagined, <br /> can be built</h1>
      <p>Our aim is to build practical experience as well as the innovative capacity of our participants through hands-on development of business and enterprise applications. Through mentorship, networking and event updates, we aim to fully equip our participants in tackling real world problems through tech</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
