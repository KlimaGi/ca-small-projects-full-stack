import React from 'react';
import './styles.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsPage from './pages/posts-page.jsx';
import IndexPage from './pages/index-page';


function App() {

  return (
    <>
      <h3>Posts page</h3>
      <div className='main'>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/posts' element={<PostsPage />} />

          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
