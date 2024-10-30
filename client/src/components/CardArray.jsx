import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import AddCard from './API components/AddCard'

const CardArray = () => {

    const [cardsArray, setCardsArray] = useState([])

    useEffect(() => {

        const fetchcards = async () => {
            try {
                const response = await axios.get('http://localhost:8080/cards')
                setCardsArray(response.data)
            } catch (error) {
                console.error(error.message)
            }
        }
        fetchcards()
    }, [])

    return (
        <>
            {/* Grid cell */}
            {cardsArray.map((card) => {
                return <Card card={card} key={card.id}> </Card>
            })}
            <AddCard></AddCard>
        </>
    )
}

export default CardArray