import React, { useRef } from 'react';
import { post } from '../plugins/http';

const AddPost = () => {
  const photoRef = useRef();
  const titleRef = useRef();

  const addPost = async () => {
    const postData = {
      photo: photoRef.current.value,
      title: titleRef.current.value
    };

    const res = await post('create', postData);
    console.log('res-create', res);
  }

  return (
    <div>
      <input ref={titleRef} type='text' placeholder='title' />
      <input ref={photoRef} type='text' placeholder='photo' />
      <button onClick={addPost} type='button'>Add post</button>
    </div>
  )
}

export default AddPost;
