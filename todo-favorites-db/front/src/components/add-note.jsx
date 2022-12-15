import React, { useRef } from 'react';

const AddNote = () => {
  const inpRef = useRef();
  const selectRef = useRef();

  const time = [];
  for (let i = 0; i <= 12; i++) {
    if (i < 10) time.push(`0${i}:00`);
    else time.push(`${i}:00`);
  }

  const addNote = () => {
    const note = {
      text: inpRef.current.value,
      time: selectRef.current.value
    }
    console.log('note', note);

    inpRef.current.value = '';
    selectRef.current.value = '0';
  }


  return (
    <div className='d-flex'>
      <select ref={selectRef} className='p-1'>
        {
          time.map((hour, index) => <option value={index}>{hour}</option>)
        }
      </select>
      <input ref={inpRef} type="text" placeholder='note' className='grow-1 p-1' />
      <button type='button' onClick={addNote} className='p-1'>Add</button>
    </div>
  )
}

export default AddNote
