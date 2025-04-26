const sql = require("mssql");

const config = require("../config/config");

exports.createUser = async (req, res) => {
  const { DisplayName, Email, Status, MFA_Mobile, O365Email } = req.body;

  try {
    await sql.connect(config);
    await sql.query`
      INSERT INTO Users (DisplayName, Email, Status, MFA_Mobile, O365Email)
      VALUES (${DisplayName}, ${Email}, ${Status}, ${MFA_Mobile}, ${O365Email})
    `;

    res.status(201).send("User created successfully!");
  } catch (err) {
    console.error("Create user error:", err);
    res.status(500).send("Failed to create user.");
  }
};

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
