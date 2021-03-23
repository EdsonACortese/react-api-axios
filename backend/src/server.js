const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://huriellopes:nFWeTozCwrwgWMQm@cluster0.msgtn.mongodb.net/videoteca?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`⚡ Backend started at http://localhost:${port}`);
});
