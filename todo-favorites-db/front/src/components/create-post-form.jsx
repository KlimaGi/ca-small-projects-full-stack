import React, { useRef } from 'react';
import { post } from '../plugins/http';

const PostForm = () => {
  const postRefs = {
    titleRef: useRef(),
    imgRef: useRef(),
    userNameRef: useRef(),
    descriptionRef: useRef(),
  }

  async function confirmData() {
    const postData = {
      title: postRefs.titleRef.current.value,
      image: postRefs.imgRef.current.value,
      username: postRefs.userNameRef.current.value,
      description: postRefs.descriptionRef.current.value,
    };
    const data = await post('addPost', postData);
    console.log('postData--', data);

    postRefs.titleRef.current.value = '';
    postRefs.imgRef.current.value = '';
    postRefs.userNameRef.current.value = '';
    postRefs.descriptionRef.current.value = '';
  }

  return (
    <div className='container fd-column'>
      <input ref={postRefs.titleRef} type="text" placeholder='title' />
      <input ref={postRefs.imgRef} type="text" placeholder='image' />
      <input ref={postRefs.userNameRef} type="text" placeholder='username' />
      <input ref={postRefs.descriptionRef} type="text" placeholder='description' />

      <button onClick={confirmData}>add post</button>
    </div>
  )
}

export default PostForm;
