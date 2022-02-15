import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PaginationComponent from './PaginationComponent';
import { Link } from 'react-router-dom';

function UserBlogs() {
  const [userBlogsList,setUserBlogsList]=useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(5);
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let currentPosts = userBlogsList.slice(indexOfFirstPost,indexOfLastPost);
  const {id}=useParams();
  let local = localStorage.getItem("delete");


  useEffect(()=>{
    getBlogs();
    if(local){
      alert(`Deleted item ${local}`);
      localStorage.removeItem("delete");
    }
  },[])
  
  function getBlogs(){
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(res=>res.json())
    .then(result=>{
      setUserBlogsList(result);
    }).catch(error =>console.log(error));
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='blogsPage'>
      <h1 id="blogsPageTitle"> Blogs </h1>
      <div className="postsContainer">
      <PaginationComponent postsPerPage={postsPerPage} totalPosts={userBlogsList.length} paginate={paginate}/>
          {
              currentPosts.map((val)=>
              <div className="posts">
                  <p className="post_id">{val.id}</p>
                  <h2 key={val.id} className='title'><Link to={`/blogsForUser/${id}/${val.id}`}>{val.title}</Link></h2>
                  <p className="post_info">{val.body}</p>
              </div>
              )
          }
      </div>
      <br/>
  </div>
  )
}

export default UserBlogs;