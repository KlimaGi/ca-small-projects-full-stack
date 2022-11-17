import React, { useState } from 'react';
import ChatBlock from './components/chat-block';
import WriteMessageBlock from './components/write-message-block';

import './styles.css';

function App() {
  const [messages, setMessages] = useState([]);

  return (
    <div className='d-flex f-direction'>

      <ChatBlock messages={messages} setMessages={setMessages} />
      <WriteMessageBlock setMessages={setMessages} />
    </div >
  );
}

export default App;
