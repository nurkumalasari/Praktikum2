const connection = require("../database/db");
const Mahasiswa = {};

Mahasiswa.getAll = (callback) => {
    connection.query("SELECT * FROM mahasiswa", callback);
};

Mahasiswa.getByNim = (nim, callback) => {
    connection.query("SELECT * FROM mahasiswa WHERE nim = ?", [nim], callback);
};

Mahasiswa.create = (newMahasiswa, callback) => {
    connection.query("INSERT INTO mahasiswa SET ?", newMahasiswa, callback);
};

Mahasiswa.update = (nim, updateMahasiswa, callback) => {
    connection.query(
        "UPDATE mahasiswa SET ? WHERE nim = ?",
        [updateMahasiswa, nim],
        callback
    );
};

Mahasiswa.delete = (nim, callback) => {
    connection.query("DELETE FROM mahasiswa WHERE nim = ?", [nim], callback);
};

module.exports = Mahasiswa;