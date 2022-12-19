import React, { useState } from 'react';
import AddNote from './add-note';

const NoteCard = ({ note }) => {
  const [showUpdate, setUpdate] = useState(true);


  return (
    <div className='note'>
      <input className='input' type='checkbox' />

      {
        showUpdate
          ?
          <div>
            <p>Time: {note.time}</p>
            <p>{note.text}</p>
          </div>
          :
          <AddNote update={true} />
      }


      <button onClick={() => setUpdate(!showUpdate)} className='p-1'>Edit</button>
    </div>
  )
}

export default NoteCard;
