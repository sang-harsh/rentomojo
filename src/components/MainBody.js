import React from 'react';
import {Route,Routes} from 'react-router-dom';
import TableComponent from '../components/TableComponent';
import BlogsPage from '../components/BlogsPage';
import Blog from '../components/Blog';
import UserBlogs from '../components/UserBlogs';

function MainBody() {
  return (
    <div className='main-body'>
      <Routes>
        <Route path="/" element={<TableComponent/>}></Route>
        <Route exact path="/blogsPage" element={<BlogsPage/>}></Route>
        <Route path="/blogsPage/:id" element={<UserBlogs/>}></Route>
        <Route path="/blog/:id/:postId" element={<Blog/>}></Route>
      </Routes>
    </div>
  )
}

export default MainBody;