const mongoose = require("mongoose");

const mahasiswaSchema = new mongoose.Schema({
    nama: String,
    nim: Object,
});

const mahasiswa = mongoose.model("mahasiswa", mahasiswaSchema);
module.exports = mahasiswa;