import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Completely Remote',
    text:
      'Learn to code from anywhere with our completely remote training. You can learn from the comfort of your home or anywhere you find yourself.',
  },
  {
    title: 'No Coding Experience Required',
    text:
      'You do not need any prior coding experience to join our program. We will teach you everything you need to know to become a software engineer.',
  },
  {
    title: 'Affordable & Flexible Payment Structure',
    text:
      'Our tuition plan is very inexpensive and also provides a flexible payment structure that allows you to pay in installments.',
  },
  {
    title: 'Tailoured Modules',
    text:
      'Our modules are tailored to meet the needs of our students. We have modules for beginners, intermediate and advanced students.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The structure is flexible and beginner friendly. Begin building your career today</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
