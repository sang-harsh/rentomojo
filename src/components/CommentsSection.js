import React from 'react';

function CommentsSection(props) {

  return (
    <div className='comments-container'>
            {
              props.list && props.list.length>0 ?
              props.list.map((thisuser)=>
              <table>
                <tr>
                <td id="email">{thisuser.email}</td>
                </tr>
                <tr>
                <td id="single-comment">{thisuser.body}</td>
                </tr>
                </table>
              ): ''
            }
             
    </div>
  )
}

export default CommentsSection;
