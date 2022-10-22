const mongoose = require('mongoose')
const itemSchema = require('./item')
const listSchema = require('./list')

const Item = mongoose.model('Item', itemSchema)
const List = mongoose.model('List', listSchema)

module.exports = {
  Item,
  List
}
