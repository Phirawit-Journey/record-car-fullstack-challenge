const mongoose = require("../configuration/dbConfig");

const carSchema = new mongoose.Schema({
  vehicleid: String,
  brand: String,
  model: String,
  note: String,
  others: String,
});

const Cardata = mongoose.model("Cardata", carSchema);

module.exports = Cardata;
