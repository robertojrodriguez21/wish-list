const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Item, List } = require('./models')

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Routes

// Test Routes
app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

app.get('/test', (req, res) => {
  res.send(req.body)
})

// Item Routes
// Read all items --> GET
app.get('/items', async (req, res) => {
  const allItems = await Item.find({})
  res.send(allItems)
})

// End
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
