import React from 'react'
import { useContext } from 'react'
import axios from 'axios';
import { CardContext } from '../Card';
import { SetArraycardsContext } from '../CardArray'
import {ColorCircle} from '../customComponents/colorUpdateCustom'

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