require('dotenv').config()

const mongoose = require('mongoose')
const connectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log(`MongoDB connected: ${con.connection.host}`)
  } catch (err) {
    console.log(`db connection err ${err.message}`)
    throw err
  }
}
module.exports = connectDB
