import React from 'react'
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import Card from './Card'
import AddCard from './API components/AddCard'

export const SetArraycardsContext = createContext()

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
            <SetArraycardsContext.Provider value={setCardsArray}>
                {cardsArray.map((card) => {
                    return <Card card={card} key={card.id}> </Card>
                })}
                <AddCard/>
            </SetArraycardsContext.Provider >
        </>
    )
}

export default CardArray