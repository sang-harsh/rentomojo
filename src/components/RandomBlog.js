import React, { useEffect, useState } from 'react';
import CommentsSection from './CommentsSection';
function RandomBlog() {
  let randomPostId = Math.floor(Math.random() * 10) + 1;
  const [blog,setBlog]= useState([]);
  const [commentList,setCommentList]=useState([]);
  const [display,setDisplay]=useState(false);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`)
    .then(res=>res.json())
    .then(result=>{
      setBlog(result);
    }).catch(error =>console.log(error));
  },[])

  useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}/comments`)
    .then(res=>res.json())
    .then(res1=>{
      setCommentList(res1);
    }).catch(error =>console.log(error));
  },[display])

  return (
    <div className='blog'>
      <div className='blog-container'>
          <div className="single-blog">
             <p className="blog_id">{blog.id}</p>
              <h2 className='blog-title'>{blog.title}</h2>
             <p className="blog-info">{blog.body}</p>
            <br/>
            <button id='comments-button' onClick={()=>{setDisplay(!display)}}>Comments</button>
            {display && <CommentsSection list={commentList}/>}
          </div>
      </div>
    </div>
  )
}

export default RandomBlog;