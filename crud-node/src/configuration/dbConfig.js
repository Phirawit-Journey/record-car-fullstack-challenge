// dbConfig.js

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:25392539@cluster0.mja4jfz.mongodb.net/crud_db",
  {}
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;
