const express = require('express');
const app = express();
require('dotenv').config()
const db = require("./src/config/db.js");
const consign = require("consign")

consign()
.include("./src/config/passport.js")
.then("./src/config/middlewares.js")
.then("./api")
.then("./src/config/routes.js")
.into(app)


app.db = db

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});