import React from 'react'
import axios from 'axios'

const AddCard = () => {

  const newCard = {
    "text": "New Card",
    "color": "green"
  }
  // צבע רנדומלי מרשימת הצבעים

  const fetchCreate = async () => {
    try {
      await axios.post('http://localhost:8080/cards/create', newCard)
    } catch (error) {
      console.error(error.message)
    }
    //עדכון מערך הכרטיסים בריאקט
  }
  return (
    <div style={{ height: '200px', width: '350px' }}>
      <button onClick={fetchCreate}>+</button>
    </div>
  )
}

export default AddCard