const express = require("express");
const router = express.Router();
const { Accounts } = require("../models");



router.get("/", async (req, res) => {
    const email = req.query.email
    const password = req.query.password
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
            email: account["email"],
            phone: account["phone"],
            name: account["name"],

        });
    }
    else{
        res.json("Wrong Password");
    }
});

router.post("/",  async (req, res) => {
    const body = req.body
    let login = body.login
    const password = body.password
    const email = body.email
    let phone = body.phone
    let name = body.name

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
        res.json({
            login: login,
            password: password,
            email: email
        });
    }
    else{
        res.json("User already exists!");
        const account = await Accounts.findOne(
            {
                where: {email : email}
            }
        )

        console.log(account);
        console.log(login,name,phone);
        if(login === "")
        {
            login = account.login;
        }
        if(phone === "")
        {
            phone = account.phone;
        }
        if(name === "") {
            name = account.name;
        }
        console.log(login, name, phone);
        await Accounts.update({
            login: login,
            phone: phone,
            name: name,
            },
            {where: {email: email}}
        )
    }
});

module.exports = router;