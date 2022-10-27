const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Item, List } = require('./models')

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(express.static(`${__dirname}/client/build`))

// Item Routes
// Create one item --> POST
app.post('/list/:listId/createItem', async (req, res) => {
  let createdItem = await Item.create(req.body)
  res.send(createdItem)
})

// Read all items --> GET
app.get('/items', async (req, res) => {
  const allItems = await Item.find({})
  res.send(allItems)
})

// List Routes
// Create one list --> POST
app.post('/createList', async (req, res) => {
  let createdList = await List.create(req.body)
  res.send(createdList)
})

// Read all lists --> GET
app.get('/lists', async (req, res) => {
  const allLists = await List.find({})
  res.send(allLists)
})

// Update one list --> PUT
app.put('/list/:listId/createItem', async (req, res) => {
  let updatedList = await List.findByIdAndUpdate(req.params.listId, {
    $push: { items: req.body._id }
  })

  res.json(updatedList)
})

// Delete one list --> DELETE
app.delete('/list/:listId', async (req, res) => {
  let deletedList = await List.findByIdAndDelete(req.params.listId)
  res.json(deletedList)
})

// End
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
