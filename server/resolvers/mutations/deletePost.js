const { ApolloError } = require('apollo-server')

module.exports = async (_, { id }, { models }) => {
  const deletePost = await models.Post.deleteOne({ _id: id })

  if (deletePost.deletedCount) return { id: id }
  else throw new ApolloError(`Failed to delete address.`)
}
