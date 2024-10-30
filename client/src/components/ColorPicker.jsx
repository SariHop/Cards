import React, { useState } from 'react'
import UpdateColor from './API components/UpdateColor'

export const arrayColors = ["#00d6bd","#e000dc","#00d4e8","#9000d8"]
// לבדוק אחר כך איפה כדאי לשמור את המערך

const ColorPicker = ({SetToggle}) => {

  return (
    <div>
   {
    arrayColors.map((color,i)=>{
      return <UpdateColor color={color} SetToggle={SetToggle} key={i}> </UpdateColor>
    })
   }
    </div>
  )
}

export default ColorPicker