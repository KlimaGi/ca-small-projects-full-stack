import React, { useState } from 'react'
import { get } from '../plugins/http';

const GetColor = () => {

  const [colorSyle, setColorStyle] = useState('#9eb159')

  const getColor = async () => {
    const res = await get('getColor');
    console.log('data-get', res.data.color);
    setColorStyle("#" + res.data.color);
  }

  return (
    <div className='box' style={{ backgroundColor: colorSyle }} >
      <button onClick={getColor} type='button'>get color</button>
    </div>
  )
}

export default GetColor;
