import React from 'react';
import BoxTop from './box-top';
import NoteCard from './note-card';
import FavoriteOrDelete from './favorite-or-delete';
import AddNote from './add-note';

const MainBox = () => {
  return (
    <div className=''>
      mainbox
      <BoxTop />
      <NoteCard />
      <FavoriteOrDelete />
      <AddNote />
    </div>
  )
}

export default MainBox
