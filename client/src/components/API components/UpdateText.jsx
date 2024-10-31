import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios';
import { CardContext } from '../Card';
import {StyledInput} from '../customComponents/textUpdateCustom'
import { SetArraycardsContext } from '../CardArray'

const UpdateText = () => {

    const currentCard = useContext(CardContext);
    const setCardsArray = useContext(SetArraycardsContext);
    const [textValueInput, setTextValueinpt] = useState(currentCard.text)

    const fetchUpdateText = async () => {
        try {
            await axios.put(`http://localhost:8080/cards/updateText/${currentCard.id}`,
                { "text": textValueInput })
        } catch (error) {
            console.error(error.message)
        }
    }

    const handleClick = () => {
        fetchUpdateText()
        setCardsArray(prevArray => prevArray.map(card =>
            card === currentCard ? { ...card, text: textValueInput } : card
        ));
    }

    return (
        <div>
            <StyledInput
                value={textValueInput}
                onChange={(e) => { setTextValueinpt(e.target.value) }}
                onBlur={handleClick}>
            </StyledInput>
        </div>
    )
}

export default UpdateText