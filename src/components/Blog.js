import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentsSection from './CommentsSection';
import { Link } from 'react-router-dom';

function Blog() {

  let {postId,id}=useParams();

  const [blog,setBlog]= useState([]);
  const [commentList,setCommentList]=useState([]);
  const [display,setDisplay]=useState(false);
  //for Blog details
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res=>res.json())
    .then(result=>{
      setBlog(result);
    }).catch(error =>console.log(error));
  },[]) 
  //for Comments details
  useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res=>res.json())
    .then(res1=>{
      setCommentList(res1);
      //console.log(commentList)
    }).catch(error =>console.log(error));
  },[display])

  //function for Delete post
  function deleteBlog(id){
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
      method: 'DELETE'
    })
    .then(res=>res.json())
    .then(res2=>{
      alert(`The post with id ${postId} DELETED`);
    }).catch(error =>console.log(error));
  }

  return (
    <div className='blog'>
      <div className='blog-container'>
          <div className="single-blog">
             <p className="blog_id">{blog.id}</p>
              <h2 className='blog-title'>{blog.title}</h2>
             <p className="blog-info">{blog.body}</p>

            <Link to={`/blogsPage/${id}`}>
              <button id='comments-button' onClick={()=>deleteBlog(blog.id)}>Delete</button>
            </Link>
            <br/>
            <button id='comments-button' onClick={()=>{setDisplay(!display)}}>Comments</button>
            {display && <CommentsSection list={commentList}/>}

          </div>
      </div>
    </div>
  )
}

export default Blog;