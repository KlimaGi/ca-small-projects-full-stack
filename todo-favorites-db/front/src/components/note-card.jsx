import React, { useState, useContext } from 'react';
import MainContext from '../context/MainContext';
import AddNote from './add-note';

const NoteCard = ({ note }) => {
  const [showUpdate, setUpdate] = useState(true);
  const { selected, setSelected } = useContext(MainContext);

  const checked = (e) => {
    if (e.target.checked) setSelected([...selected, note]);
    else {
      const selectedNotes = selected.filter((x) => x._id !== note._id);
      setSelected([...selectedNotes]);
    }
  }

  return (
    <div className='note'>
      <input onChange={checked} className='input' type='checkbox' />
      {
        showUpdate
          ?
          <div>
            <p>Time: {note.time}</p>
            <p>{note.text}</p>
          </div>
          :
          <AddNote update={true} note={note} />
      }
      <button onClick={() => setUpdate(!showUpdate)} className='p-1'>Edit</button>
    </div>
  )
}

export default NoteCard;
