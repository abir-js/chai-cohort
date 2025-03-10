import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Cohort");
});

app.get("/abir", (req, res) => {
  res.send("Hello Abir!");
});

app.get("/hitesh", (req, res) => {
  res.send("Hello Hitesh");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
