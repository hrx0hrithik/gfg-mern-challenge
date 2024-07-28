const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const mongoUrl = process.env.MONGO_URL

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoUrl);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.log(error);
    }
  };
  module.exports = connectToMongo;