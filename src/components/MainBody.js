import React from 'react';
import {Route,Switch} from 'react-router-dom';
import TableComponent from '../components/TableComponent';
import BlogsPage from '../components/BlogsPage';
import Blog from '../components/Blog';
import UserBlogs from '../components/UserBlogs';
import RandomBlog from './RandomBlog';

function MainBody() {
  return (
    <div className='main-body'>
      <Switch>
        <Route exact path="/" component={TableComponent}></Route>
        <Route exact path="/allBlogs" component={BlogsPage}></Route>
        <Route exact path="/blogsForUser/:id" component={UserBlogs}></Route>
        <Route path="/blogsForUser/:id/:postId" component={Blog}></Route>
        <Route path="/randomBlog" component={RandomBlog}></Route>
      </Switch>
    </div>
  )
}
export default MainBody;