const express = require("express");
const app = express();
//const db = require("./databaseConfig.js")
const cors = require('cors');
const bodyParser = require("body-parser");
const cardRouter = require('./routes/route');

const HTTP_PORT = 12001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




//start server 
app.listen(HTTP_PORT, () => {
    console.log("Server is listening on port " + HTTP_PORT);
});

// Root path
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

app.use('/cards', cardRouter);

