const { ApolloError } = require('apollo-server')

module.exports = async (_, { id, input }, { models }) => {
  try {
    // const { id, username, userId } = isAuth(context)
    //TODO: username and created by miss match
    const newPost = new models.Post({
      id: input.id,
      name: input.name,
      url: input.url,
      description: input.description,
      by: '5f9c60dbbe3f8e1fbc51c86b'
    })

    const post = await newPost.save()
    return post
  } catch (err) {
    console.log('error @createPost: ', err)
    throw new ApolloError(err)
  }
}
