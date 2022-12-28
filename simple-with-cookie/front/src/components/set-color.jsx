import React, { useRef } from 'react';

const SetColor = () => {
  const colorRef = useRef();

  const serColor = () => {
    const color = colorRef.current.value;
    console.log('color', color);
  }

  return (
    <div>
      <input ref={colorRef} type='color' />
      <button onClick={serColor} type='button'>set color</button>
    </div>
  )
}

export default SetColor;
