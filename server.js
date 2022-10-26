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
// Read all items --> GET
app.get('/items', async (req, res) => {
  const allItems = await Item.find({})
  res.send(allItems)
})

// List Routes
// Create list --> POST
app.post('/createList', async (req, res) => {
  console.log(req.body)
  let createdList = await List.create(req.body)
  res.send(createdList)
})

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
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
