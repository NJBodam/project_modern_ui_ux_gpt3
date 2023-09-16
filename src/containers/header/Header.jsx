import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Learn Collaborate and Build amazing things together
      </h1>
      <p>
        Ready to launch into the digital stratosphere? Enroll in Codedeep, a virtual training center focused on
        software development and nurturing exceptional developers.
      </p>

      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" /> */}
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
