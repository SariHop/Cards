import React from 'react'
import { useState, createContext } from "react";
import ColorPicker from './ColorPicker'
import UpdateText from './API components/UpdateText'
import DeleteCad from './API components/DeleteCad'

export const CardContext = createContext()

const Card = ({ card }) => {

  const [toggleColorPicker, SetToggleColorPicker] = useState(false)

  return (
    <CardContext.Provider value={card}>

      <div style={{ height: '200px', width: '350px', backgroundColor: `${card.color}`, margin: 0 }}>
        <UpdateText></UpdateText>

        {toggleColorPicker ?
          <ColorPicker SetToggle={SetToggleColorPicker}></ColorPicker>
          :
          <>
            <DeleteCad></DeleteCad>
            <button onClick={() => { SetToggleColorPicker(true) }}>circler icon</button>
          </>
        }
      </div>

    </CardContext.Provider>
  )
}

export default Card