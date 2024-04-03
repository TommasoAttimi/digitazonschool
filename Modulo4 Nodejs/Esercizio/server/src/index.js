import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get("/books", (req, res) => {
  res.status(200).json({ msg: "ok" });
});

app.post("/books", (req, res) => {
  res.status(200).json({ msg: "ok" });
});

app.put("/books", (req, res) => {
  res.status(200).json({ msg: "ok" });
});

app.delete("/books", (req, res) => {
  res.status(200).json({ msg: "ok" });
});

app.listen(port, () => {
  console.log("listening on: " + port);
});
