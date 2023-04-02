import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blogs = () => {
  return (
    <>
      <h1>Blog Articles</h1>
      <nav>
        <Link to="blog1">Blog1</Link> <br />
        <Link to="blog2">Blog2</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Blogs;
