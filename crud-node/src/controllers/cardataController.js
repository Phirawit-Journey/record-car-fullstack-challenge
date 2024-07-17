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
}

module.exports = new CardataController();
