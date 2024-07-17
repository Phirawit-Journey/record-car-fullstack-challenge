const cardataService = require("../services/cardataService");

class CardataController {
  async createCardata(req, res) {
    try {
      const { vehicleid, brand, model, note, others } = req.body;
      const saveCardata = await cardataService.createCardata(
        vehicleid,
        brand,
        model,
        note,
        others
      );
      res.json(saveCardata);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAllCardatas(req, res) {
    try {
      const cardatas = await cardataService.getAllCardatas();
      res.json(cardatas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCardataById(req, res) {
    const cardataId = req.params.id;
    try {
      const cardata = await cardataService.getCardataById(cardataId);
      if (!cardata) return res.status(404).json({ error: "Data not found" });
      res.json(cardata);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCardata(req, res) {
    const cardataId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedCar = await cardataService.updateCardata(
        cardataId,
        updatedData
      );
      if (!updatedCar) return res.status(404).json({ error: "Data not found" });
      res.json(updatedCar);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCardata(req, res) {
    const cardataId = req.params.id;
    try {
      const deletedCardata = await cardataService.deleteCardata(cardataId);
      if (!deletedCardata)
        return res.status(404).json({ error: "Data not found" });
      res.json({
        message: "Data deleted successfully",
        cardata: deletedCardata,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new CardataController();
