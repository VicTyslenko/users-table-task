const sql = require("mssql");

const config = require("../config/config");

// Controller for adding a new user to data base
exports.createUser = async (req, res) => {
  const { DisplayName, Email, MFA_Mobile } = req.body;

  try {
    await sql.connect(config);
    await sql.query`
      INSERT INTO Users (DisplayName, Email, MFA_Mobile)
      VALUES (${DisplayName}, ${MFA_Mobile}, ${Email})
    `;

    res.status(201).send("User created successfully!");
  } catch (err) {
    console.error("Create user error:", err);
    res.status(500).send("Failed to create user.");
  }
};

// Controller for getting all users
exports.getUsers = async (_, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query("SELECT * FROM Users");
    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).send("Database query failed");
  }
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await sql.connect(config);

    await sql.query`
      DELETE FROM Users
      WHERE UserID = ${id}
    `;

    res.status(200).send(`User with ID ${id} deleted successfully.`);
  } catch (err) {
    console.error(" Delete user error:", err);
    res.status(500).send("Failed to delete user.");
  }
};
