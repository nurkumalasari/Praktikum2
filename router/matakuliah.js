const express = require("express");
const router = express.Router();
const matakuliahController = require("../controller/matakuliah");

router.route("/api/matakuliah").get(matakuliahController.getAllMatakuliah);
router.get("/api/matakuliah/:kdMK", matakuliahController.getMatakuliahBykdMK);
router.route("/api/matakuliah").post(matakuliahController.createMatakuliah);
router.put("/api/matakuliah/:kdMK", matakuliahController.updateMatakuliah);
router.delete("/api/matakuliah/:kdMK", matakuliahController.deleteMatakuliah);

module.exports = router;