const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
        console.error("Erro opening database " + err.message);
    } else {

        db.run('CREATE TABLE cardDetails( \
            card_id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            name NVARCHAR(50)  NOT NULL,\
            card_number INTEGER(16),\
            balance INTEGER,\
            card_limit INTEGER\
        )', (err) => {
            if (err) {
                console.log("Table already exists.");
            }
            let insert = 'INSERT INTO cardDetails (name, card_number, balance, card_limit) VALUES (?,?,?,?)';
            db.run(insert, ["Alice", "1111 2222 3333 4444", -1000, 2000 ]);
            db.run(insert, ["Bob", "4444 3333 2222 1111", -10.24, 5000 ]);

        });
    }
});


module.exports = db