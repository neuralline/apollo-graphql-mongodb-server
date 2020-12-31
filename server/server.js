const {ApolloServer, gql} = require('apollo-server')
const connectDB = require('./config/db')
const models = require('./models')
const resolvers = require('./resolvers')
const typeDefs = require('./types/')
connectDB()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {models}
})

server
  .listen({
    port: process.env.PORT || 4000
  })
  .then(({url}) => {
    console.log(`server is running at ${url}`)
  })
  .catch(err => console.log('server is down: ', err))
