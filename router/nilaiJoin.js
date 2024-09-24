const express = require("express");
const router = express.Router();
const nilaiJoinController = require("../controller/nilaiJoin");

router.route("/api/nilai").post(nilaiJoinController.createNilai);
router.get("/api/nilai/:nim", nilaiJoinController.getNilaiByNim);

module.exports = router;