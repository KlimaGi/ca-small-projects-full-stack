import React from 'react';
import PostForm from '../components/create-post-form';

const IndexPage = () => {
  return (
    <div className='d-flex fd-column'>
      <h5>Create post</h5>

      < PostForm />
    </div>
  )
}

export default IndexPage;
