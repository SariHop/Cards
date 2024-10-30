import React from 'react'
import { useContext } from 'react'
import { SetArraycardsContext } from '../CardArray'
import axios from 'axios';
import { CardContext } from '../Card';
import { IconButton } from '@mui/material';
import { IoTrash } from "react-icons/io5";


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
      <IconButton onClick={handleClick}
      color='white'>
        <IoTrash style={{ color: 'white' }}/>
      </IconButton>
    </div>
  )
}

export default DeleteCad