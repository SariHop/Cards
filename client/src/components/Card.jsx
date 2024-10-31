import React from 'react';
import { useState, createContext } from "react";
import IconButton from '@mui/material/IconButton';
import { FaRegCircle } from "react-icons/fa";
import ColorPicker from './ColorPicker';
import UpdateText from './API components/UpdateText';
import DeleteCard from './API components/DeleteCrad';
import { CardContainer, CardContent, CardFooter } from './customComponents/cardCustom'
import { useSortable } from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


export const CardContext = createContext();

const Card = ({ card }) => {
  const [toggleColorPicker, SetToggleColorPicker] = useState(false);

  const sortable = useSortable({ id: card.id })
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = sortable;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <CardContext.Provider value={card}>
      <div ref={setNodeRef} {...listeners} {...attributes} style={style}>

        <CardContainer style={{ backgroundColor: card.color }}>

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
                <DeleteCard />
              </>

            )}
          </CardFooter>
        </CardContainer>

      </div>
    </CardContext.Provider>
  );
};

export default Card;