require("dotenv").config();
const express = require("express");
const sql = require("mssql");
const config = require("./config/config");

const cors = require("cors");
const users = require("./routes/users");

const app = express();
const appPool = new sql.ConnectionPool(config);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/api/users", users);

appPool
  .connect()
  .then((pool) => {
    app.locals.db = pool;
    const port = process.env.PORT || 3001;
    const server = app.listen(port, () => {
      const host = server.address().address;
      const port = server.address().port;
      console.log(`Server is listening at http://${host}:${port}`);
    });
  })
  .catch((err) => {
    console.error("Error creating connection pool", err);
  });
