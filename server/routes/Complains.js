const express = require("express");
const router = express.Router();
const { Complains } = require("../models");

router.post("/",  async (req, res) => {
    const info = req.body;
    await Complains.create(info);
    res.json(info);
});

module.exports = router;