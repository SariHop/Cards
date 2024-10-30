import React from 'react'
import { useContext } from 'react'
import axios from 'axios';
import { CardContext } from '../Card';

const DeleteCad = () => {

  const currentCard = useContext(CardContext);

  const fetchDelete = () => {
    try {
      axios.delete(`http://localhost:8080/cards/delete/${currentCard.id}`)
    } catch (error) {
      console.error(error.message)
    }

    //עדכון מערך הכרטיסים בריאקט
  }
  return (
    <div>
      <button onClick={fetchDelete}>delete</button>
    </div>
  )
}

export default DeleteCad