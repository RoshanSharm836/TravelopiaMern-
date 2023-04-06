const mongoose = require("mongoose");

const dataschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    place: { type: String, required: true },
    NumofTraveller: { type: String, required: true },
    PerPersonBudget: { type: String, required: true },
    total: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Travelopia = mongoose.model("data", dataschema);
module.exports = Travelopia;
