const express = require("express");
const app = express();
const cors = require("cors");
const mahasiswaMysqlRouter = require("./router/mahasiswa");
const matakuliahMysqlRouter = require("./router/matakuliah");
const nilaiMysqlRouter = require("./router/nilai");
// const nilaiJoinMysqlRouter = require("./router/nilaiJoin");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(mahasiswaMysqlRouter);
app.use(matakuliahMysqlRouter);
app.use(nilaiMysqlRouter);
// app.use(nilaiJoinMysqlRouter);

app.listen(5000, function () {
  console.log("Server Berjalan Lancar");
});
