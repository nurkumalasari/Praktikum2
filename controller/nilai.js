const Nilai = require("../models/nilaiJoin");
exports.getAllNilai = (req, res) => {
    Nilai.getAll((err, nilai) => {
        if (err) {
            res.status(500).json({ error: "Gagal Mengambil Data Nilai" });
        } else {
            res.json(nilai);
        }
    });
};

//POST
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

//GET user by ID
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

//PUT
exports.updateNilai = (req, res) => {
    const nimsiswa = req.params.nim;
    const updatedNilai = req.body;
    
    Nilai.update(nimsiswa, updatedNilai, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Update Data Nilai" });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ error: "Nilai Tidak Ditemukan" });
        } else {
            res.json({ message: "Update Data Nilai Berhasil" });
        }
    });
};

//DELETE
exports.deleteNilai = (req, res) => {
    const nimsiswa = req.params.nim;
    Nilai.delete(nimsiswa, (err, result) => {
        if (err) {
            res.status(500).json({ error: "Gagal Delete Nilai" });
        } else if (result.affectedRows == 0) {
            res.status(404).json({ error: "Nilai Tidak Ditemukan" });
        } else {
            res.json({ message: "Delete Data Nilai Berhasil" })
        }
    });
}