import React from 'react';

function PaginationComponent({postsPerPage , totalPosts , paginate}) {
  const pageNumbers = [];
  for(let i = 1;i<=Math.ceil(totalPosts/postsPerPage);i++){
    pageNumbers.push(i);
  }
  
  return (
      <nav className='pagination-component'>  
        <ul className="pagination">
          {
            pageNumbers.map(pageNumber=>(
              <li key={pageNumber} className='page-item'>
                <a onClick={()=>paginate(pageNumber)} className='page-link'>
                  {pageNumber}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
  )
}

export default PaginationComponent;