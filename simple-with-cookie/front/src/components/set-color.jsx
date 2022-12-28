import React, { useRef } from 'react';
import { get } from '../plugins/http';

const SetColor = () => {
  const colorRef = useRef();

  const setColor = async () => {
    let color = colorRef.current.value;
    color = color.replace('#', '');
    console.log('color', color);
    const data = await get(`setColor/${color}`);
    console.log('data', data);
  }

  return (
    <div >
      <input ref={colorRef} type='color' />
      <button onClick={setColor} type='button'>set color</button>
    </div>
  )
}

export default SetColor;
