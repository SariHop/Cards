import React from 'react';
import { useState, createContext } from "react";
import IconButton from '@mui/material/IconButton';
import { FaRegCircle } from "react-icons/fa";
import ColorPicker from './ColorPicker';
import UpdateText from './API components/UpdateText';
import DeleteCad from './API components/DeleteCad';
import {CardContainer, CardContent, CardFooter} from './customComponents/cardCustom'

export const CardContext = createContext();

const Card = ({ card }) => {
  const [toggleColorPicker, SetToggleColorPicker] = useState(false);

  return (
    <CardContext.Provider value={card}>

      <CardContainer  style={{ backgroundColor: card.color }}>

        <CardContent>
          <UpdateText />
        </CardContent>

        <CardFooter showColorPicker={toggleColorPicker}>
          {toggleColorPicker ? (
            <ColorPicker SetToggle={SetToggleColorPicker} />
          ) : (
            <>
              <IconButton
                onClick={() => { SetToggleColorPicker(true) }}
                sx={{ color: 'white' }}
              >
                <FaRegCircle />
              </IconButton>
              <DeleteCad />
            </>

          )}
        </CardFooter>
      </CardContainer>

    </CardContext.Provider>
  );
};

export default Card;