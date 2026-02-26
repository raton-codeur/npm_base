import express from "express";
import fs from "node:fs";
import https from "node:https";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("test");
});

https.createServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
}, app).listen(3000, () =>
  console.log("server running on https://localhost:3000")
);
