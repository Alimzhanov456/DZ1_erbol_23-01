// PostList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div>
      <h4>Post List</h4>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
      <Link to="/posts/create">Create Post</Link>
    </div>
  );
};

export default PostList;
