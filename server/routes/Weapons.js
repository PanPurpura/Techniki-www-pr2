const express = require("express");
const router = express.Router();
const { Weapons } = require("../models");
const {Op} = require("sequelize");

router.get("/", async (req, res) => {
    const type = req.query.type;
    if(type === undefined)
    {
        const weapons = await Weapons.findAll();
        res.json(weapons);
    }
    else
    {
        const weapons = await Weapons.findAll({
            where: {
                type: type
            }
        })
        res.json(weapons);
    }

});


module.exports = router;