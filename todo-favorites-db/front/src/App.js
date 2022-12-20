import React, { useState, useEffect } from 'react';
import MainContext from './context/MainContext';
import MainBox from './components/main-box';
import './styles.css';
import { get } from './plugins/http';

function App() {
  const [notes, setNotes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selected, setSelected] = useState([]);

  const getAllNotes = async () => {
    const res = await get('allNotes');
    setNotes(res.notes);
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  useEffect(() => {
    console.log('selected', selected);
  }, [selected])

  return (
    <>
      <div className='main'>
        <MainContext.Provider value={{ notes, setNotes, favorites, setFavorites, selected, setSelected, getAllNotes }}>
          <MainBox />
        </MainContext.Provider>
      </div>
    </>
  );
}

export default App;
