import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is codedeep"
        text="At CodeDeep, we believe that coding is an essential skill in
              today's digital age, and we are committed to providing affordable
              and accessible education to all. Our academy boasts a team of
              experienced and dedicated instructors who are passionate about
              coding and teaching. They bring real-world experience to the
              classroom and are committed to helping our students succeed."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The modules can be personalized according to interests and skill level.
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Beginner"
        text="HTML, CSS, JavaScript, Algorithms I & Version Control with Git. Projects inlcude Portfolio, Survey Form, Product Landing Page"
      />
      <Feature
        title="Intermediate"
        text="Frontend Libraries (React JS, Angular), Backend Development (Java, .NET), Data Analysis & Visualization I, APIs. Projects include Dashboards & CRUD Ops"
      />
      <Feature
        title="Advance"
        text="Microservices, Security, Advance SQL, Test Frameworks, Data Analysis & Visualization II. Projects include Microservice Apps, Testing, Fullstack Apps,"
      />
    </div>
  </div>
);

export default WhatGPT3;
