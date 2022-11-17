import React from 'react';
import { post } from '../plugins/http';

const SingleMessage = ({ message, setMessages }) => {

  async function deleteMsg(message) {
    console.log('message', message);

    const data = await post('deleteMessage', message);
    setMessages(data);
  }

  return (
    <div>
      <div className='msg'>
        <p><b>{message.name}:</b> {message.msg}</p>
        <button onClick={() => deleteMsg({ name: message.name, msg: message.msg })}>x</button>
      </div>
    </div>
  )
}

export default SingleMessage
