const { Schema, SchemaType } = require('mongoose')

const listSchema = new Schema(
  {
    name: { type: String, required: true },
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ]
  },
  { timestamps: true }
)

module.exports = listSchema
