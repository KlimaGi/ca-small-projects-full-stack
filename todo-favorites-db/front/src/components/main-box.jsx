import React, { useContext } from 'react';
import BoxTop from './box-top';
import NoteCard from './note-card';
import FavoriteOrDelete from './favorite-or-delete';
import AddNote from './add-note';
import MainContext from '../context/MainContext';

const MainBox = () => {
  const { notes } = useContext(MainContext);
  return (
    <div className='container d-flex fd-column'>
      <BoxTop />

      <div className='grow-1'>
        {
          notes.length > 0 &&
          notes.map((note) => <NoteCard note={note} key={note._id} />)
        }

      </div>

      <FavoriteOrDelete />
      <AddNote />
    </div>
  )
}

export default MainBox
