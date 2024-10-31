import React from 'react'
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import Card from './Card'
import AddCard from './API components/AddCard'
import { useSensors, useSensor, closestCorners, DndContext, } from '@dnd-kit/core'
import { arrayMove, SortableContext, rectSortingStrategy, } from '@dnd-kit/sortable';
import { MyTouchSensor, MyPointerSensor } from './MyPointerSensor'

export const SetArraycardsContext = createContext()

const CardArray = () => {

    const [cardsArray, setCardsArray] = useState([])
    const sensors = useSensors(
        useSensor(MyTouchSensor),
        useSensor(MyPointerSensor),
    );

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

    const fetupdateCardsArray = async (cardsArray) => {
        try {
            await axios.put('http://localhost:8080/cards/updateCardArray',
                { "cardsArray": cardsArray }
            )
        } catch (error) {
            console.error(error.message)
        }
    }

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setCardsArray((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                const updatedArrayCards = arrayMove(items, oldIndex, newIndex);
                fetupdateCardsArray(updatedArrayCards)
                return updatedArrayCards
            });
        }
    }

    return (
        <>
            <SetArraycardsContext.Provider value={setCardsArray}>

                <DndContext
                    sensors={sensors}
                    onDragEnd={handleDragEnd}
                    collisionDetection={closestCorners} >
                    <SortableContext items={cardsArray} strategy={rectSortingStrategy}>

                        {cardsArray.map((card) => {
                            return <Card card={card} key={card.id}> </Card>
                        })}
                        <AddCard />

                    </SortableContext>
                </DndContext>

            </SetArraycardsContext.Provider >
        </>
    )
}

export default CardArray