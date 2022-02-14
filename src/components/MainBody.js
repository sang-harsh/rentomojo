import React from 'react';
import {Route,Routes,Switch,HashRouter as Router} from 'react-router-dom';
import TableComponent from '../components/TableComponent';
import BlogsPage from '../components/BlogsPage';
import Blog from '../components/Blog';
import UserBlogs from '../components/UserBlogs';

function MainBody() {
  return (
    <div className='main-body'>
      <Switch>
        <Route exact path="/" component={TableComponent}></Route>
        <Route exact path="/blogsPage" component={BlogsPage}></Route>
        <Route path="/blogsPage/:id" component={UserBlogs}></Route>
        <Route path="/blog/:id/:postId" component={Blog}></Route>
      </Switch>
    </div>
  )
}

export default MainBody;