import React from 'react';
import ChatBlock from './components/chat-block';
import WriteMessageBlock from './components/write-message-block';

import './styles.css';

function App() {


  return (
    <div className='d-flex f-direction'>

      <ChatBlock />
      <WriteMessageBlock />
    </div >
  );
}

export default App;
