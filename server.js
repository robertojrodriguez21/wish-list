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

// Update and add link in one item --> PUT
app.put('/list/:listId/item/:itemId', async (req, res) => {
  let updatedItem = await Item.findByIdAndUpdate(req.params.itemId, {
    $push: { links: req.body }
  })

  res.json(updatedItem)
})

// Update one item --> PUT
app.put('/list/:listId/item/:itemId/updateItem', async (req, res) => {
  let updatedItem = await Item.findByIdAndUpdate(req.params.itemId, {
    $set: {
      name: req.body.name,
      description: req.body.description,
      image: req.body.image,
      budget: req.body.budget
    }
  })

  res.json(updatedItem)
})

// Delete one item --> DELETE
app.delete('/list/:listId/item/:itemId', async (req, res) => {
  let deletedItem = await Item.findByIdAndDelete(req.params.itemId)
  res.json(deletedItem)
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
  const itemForList = await Item.find({}).sort({ createdAt: -1 }).limit(1)
  let updatedList = await List.findByIdAndUpdate(req.params.listId, {
    $push: { items: itemForList }
  })

  console.log(updatedList)
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
