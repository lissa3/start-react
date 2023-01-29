import * as React from 'react';
import { Link } from 'react-router-dom';

export function SideBar() {    

  return (
   
    <section className='flex flex-col'>
      
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/123">Post</Link>
      <Link to="/posts/new-post">New Post</Link>
    </section>
  );
};