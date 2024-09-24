const Mahasiswa = require("../models/mahasiswa");

exports.getAllMahasiswa = (req, res) => {
    Mahasiswa.getAll((err, mahasiswa) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mengambil Data Mahasiswa" });
        } else {
            res.json(mahasiswa);
        }
    });
};

exports.createMahasiswa = (req, res) => {
    const newMahasiswa = req.body;
    Mahasiswa.create(newMahasiswa, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Tambah Mahasiswa" });
        } else {
            res.json({ message: "Mahasiswa Baru Berhasil Ditambah" });
        }
    });
};

exports.getMahasiswaByNim = (req, res) => {
    const nim = req.params.nim;
    Mahasiswa.getByNim(nim, (err, mahasiswa) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mendapatkan Mahasiswa" });
        } else if (!mahasiswa) {
            res.status(400).json({ error: "Mahasiswa Tidak Ditemukan" });
        } else {
            res.json(mahasiswa);
        }
    });
};

exports.updateMahasiswa = (req, res) => {
    const nim = req.params.nim;
    const updateMahasiswa = req.body;
    Mahasiswa.update(nim, updateMahasiswa, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Update Mahasiswa" });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Mahasiswa Tidak Ditemukan" });
        } else {
            res.json({ message: "Update Mahasiswa Berhasil" });
        }
    });
};

exports.deleteMahasiswa = (req, res) => {
    const nim = req.params.nim;
    Mahasiswa.delete(nim, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Menghapus Mahasiswa" });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Mahasiswa Tidak Ditemukan" });
        } else {
            res.json({ message: "Mahasiswa berhasil dihapus" });
        }
    });
};
