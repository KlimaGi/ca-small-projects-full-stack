import React, { useState } from 'react';
import AddNote from './add-note';

const NoteCard = () => {
  const [showUpdate, setUpdate] = useState(false);


  return (
    <div className='note'>
      <input className='input' type='checkbox' />

      {
        showUpdate
          ?
          <div>
            <p>time</p>
            <p>Note</p>
          </div>
          :
          <AddNote update={true} />
      }


      <button onClick={() => setUpdate(!showUpdate)} className='p-1'>Edit</button>
    </div>
  )
}

export default NoteCard;
