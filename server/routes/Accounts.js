const express = require("express");
const router = express.Router();
const { Accounts } = require("../models");



router.get("/", async (req, res) => {
    const listOfPosts = await Accounts.findAll();
    res.json(listOfPosts);
    /*const body = req.body
    const email = body.email
    const password = body.password
    const account = await Accounts.findOne(
        {
            where: {email : email}
        }
    )
    if (account === null) {
        res.json("Account doesn't find");
    }
    else if (account["password"] === password){
        res.json({
            login: account["login"],
            password: account["password"],
            email: account["email"]
        });
    }
    else{
        res.json("Wrong Password");
    }*/
});

router.post("/",  async (req, res) => {
    const body = req.body
    const login = body.login
    const password = body.password
    const email = body.email

    const [u, created] = await Accounts.findOrCreate(
        {
            where: {email : email},
            defaults: {
                login: login,
                password: password,
                email: email,
            }
        }
    );
    if (created){
        res.json("Account created");
    }
    else{
        res.json("User already exists!");
    }
});

module.exports = router;