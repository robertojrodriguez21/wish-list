const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Item, List } = require('./models')

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Item Routes
// Create item --> POST
app.post('/:listId', async (req, res) => {
  let createdItem = await Item.create(req.body)
  res.send(createdItem)
})

// Read all items --> GET
app.get('/items', async (req, res) => {
  const allItems = await Item.find({})
  res.send(allItems)
})

// Read one item --> GET
app.get('/:listId/:itemId', async (req, res) => {
  let foundItem = await Item.findById(req.params.itemId)
  res.json(foundItem)
})

//List Routes
// Read all lists --> GET
app.get('/lists', async (req, res) => {
  const allLists = await List.find({})
  res.send(allLists)
})

// Update one list --> PUT
app.put('/:listID/:itemId', async (req, res) => {
  let updatedList = await List.findByIdAndUpdate(req.params.listID, {
    $push: { items: req.params.itemId }
  })

  res.json(updatedList)
})

// End
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
