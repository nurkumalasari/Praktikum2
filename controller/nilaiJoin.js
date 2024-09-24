const Nilai = require("../models/nilaiJoin");

exports.createNilai = (req, res) => {
    const newNilai = req.body;
    Nilai.create(newNilai, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Menambah Mata Nilai" });
        } else {
            res.json({ message: "Nilai Baru Berhasil Ditambahkan"})
        }
    });
};

exports.getAllNilai = (req, res) => {
    Nilai.getAll((err, nilai) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mengambil Data Nilai" });
        } else {
            res.json(nilai);
        }
    });
};

exports.getNilaiByNim = (req, res) => {
    const nim = req.params.nim;
    Nilai.getByNim(nim, (err, nilai) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mendapatkan Nilai" });
        } else if (!nilai) {
            res.status(404).json({ error: "Nilai Tidak Ditemukan" });
        } else {
            res.json(nilai);
        }
    });
};