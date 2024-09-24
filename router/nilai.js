const express = require("express");
const router = express.Router();
const nilaiController = require("../controller/nilai");

router.route("/api/nilai").get(nilaiController.getAllNilai);
router.get("/api/nilai/:nim", nilaiController.getNilaiByNim);
router.route("/api/nilai").post(nilaiController.createNilai);
router.put("/api/nilai/:nim", nilaiController.updateNilai);
router.delete("/api/nilai/:nim", nilaiController.deleteNilai);

module.exports = router;