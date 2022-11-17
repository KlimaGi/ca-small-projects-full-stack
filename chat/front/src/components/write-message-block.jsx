import React, { useRef, useState } from 'react';
import { post } from '../plugins/http';

const WriteMessageBlock = () => {
  const chatInpRef = useRef()
  const chatTextRef = useRef();
  const [messages, setMessages] = useState([]);

  async function addMsg() {
    const msgData = {
      name: chatInpRef.current.value,
      msg: chatTextRef.current.value,
    }

    const data = await post('createMessage', msgData);

    setMessages(data);
    console.log('msg data', data);
    chatInpRef.current.value = '';
    chatTextRef.current.value = '';
  }

  return (

    <div className='d-flex'>
      <input
        ref={chatInpRef}
        placeholder='username'
        className='input'
        type='text'
      />
      <textarea
        ref={chatTextRef}
        placeholder='your message'
        className='input'
        type='text' />
      <button onClick={addMsg} className='button'>Add</button>
    </div>

  )
}

export default WriteMessageBlock
