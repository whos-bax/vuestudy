const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("bodyParser");

const memos = ["메모 1 내용", "메모 2 내용", "메모 3 내용"];

app.use(bodyParser.json());

app.get("/api/memos", (req, res) => {
  res.send(memos);
});

app.post("/api/memos", (req, res) => {
  console.log(req);
  //   memos.push(req.body.content);
  res.send(memos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
