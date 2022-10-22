const { Schema } = require('mongoose')

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    budget: { type: Number, required: true },
    links: {
      type: Array,
      websiteName: { type: String, required: true },
      websiteLink: { type: String, required: true }
    }
  },
  { timestamps: true }
)

module.exports = itemSchema
