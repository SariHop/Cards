import React from 'react';
import { useState, createContext } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import { FaRegCircle } from "react-icons/fa";
import ColorPicker from './ColorPicker';
import UpdateText from './API components/UpdateText';
import DeleteCad from './API components/DeleteCad';

export const CardContext = createContext();

export const CardContainer = styled(Grid)({
  height: '200px',
  width: '350px',
  position: 'relative',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
});

const CardContent = styled('div')({
  flex: 1,
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const CardFooter = styled('div')(({ showColorPicker }) => ({
  padding: '8px',
  display: 'flex',
  justifyContent: showColorPicker ? 'space-evenly':'space-between',
  alignItems: 'center',
  backgroundColor: showColorPicker ? 'white' : 'transparent',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}));

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
                sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
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