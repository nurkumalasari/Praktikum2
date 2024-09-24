const Matakuliah = require("../models/matakuliah");
exports.getAllMatakuliah = (req, res) => {
    Matakuliah.getAll((err, matakuliah) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mengambil Data Mata Kuliah" });
        } else {
            res.json(matakuliah);
        }
    });
};

exports.createMatakuliah = (req, res) => {
    const newMatakuliah = req.body;
    Matakuliah.create(newMatakuliah, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Menambah Mata Kuliah" });
        } else {
            res.json({ message: "Mata Kuliah Baru Berhasil Ditambahkan"})
        }
    });
};

exports.getMatakuliahBykdMK = (req, res) => {
    const kdMK = req.params.kdMK;
    Matakuliah.getBykdMK(kdMK, (err, matakuliah) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mendapatkan Mata Kuliah" });
        } else if (!matakuliah) {
            res.status(404).json({ error: "Mata Kuliah Tidak Ditemukan" });
        } else {
            res.json(matakuliah);
        }
    });
};

exports.updateMatakuliah = (req, res) => {
    const kdMK = req.params.kdMK;
    const updatedMatakuliah = req.body;
    
    Matakuliah.update(kdMK, updatedMatakuliah, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Update Mata Kuliah" });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Mata Kuliah Tidak Ditemukan" });
        } else {
            res.json({ message: "Update Mata Kuliah Berhasil" });
        }
    });
};

//DELETE
exports.deleteMatakuliah = (req, res) => {
    const kdMK = req.params.kdMK;
    Matakuliah.delete(kdMK, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Delete Mata Kuliah" });
        } else if (result.affectedRows == 0) {
            res.status(404).json({ error: "Mata Kuliah Tidak Ditemukan" });
        } else {
            res.json({ message: "Delete Data Mata Kuliah Berhasil" })
        }
    });
}