import React from 'react'
import { useContext } from 'react'
import {SetArraycardsContext} from '../CardArray'
import axios from 'axios'
import { arrayColors } from '../ColorPicker'

const AddCard = () => {

  const setColorArray = useContext(SetArraycardsContext);

  const newCard = () => {
    const randomIndex = Math.floor(Math.random() * arrayColors.length);
    return {
      "text": "New Card",
      "color": arrayColors[randomIndex]
    }
  }

  const fetchCreate = async (card) => {
    try {
      const res = await axios.post('http://localhost:8080/cards/create', card)
      return res.data
    } catch (error) {
      console.error(error.message)
    }
  }

  const handleClick = async () => {
    const card = newCard()
    const resNewcard = await fetchCreate(card)
    debugger
    setColorArray((prevArray) => [...prevArray, resNewcard]);
    console.log("response")
  }

  return (
    <div style={{ height: '200px', width: '350px' }}>
      <button onClick={handleClick}>+</button>
    </div>
  )
}

export default AddCard