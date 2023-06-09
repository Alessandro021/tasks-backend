const express = require('express');
const app = express();
require('dotenv').config()
const db = require("./config/db.js");
const consign = require("consign")

consign()
.include("./config/passport.js")
.then("./config/middlewares.js")
.then("./api")
.then("./config/routes.js")
.into(app)


app.db = db

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});