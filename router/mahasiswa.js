const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controller/mahasiswa");

router.route("/api/mahasiswa").get(mahasiswaController.getAllMahasiswa);
router.get("/api/mahasiswa/:nim", mahasiswaController.getMahasiswaByNim);
router.route("/api/mahasiswa").post(mahasiswaController.createMahasiswa);
router.put("/api/mahasiswa/:nim", mahasiswaController.updateMahasiswa);
router.delete("/api/mahasiswa/:nim", mahasiswaController.deleteMahasiswa);

module.exports = router;