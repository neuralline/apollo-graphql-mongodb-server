module.exports = async (_, { id, input }, { models }) => {
  const postToUpdate = await models.Post.findByIdAndUpdate({ _id: id }, input, {
    new: true,
    runValidator: true
  })

  return await postToUpdate.save()
}
