import React, { useState } from 'react'

const ColorPicker = () => {

    const [toggleColrScheme, SetToggleColrScheme] = useState(false)
  return (
    <div>
    <button onClick={()=>{SetToggleColrScheme(s=>!s)}}>circlr icon</button>    
    {
        toggleColrScheme && <h1>color scheme</h1>
    }
    </div>
  )
}

export default ColorPicker