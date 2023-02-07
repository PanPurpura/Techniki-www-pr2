const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routers
const AccountsRouter = require("./routes/Accounts");
const WeaponsRouter = require("./routes/Weapons");

app.use("/accounts", AccountsRouter);
app.use("/weapons", WeaponsRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running on port 3001");
    });
});