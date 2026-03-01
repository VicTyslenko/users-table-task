require("dotenv").config();
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const config = require("./config/config");

const cors = require("cors");
const users = require("./routes/users");

const app = express();

const supabase = createClient(config.supabaseUrl, config.supabaseKey);

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  })
);

app.use(express.json());

app.locals.db = supabase;

app.use("/api/users", users);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
