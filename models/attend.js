const mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost/clhs-camp`)

const Schema = mongoose.Schema

const attendSchema = new Schema({
  name: { type: String },
  school: { type: String },
  created_at: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('attend', attendSchema)
