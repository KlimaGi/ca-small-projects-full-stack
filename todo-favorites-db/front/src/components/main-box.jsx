import React, { useState, useContext } from 'react';
import BoxTop from './box-top';
import NoteCard from './note-card';
import FavoriteOrDelete from './favorite-or-delete';
import AddNote from './add-note';
import MainContext from '../context/MainContext';

const MainBox = () => {
  const [show, setShow] = useState(true);
  const { notes, favorites } = useContext(MainContext);

  return (
    <div className='container d-flex fd-column'>
      <BoxTop setShow={setShow} />

      <div className='grow-1'>
        {
          notes.length > 0 &&
          (show ? notes : favorites).map((note) => <NoteCard note={note} key={note._id} />)
        }

      </div>

      <FavoriteOrDelete />

      {
        show && <AddNote />
      }
    </div>
  )
}

export default MainBox;
