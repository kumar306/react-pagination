import React from "react";

const Posts = ({ posts }) => {
    return (
        <>
        <ul className='list-group m-5'>
        {posts.map(post => {
          return <li key={post.id} className='list-group-item list-group-item-warning p-3'>
            Post Number: <span class="text-primary">{post.id}</span><br></br>
            From: <span class="text-danger">{post.email}</span><br></br>
            Body: <span class="text-success">{post.body}</span></li>
        })}
        </ul> 
        </>
    );
}


export default Posts;