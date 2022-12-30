import React, { useRef } from 'react';
import { get } from '../plugins/http';

const UserSet = () => {
  const nameRef = useRef();

  const setUser = async () => {
    const username = nameRef.current.value;
    console.log('username', username);
    const res = await get('setUser/' + username);
    console.log('res', res);
  }

  return (
    <div>
      <input ref={nameRef} type="text" placeholder='username' />
      <button type='button' onClick={setUser}>Set</button>
    </div>
  )
}

export default UserSet
