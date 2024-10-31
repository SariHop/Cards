import React from 'react'
import { useEffect, useState, createContext } from 'react'
import axios from 'axios'
import Card from './Card'
import AddCard from './API components/AddCard'
import {
    useSensors,
    useSensor,
    closestCorners,
    DndContext,
    PointerSensor,
    TouchSensor
} from '@dnd-kit/core'
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
} from '@dnd-kit/sortable';
export const SetArraycardsContext = createContext()

const CardArray = () => {

    const [cardsArray, setCardsArray] = useState([])
    const sensors = useSensors(
        useSensor(PointerSensor),
         useSensor(TouchSensor)
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

    function handleDragEnd(event) {
        const { active, over } = event;

        if (active.id !== over.id) {
            setCardsArray((items) => {
                // מוצאים את האינדקסים הישנים והחדשים בהתבסס על מזהים ייחודיים
                const oldIndex = items.findIndex(item => item.id === active.id);
                const newIndex = items.findIndex(item => item.id === over.id);

                // מחזירים את המערך המעודכן לפי המיקום החדש
                return arrayMove(items, oldIndex, newIndex);
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