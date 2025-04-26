const express = require("express");

const cors = require("cors");
require("dotenv").config();
const config = require("./config/config");
const users = require("./routes/users");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/api/users", users);

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
