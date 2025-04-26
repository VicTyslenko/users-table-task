const express = require("express");
const { createUser, getUsers } = require("../controllers/users");
const router = express.Router();

router.post("/create-user", createUser);

router.get("/", getUsers);
module.exports = router;
