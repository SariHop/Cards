const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors())

let cardsArray = [
    { id: 1, color: "#e000dc", text: "hello world " },
    { id: 2, color: "#00d6bd", text: "this is mt cards" },
]
let uniqueId = cardsArray.length

const port = 8080

// get
app.get('/cards', (req, res) => {
    try {
        res.status(200).send(cardsArray)
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// get by id
app.get('/cards/:id', (req, res) => {
    try {
        const id = req.params.id
        const cardById = cardsArray.find((card) => card.id == id)
        cardById ?
            res.status(200).json(cardById) :
            res.status(404).json({ message: 'Card not found' })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// delete
app.delete('/cards/delete/:id', (req, res) => {
    try {
        const id = req.params.id;
        const initialLength = cardsArray.length;
        cardsArray = cardsArray.filter((card) => card.id != id);
        
        if (cardsArray.length === initialLength) {
            return res.status(404).json({ message: 'Card not found' });
        }
        
        res.status(200).json({ message: 'Delete successful' })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// create
app.post('/cards/create', (req, res) => {
    try {
        let newCard = { ...req.body, id: ++uniqueId }
        cardsArray.push(newCard)
        res.status(201).json(newCard)  // סטטוס 201 כי זו יצירה
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// update color by id
app.put('/cards/updateColor/:id', (req, res) => {
    try {
        const id = req.params.id
        const index = cardsArray.findIndex((card) => card.id == id);
        if (index === -1) {
            return res.status(404).json({ message: 'Card not found' });
        }

        const color = req.body.color
        cardsArray[index].color = color
        res.status(200).json(cardsArray[index]);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// update text by id
app.put('/cards/updateText/:id', (req, res) => {
    try {
        const id = req.params.id
        const index = cardsArray.findIndex((card) => card.id == id);
        if (index === -1) {
            return res.status(404).json({ message: 'Card not found' });
        }

        const text = req.body.text
        cardsArray[index].text = text
        res.status(200).json(cardsArray[index]);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

app.put('/cards/updateCardArray', (req, res) => {
    try {
        cardsArray = req.body.cardsArray
        res.status(200).json({ message: 'sucsses' });
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
