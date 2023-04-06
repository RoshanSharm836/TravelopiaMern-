const express = require("express");
const Travelopia = require("../model/data.schema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Travelopia.find();
    console.log("data", data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const data = await Travelopia.create(req.body);
    return res.status(200).send({ data: "posted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
