import React from 'react'
import { useContext } from 'react'
import axios from 'axios';
import { CardContext } from '../Card';
import { SetArraycardsContext } from '../CardArray'
import { styled } from '@mui/material/styles';

const ColorCircle = styled('button')(({ bgColor }) => ({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: bgColor,
    border: 'none',
    margin: '5px',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.1)',
    },
    '&:active': {
    transform: 'scale(0.95)',
  },
}));

const UpdateColor = ({ color, SetToggle }) => {
    const setColorArray = useContext(SetArraycardsContext);
    const currentCard = useContext(CardContext);

    const fetchUpdateColor = async () => {
        try {
            await axios.put(`http://localhost:8080/cards/updateColor/${currentCard.id}`,
                { "color": color })
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleClick = () => {
        fetchUpdateColor()
        setColorArray(prevArray => prevArray.map(card =>
            card === currentCard ? { ...card, color: color } : card
        ));
        SetToggle(false)
    }

    return (
        <ColorCircle
            onClick={handleClick}
            bgColor={color}
            aria-label={`Select color ${color}`}>
        </ColorCircle >
    )
}

export default UpdateColor