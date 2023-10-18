import React from 'react'

interface Post{
    id:number,
    title:String
}
const UserPage = async() => {
    const res=await fetch('https://jsonplaceholder.typicode.com/photos');
    const post:Post[]=await res.json();
  return (
    <div>

        {post.map(post=><li>{post.id}{post.title}</li>)}
    </div>
  )
}

export default UserPage