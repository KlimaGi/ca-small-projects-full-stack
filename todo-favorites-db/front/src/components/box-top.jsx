import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import MainContext from '../context/MainContext';

const BoxTop = ({ setShow }) => {
  const { notes, favorites } = useContext(MainContext);
  const [selected, setSelected] = useState(false);
  const btnAllStyle = selected ? 'selected' : '';
  const btnFavStyle = selected ? '' : 'selected';

  useEffect(() => {
    setShow(selected);
  }, [selected])

  return (
    <div className='main'>
      <button
        onClick={() => setSelected(true)}
        type='button'
        className={`button ${btnAllStyle}`}
      >
        All posts ({notes.length})
      </button>

      <button
        className={`button ${btnFavStyle}`}
        type='button'
        onClick={() => setSelected(false)}
      >favorites ({favorites.length})</button>
    </div >
  )
}

export default BoxTop;