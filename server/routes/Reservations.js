const express = require("express");
const router = express.Router();
const { Reservations } = require("../models");

router.post("/",  async (req, res) => {
    const info = req.body;
    console.log(info);
    await Reservations.create(info);
    res.json("ok");

});

module.exports = router;