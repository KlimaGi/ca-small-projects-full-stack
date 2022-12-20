import React, { useContext } from 'react';
import MainContext from '../context/MainContext';
import { post } from '../plugins/http.js';

const FavoriteOrDelete = () => {
  const { selected, favorites, setFavorites, getAllNotes } = useContext(MainContext);

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

  const deleteNote = async () => {
    const ids = selected.map(item => item._id);
    if (ids.length > 0) {
      const res = await post('deleteNote', ids);
      getAllNotes();
    }

  }

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
        onClick={deleteNote}
      > Delete
      </button>
    </div>
  )
}

export default FavoriteOrDelete;
