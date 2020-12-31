const { Schema, model } = require('mongoose')

const likeSchema = new Schema({
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

const Like = model('like', likeSchema)

export default Like
