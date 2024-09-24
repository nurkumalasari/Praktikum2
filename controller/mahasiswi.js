const { response } = require("express");

const Mahasiswa = require("../models/mahasiswi");

module.exports = {
    tampil: async (req, res) => {
        const mahasiswa = await Mahasiswa.find({});
        res.json(mahasiswa);
    },
    tambah: async (req, res) => {
        const mahasiswa = new Mahasiswa(req.body);
        await mahasiswa.save();
        res.json(mahasiswa);
    },
    muncul: async (req, res) => {
        const { nim } = req.params;
        const mahasiswa = await Mahasiswa.findOne(nim, req.body, { new: true });
        res.json(mahasiswa);
    },
    update: async (req, res) => {
        const { nim } = req.params;
        const mahasiswa = await Mahasiswa.findOneAndUpdate(nim, req.body, { new: true });
        res.json(mahasiswa);
    },
    delete: async (req, res) => {
        const { nim } = req.params;
        await Mahasiswa.findOneAndDelete(nim);
        res.json({ message: "Data berhasil dihapus" });
    },
};