import React, { useContext, useRef } from 'react';
import MainContext from '../context/MainContext';
import { post } from '../plugins/http';

const AddNote = ({ update }) => {
  const inpRef = useRef();
  const selectRef = useRef();

  const { setNotes } = useContext(MainContext);

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

    console.log('data', data);

    inpRef.current.value = '';
    selectRef.current.value = '0';
  }

  const updateNote = () => {
    const note = {
      text: inpRef.current.value,
      time: selectRef.current.value
    }
    console.log('note', note);

  }

  return (
    <div className='d-flex'>
      <select ref={selectRef} className='p-1'>
        {
          time.map((hour, index) => <option value={index}>{hour}</option>)
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
