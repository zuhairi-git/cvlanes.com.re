import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = ({ id, title, to, image, content }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="card d-flex flex-column">
      <img src={image} className="card-img-top" alt="Blog Image" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <div className="mt-auto">
          <Link to={to} className="btn btn-primary" onClick={handleClick}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

const BlogList = () => {
  const blogs = [
    {
      id: 1,
      title: 'Circle of Daily Rhythm',
      to: '/blogs/circle-of-rhythm',
      image: '../img/blog-writing.jpg',
      content: 'The circle of daily rhythm is the pattern of behaviors and activities that one follows throughout a typical day.',
      hidden: false,
    },

    {
      id: 2,
      title: 'How to get notifications on iOS with personal focus on?',
      to: '/blogs/ios-notifications',
      image: '../img/blog/iphone-mail-notifications.jpg',
      content: 'Are you one of those people who have been experiencing difficulty getting notifications on your iPhone lately?',
      hidden: false,
    },

    {
      id: 3,
      title: "Embracing the Era of AI",
      to: '/blogs/premitive-human',
      image: '/img/blog/Human-AI/chess-ai.webp',
      content: 'I have a feeling that with the progress of AI and the advancements in machine learning, our world will reach such a level of sophistication that most humans may appear primitive once more.',
      hidden: true,
    },

  ];

  const renderBlogs = () => {
    return blogs.map((blog) => (
      <div key={blog.id} className={`col-md-4 mb-4 d-flex ${blog.hidden ? 'd-none' : ''}`}>
        <BlogPage
          id={blog.id}
          title={blog.title}
          to={blog.to}
          image={blog.image}
          content={blog.content}
        />
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">
        {renderBlogs()}
      </div>
    </div>
  );
};

export default BlogList;
