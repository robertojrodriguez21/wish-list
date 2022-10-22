const { Schema } = require('mongoose')

const listSchema = new Schema(
  {
    name: { type: String, required: true },
    items: {
      type: Array,
      itemId: { type: String, required: true }
    }
  },
  { timestamps: true }
)

module.exports = itemSchema
