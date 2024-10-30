import React from 'react'
import { useState, createContext } from "react";
import ColorPicker from './ColorPicker'
import UpdateText from './API components/UpdateText'
import DeleteCad from './API components/DeleteCad'

export const CardContext = createContext()

const Card = ({ card }) => {

  return (
    <CardContext.Provider value={card}>

      <div style={{ height: '200px', width: '350px', backgroundColor: `${card.color}`, margin: 0 }}>
        <UpdateText></UpdateText>
        <DeleteCad></DeleteCad>
        {/* אפשר פשוט לטגרר בין שניהם! */}
        {/* בכל מקרה יה ה צורך בלטגרר, אלא אם כן יש דרך "לכסות" אבל לטגרר אני מאמינה יהיה יותר קל */}
        <ColorPicker></ColorPicker>
      </div>

    </CardContext.Provider>
  )
}

export default Card