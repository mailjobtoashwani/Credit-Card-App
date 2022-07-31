const express = require('express');
const db = require("../databaseConfig.js")
//const validateCardNumber = require("../cardValidation.js")

const router = express.Router();



//get All cards
router.get("/getAll", (req, res, next) => {
    db.all("SELECT * FROM cardDetails", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
    });
});


//Post card info
router.post("/add", (req, res, next) => {
    const reqBody = req.body;
    //?Luhn validation


    //db POST call
    db.run("INSERT INTO cardDetails (name, card_number, balance, card_limit) VALUES (?,?,?,?)",
        [reqBody.name, reqBody.card_number, reqBody.balance, reqBody.card_limit],
        function (err, result) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "card_id": this.lastID
            })
        });
});

module.exports = router;