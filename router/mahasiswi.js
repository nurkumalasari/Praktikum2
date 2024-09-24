const express = require("express");
const router = express.Router();
const mahasiswaController = require("../controllers/mahasiswa");

router.route("/mahasiswa").get(mahasiswaController.tampil).post(mahasiswaController.tambah);
router.get("/mahasiswa/:nim", mahasiswaController.muncul);
router.put("/mahasiswa/:nim", mahasiswaController.update);
router.delete("/mahasiswa/:nim", mahasiswaController.delete);

module.exports = router;
// let mahasiswa = [
//     { id: 1, nama: "Nur Kumala Sari", nim: 112200542},
//     { id: 2, nama: "Sari", nim: 112200500},
//     { id: 3, nama: "Kumala", nim: 112201234},
// ];

// router
//     .route("/mahasiswa")
//     .get(function (req, res) {
//         res.json(mahasiswa);
//     })
//     .post(function (req,res){
//       mahasiswa.push(req.body);
//       res.send(mahasiswa);
//     });

//     router.get('/mahasiswa/:nim', function(req,res){
//         const nim = req.params.nim
//         mahasiswa.filter (mahasiswa => {
//             if(mahasiswa.nim ==nim){
//                 mahasiswa.id = req.body.id
//                 mahasiswa.nama = req.body.nama
//                 mahasiswa.nim = nim

//                 return mahasiswa
//             }
//         })
//         res.json(mahasiswa)
//     })

//     router.put('/mahasiswa/:nim', function(req,res){
//         const nim = req.params.nim
//         mahasiswa.filter (mahasiswa => {
//             if(mahasiswa.nim ==nim){
//                 mahasiswa.id = req.body.id
//                 mahasiswa.nama = req.body.nama
//                 mahasiswa.nim = nim

//                 return mahasiswa
//             }
//         })
//         res.json(mahasiswa)
//     });

//     router.delete('/mahasiswa/:nim', function(req,res){
//         const nim = req.params.nim
//         mahasiswa.filter (mahasiswa => {
//             if(mahasiswa.nim ==nim){
//                 mahasiswa.id = req.body.id
//                 mahasiswa.nama = req.body.nama
//                 mahasiswa.nim = nim

//                 return mahasiswa
//             }
//         })
//         res.json(mahasiswa)
//     })

// module.exports = router;