import React,{useEffect, useState} from 'react';
import PaginationComponent from './PaginationComponent';

function BlogsPage() {
  
  const [posts, setPosts]= useState([]);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(5);
  const [filteredPosts,setFilteredPosts]=useState([]);
 
  let [searchTerm,setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(posts);
      }).catch(error =>console.log(error));
  }, [])

  useEffect(() => { 
    setFilteredPosts(
      posts.filter((val)=>{
        if(searchTerm===""){
          return val;
        }
        else if(val.title.toLowerCase().includes(searchTerm)){
          return val;
        }
      })
    )
  }, [searchTerm]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

  return (
    <div className='blogsPage'>
      <h1 id="blogsPageTitle">List of all Blogs</h1>
      <div className="postsContainer">
      
      <input id="blogSearchInput"placeholder='Search for Blog...' 
      onChange={(e) =>{setSearchTerm(e.target.value.toLowerCase())}}/>

      {/* <PaginationComponent postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/> */}

          {   
              filteredPosts.map((val)=>
              <div className="posts">
                  <p className="post_id">{val.id}</p>
                  <h2 className='title'>{val.title}</h2>
                  <p className="post_info">{val.body}</p>
              </div>
              )
          }
      </div>
      <br/>
  </div>
  )
}

export default BlogsPage;