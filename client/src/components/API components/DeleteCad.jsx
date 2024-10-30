import React from 'react'
import { useContext } from 'react'
import { SetArraycardsContext } from '../CardArray'
import axios from 'axios';
import { CardContext } from '../Card';

const DeleteCad = () => {

  const currentCard = useContext(CardContext);
  const setColorArray = useContext(SetArraycardsContext);

  const fetchDelete = () => {
    try {
      axios.delete(`http://localhost:8080/cards/delete/${currentCard.id}`)
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleClick = () => {
    fetchDelete()
    setColorArray((prevArray) => prevArray.filter(card => card !== currentCard));
  }

  return (
    <div>
      <button onClick={handleClick}>delete</button>
    </div>
  )
}

export default DeleteCad