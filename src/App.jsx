// App.js
import React from 'react';
import Layout from './components/Layot';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutPage from './pages/AboutPage/AboutPage';
import PostList from './pages/PostList/PostList';


function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/posts" element={<PostList/>} />
      </Routes>
    </>
  );
}

export default App;
