import React from 'react'
import { useState, useContext } from 'react'
import axios from 'axios';
import { CardContext } from '../Card';

const UpdateText = () => {

    const currentCard = useContext(CardContext);
    const [textValueInput, setTextValueinpt] = useState(currentCard.text)

    const fetchUpdateText = async () => {
        try {
            await axios.put(`http://localhost:8080/cards/updateText/${currentCard.id}`,
                { "text": textValueInput })
        } catch (error) {
            console.error(error.message)
        }
    }

    // בדיקה כשהקומפוננטה נופלת האם צריך לבצע קריאת שרת

    return (
        <div>
            <input
                value={textValueInput}
                onChange={(e) => { setTextValueinpt(e.target.value) }}
                onBlur={fetchUpdateText}>
            </input>
        </div>
    )
}

export default UpdateText