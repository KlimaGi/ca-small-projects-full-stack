import React from 'react'
import { get } from '../plugins/http';

const GetColor = () => {

  const getColor = async () => {
    const data = await get('getColor');
    console.log('data-get', data);
  }

  return (
    <div className='box'>
      <button onClick={getColor} type='button'>get color</button>
    </div>
  )
}

export default GetColor
