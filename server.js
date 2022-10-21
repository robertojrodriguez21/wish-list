const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

//Middleware
app.use(express.json())
app.use(cors())

//Routes
app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

app.get('/test', (req, res) => {
  res.send(req.body)
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
