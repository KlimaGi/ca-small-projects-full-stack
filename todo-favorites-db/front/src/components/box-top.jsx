import React, { useState, useContext } from 'react';
import MainContext from '../context/MainContext';

const BoxTop = () => {
  const { notes, favorites } = useContext(MainContext);
  const [selected, setSelected] = useState(false);
  const btnAllStyle = selected ? 'selected' : '';
  const btnFavStyle = selected ? '' : 'selected';

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