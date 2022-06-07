"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*-------------------------------------------
    라이브러리 & 미들웨어 import 
-------------------------------------------*/
// 익스프레스
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
// 메쏘드-오버라이드
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// 기타
const { ObjectId } = require("mongodb");
const path = require("path");
app.use(express.json());
var cors = require("cors");
app.use(cors());
require("dotenv").config();
/*-------------------------------------------
    몽고DB 로그인
-------------------------------------------*/
let db;
const MongoClient = require("mongodb").MongoClient;
MongoClient.connect(process.env.DB_URL, (error, client) => {
  db = client.db(process.env.DB_HOST);
  app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`);
  });
});

/*-------------------------------------------
   GET 요청
-------------------------------------------*/
app.get("/api/movieList", (req: Request, res: Response) => {
  db.collection("movieList")
    .findOne({ movieList: Array })
    .then(() => res.json());
});

// app.use(express.static(path.join(__dirname, "../frontend/dist")));
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// });

// app.get("/api/mypost", (req, res) => {
//   db.collection("post")
//     .find({ id: req.user.id })
//     .sort({ date: -1 })
//     .toArray()
//     .then((result) => {
//       res.send(result);
//     });
// });

// app.get("/api/otherspost", (req, res) => {
//   db.collection("post")
//     .find({ id: { $ne: req.user.id } })
//     .sort({ date: -1 })
//     .toArray()
//     .then((result) => {
//       res.send(result);
//     });
// });

// app.get("/api/img/:imgName", (req, res) => {
//   res.sendFile(__dirname + "/public/img/" + req.params.imgName);
// });

// app.get("/api/reply/:replyNumb", (req, res) => {
//   db.collection("reply")
//     .find({ parent: parseInt(req.params.replyNumb) })
//     .toArray()
//     .then((result) => {
//       res.send(result);
//     });
// });

/*-------------------------------------------
   SPA
-------------------------------------------*/
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html")),
// );
