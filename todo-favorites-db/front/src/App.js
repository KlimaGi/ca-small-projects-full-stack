import React, { useState } from 'react';
import MainContext from './context/MainContext';

import MainBox from './components/main-box';
import './styles.css';


function App() {

  const [notes, setNotes] = useState([]);

  return (
    <>

      <div className='main'>
        <MainContext.Provider value={{ notes, setNotes }}>

          <MainBox />
        </MainContext.Provider>
      </div>
    </>
  );
}

export default App;
