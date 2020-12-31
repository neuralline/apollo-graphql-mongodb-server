const { Schema, model } = require('mongoose')

const postSchema = new Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true,
    required: true
  },
  by: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
})

const Post = model('post', postSchema)

module.exports = { Post }
