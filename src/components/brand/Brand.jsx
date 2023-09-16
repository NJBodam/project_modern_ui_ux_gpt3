import React from 'react';
import { react, python, github, java, javascript } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div className="brand_logos">
      <div>
        <img style={{ width: '50%' }} src={react} />
      </div>
      <div>
        <img style={{ width: '50%' }} src={python} />
      </div>
      <div>
        <img style={{ width: '70%' }} src={github} />
      </div>
      <div>
        <img style={{ width: '50%' }} src={java} />
      </div>
      <div>
        <img style={{ width: '50%' }} src={javascript} />
      </div>
    </div>
  </div>
);

export default Brand;
