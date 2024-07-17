const Cardata = require("../models/cardata");

class CardataService {
  async createCardata(vehicleid, brand, model, note, others) {
    const newCardata = new Cardata({ vehicleid, brand, model, note, others });
    return await newCardata.save();
  }
}

module.exports = new CardataService();
