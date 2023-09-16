import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Blog page coming soon!, <br /> We have a lot we intend to share.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="Be on the lookout, we would be blogging soon..." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 16, 2023" text="Yes, we have a lot in store to share" />
        <Article imgUrl={blog03} date="Sep 16, 2023" text="We will keep you posted as soon as possible" />
        <Article imgUrl={blog04} date="Sep 16, 2023" text="How soon? very soon. Do not hold your breathe though" />
        <Article imgUrl={blog05} date="Sep 16, 2023" text="Its going to be fun and interesting" />
      </div>
    </div>
  </div>
);

export default Blog;
