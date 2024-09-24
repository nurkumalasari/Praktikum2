const connection = require("../database/db");
const Nilai = {};

Nilai.getByNim = (nim, callback) => {
    connection.query(`SELECT nilai.nim,mahasiswa.nama,nilai.kdMk,matakuliah.matakuliah,nilai.dosen,nilai.semester,matakuliah.sks,nilai.nilai 
    FROM mahasiswa JOIN matakuliah JOIN nilai ON nilai.nim='1' AND nilai.nim=mahasiswa.nim AND nilai.kdMk=matakuliah.kdMk`, [nim], callback);
};

Nilai.getAll = (callback) => {
    connection.query(`SELECT nilai.nim,mahasiswa.nama,nilai.kdMk,matakuliah.matakuliah,nilai.dosen,nilai.semester,matakuliah.sks,nilai.nilai 
    FROM mahasiswa JOIN matakuliah JOIN nilai ON nilai.nim=mahasiswa.nim AND nilai.kdMk=matakuliah.kdMk`,callback);
};

Nilai.create = (newNilai, callback) => {
    connection.query(`INSERT INTO nilai SET ?`, newNilai, callback);
};

module.exports = Nilai;