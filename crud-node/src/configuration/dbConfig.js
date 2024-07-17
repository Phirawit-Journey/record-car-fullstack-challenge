const mongoose = require("mongoose");

const connectedToMongoDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:25392539@cluster0.mja4jfz.mongodb.net/crud_db"
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
};

module.exports = { mongoose, connectedToMongoDB };
