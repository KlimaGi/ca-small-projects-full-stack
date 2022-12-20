import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

const FavoriteOrDelete = () => {
  const { selected, favorites, setFavorites } = useContext(MainContext);

  const addFavorites = () => {
    const itemsToAdd = [];

    selected.map(item => {
      if (!favorites.find(x => x._id === item._id)) {
        console.log('item', item);
        itemsToAdd.push(item)
      }
    })

    setFavorites([...favorites, ...itemsToAdd]);
  };

  return (
    <div className='main'>
      <button
        type='button'
        className='button'
        onClick={addFavorites}
      >
        Add to favorites
      </button>
      <button
        type='button'
        className='button'
      > delete
      </button>
    </div>
  )
}

export default FavoriteOrDelete;
