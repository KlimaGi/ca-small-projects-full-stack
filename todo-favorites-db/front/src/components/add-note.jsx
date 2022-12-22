import React, { useContext, useRef } from 'react';
import { useEffect } from 'react';
import MainContext from '../context/MainContext';
import { post } from '../plugins/http';

const AddNote = ({ update, note, setShowUpdate }) => {
  const inpRef = useRef();
  const selectRef = useRef();

  const { notes, setNotes, getAllNotes } = useContext(MainContext);

  useEffect(() => {
    if (update) {
      inpRef.current.value = note.text;
      selectRef.current.value = note.time;
    }
  }, [])

  const time = [];
  for (let i = 0; i <= 12; i++) {
    if (i < 10) time.push(`0${i}:00`);
    else time.push(`${i}:00`);
  }

  const addNote = async () => {
    const note = {
      text: inpRef.current.value,
      time: selectRef.current.value
    }

    const data = await post('addNote', note);

    console.log('data-add-node', data);

    setNotes([...notes, data.note]);
    inpRef.current.value = '';
    selectRef.current.value = '0';
  }

  const updateNote = async () => {
    const noteUpdated = {
      text: inpRef.current.value,
      time: selectRef.current.value,
      id: note._id
    }

    const data = await post('update', noteUpdated);

    const allNotes = notes.filter(item => item._id !== note.id);
    setNotes([...allNotes, data.note]);
    getAllNotes();
    setShowUpdate(true);
  }

  return (
    <div className='d-flex'>
      <select ref={selectRef} className='p-1'>
        {
          time.map((hour, index) => <option value={index} key={index}>{hour}</option>)
        }
      </select>
      <input ref={inpRef} type="text" placeholder='note' className='grow-1 p-1' />
      {
        update
          ?
          <button type='button' onClick={updateNote} className='p-1'>Update</button>
          :
          <button type='button' onClick={addNote} className='p-1'>Add</button>
      }
    </div>
  )
}

export default AddNote
