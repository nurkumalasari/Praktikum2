const connection = require("../database/db");
const Matakuliah = {};

Matakuliah.getAll = (callback) => {
    connection.query("SELECT * FROM matakuliah", callback);
};

Matakuliah.getBykdMK = (kdMK, callback) => {
    connection.query("SELECT * FROM matakuliah WHERE kdMK = ?", [kdMK], callback);
};

Matakuliah.create = (newMatakuliah, callback) => {
    connection.query("INSERT INTO matakuliah SET ?", newMatakuliah, callback);
};

Matakuliah.update = (kdMK, updateMatakuliah, callback) => {
    connection.query(
        "UPDATE matakuliah SET ? WHERE kdMK = ?",
        [updateMatakuliah, kdMK],
        callback
    );
};

Matakuliah.delete = (kdMK, callback) => {
    connection.query("DELETE FROM matakuliah WHERE kdMK = ?", [kdMK], callback);
};

module.exports = Matakuliah;