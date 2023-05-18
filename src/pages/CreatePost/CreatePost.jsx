// CreatePost.js
import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Остальной код компонента CreatePost


const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      userId: 1, // Здесь вы можете указать нужного пользователя
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
    .then(response => {
      console.log('Post created:', response.data);
      setTitle('');
      setBody('');
      navigate("/posts");
    })
    .catch(error => {
      console.error('Error creating post:', error);
    });
};

return (
  <div>
    <h4>Create Post</h4>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  </div>
);
};

export default CreatePost;

