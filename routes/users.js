const express = require("express");
const { createUser, getUsers, deleteUser, editUser } = require("../controllers/users");
const router = express.Router();

router.post("/create-user", createUser);

router.get("/", getUsers);

router.delete("/:id", deleteUser);

router.put("/edit-user/:id", editUser);

module.exports = router;
