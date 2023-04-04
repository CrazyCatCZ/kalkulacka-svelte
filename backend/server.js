import express from "express";
import simpleDB from "simple-json-db";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const db = new simpleDB("./data/data.json");

app.use(cors());
app.use(bodyParser.json());

app.post("/clicks", (req, res) => {
  const { button } = req.body;
  const count = db.get(button) || 0;

  db.set(button, count + 1);

  const counts = db.JSON();
  res.json(counts);
});

app.listen(3000, () => {
  console.log("Server started on port 3000.");
});
