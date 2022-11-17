import React from 'react';
import SingleMessage from './single-message';

const ChatBlock = ({ messages, setMessages }) => {
  console.log('messages', messages);
  return (
    <div>
      chat-block
      <div className='chat-container'>
        {messages && messages.map((message, i) => (
          <SingleMessage message={message} key={i} setMessages={setMessages} />
        ))}
      </div>


    </div>
  )
}

export default ChatBlock
