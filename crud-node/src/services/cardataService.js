const Cardata = require("../models/cardata");

class CardataService {
  async createCardata(vehicleid, brand, model, note, others) {
    const newCardata = new Cardata({ vehicleid, brand, model, note, others });
    return await newCardata.save();
  }

  async getAllCardatas() {
    return await Cardata.find();
  }

  async getCardataById(cardataId) {
    return await Cardata.findById(cardataId);
  }

  async updateCardata(cardataId, updatedData) {
    return await Cardata.findByIdAndUpdate(cardataId, updatedData, {
      new: true,
    });
  }
}

module.exports = new CardataService();
