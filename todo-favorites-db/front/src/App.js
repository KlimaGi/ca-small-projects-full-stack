import React, { useState, useEffect } from 'react';
import MainContext from './context/MainContext';

import MainBox from './components/main-box';
import './styles.css';
import { get } from './plugins/http';


function App() {

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const allNotes = async () => {

      const res = await get('allNotes');
      console.log('res-all-notes', res.notes);
      setNotes(res);
    };
    allNotes();
  }, [])

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
