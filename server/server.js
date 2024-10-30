const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json());
app.use(cors())

let cardsArray = [
    { id: 1, color: "#FF0000", text: "hello world text RED" },
    { id: 2, color: "#0000FF", text: "hello world text BLUE" },
]
let uniqueId = cardsArray.length

const port = 8080

// get
app.get('/cards', (req, res) => {
    // console.log("get")

    res.status(200).send(cardsArray)
})

// get by id
app.get('/cards/:id', (req, res) => {
    // console.log("get by id")

    const id = req.params.id
    const cardById = cardsArray.find((card) => card.id == id)
    cardById ?
        res.status(200).json(cardById) :
        res.status(404).json({ 'messege': 'card not found' })
})

// delete
app.delete('/cards/delete/:id', (req, res) => {
    // console.log("delete")

    const id = req.params.id;
    cardsArray = cardsArray.filter((card) => card.id != id);
    res.status(200).json({ 'messege': 'delete sucsses' })
})

// create
app.post('/cards/create', (req, res) => {
    // console.log("create")
    // בדיקה שהערכים תקינים
    
    let newCard = { ...req.body, "id": ++uniqueId }
    cardsArray.push(newCard)
    res.status(200).json(newCard)
})

// update color by id
app.put('/cards/updateColor/:id', (req, res) => {
    // console.log("update color")

    const id = req.params.id
    const index = cardsArray.findIndex((card) => card.id == id);
    if (index == -1) { return res.status(404).json({ 'message': 'card not found' });}

    const color = req.body.color
    if(!color) { return res.status(404).json({ 'message': 'no color provide' });}
    cardsArray[index].color = color
    res.status(200).json(cardsArray[index]);

})

// update text by id
app.put('/cards/updateText/:id', (req, res) => {
    // console.log("update text")

    const id = req.params.id
    const index = cardsArray.findIndex((card) => card.id == id);
    if (index == -1) { return res.status(404).json({ 'message': 'card not found' });}

    const text = req.body.text
    if(!text) { return res.status(404).json({ 'message': 'no text provide' });}
    cardsArray[index].text = text
    res.status(200).json(cardsArray[index]);

})

app.listen(port, () => {
    console.log(`server run on port ${port}`)
})