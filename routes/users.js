const express = require("express");
const { createUser, getUsers, deleteUser } = require("../controllers/users");
const router = express.Router();

router.post("/create-user", createUser);

router.get("/", getUsers);

router.delete("/:id", deleteUser);

module.exports = router;
