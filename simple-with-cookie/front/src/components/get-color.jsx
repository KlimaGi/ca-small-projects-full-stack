import React from 'react'
import { get } from '../plugins/http';

const GetColor = () => {
  const setColor = async () => {
    const data = await get('getColor');
    console.log('data-get', data);
  }

  return (
    <div className='box'>
      <button onClick={setColor} type='button'>get color</button>
    </div>
  )
}

export default GetColor
