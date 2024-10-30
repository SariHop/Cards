import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CardArray = () => {

    const [cardsArray, setCardsArray] = useState([{},{}])

    useEffect(() => {

        const fetchcards = async () => {
            const response = await axios.get('http://localhost:8080/cards')
            console.log(response.data)
            setCardsArray(response.data)
        }

        fetchcards()
    }, [])

    return (
        <>
       
        <ul>
            { cardsArray.map((card)=>{
                return <li key={card.id}>
                    
                    {card.text}
                    {card.color}
                </li>
            })}
        </ul>
        </>
    )
}

export default CardArray