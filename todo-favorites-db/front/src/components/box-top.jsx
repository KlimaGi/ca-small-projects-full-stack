import React, { useState } from 'react'

const BoxTop = () => {
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
        All posts
      </button>

      <button
        className={`button ${btnFavStyle}`}
        type='button'
        onClick={() => setSelected(false)}
      >favorites</button>
    </div >
  )
}

export default BoxTop;