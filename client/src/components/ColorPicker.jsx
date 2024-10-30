import React from 'react'
import UpdateColor from './API components/UpdateColor'

export const arrayColors = ["#00d6bd", "#e000dc", "#00d4e8", "#9000d8"]

const ColorPicker = ({ SetToggle }) => {

  return (
    <>
      {arrayColors.map((color, i) => {
        return <UpdateColor color={color} SetToggle={SetToggle} key={i}> </UpdateColor>
      })
      }
    </>
  )
}

export default ColorPicker