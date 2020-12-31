const { Schema, model } = require('mongoose')

const voteSchema = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'post',
    required: true
  },
  by: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
})

const Like = model('like', voteSchema)

export default Like
