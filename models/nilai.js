const connection = require("../database/db");
const Nilai = {};

Nilai.getAll = (callback) => {
    connection.query("SELECT * FROM nilai", callback);
};

Nilai.getByNim = (nim, callback) => {
    connection.query("SELECT * FROM nilai WHERE nim = ?", [nim], callback);
};

Nilai.create = (newNilai, callback) => {
    connection.query("INSERT INTO nilai SET ?", newNilai, callback);
};

Nilai.update = (nim, updateNilai, callback) => {
    connection.query(
        "UPDATE nilai SET ? WHERE nim = ?",
        [updateNilai, nim],
        callback
    );
};

Nilai.delete = (nim, callback) => {
    connection.query("DELETE FROM nilai WHERE nim = ?", [nim], callback);
};

module.exports = Nilai;