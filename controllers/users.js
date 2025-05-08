const sql = require("mssql");

const config = require("../config/config");

// Controller to create a new user
exports.createUser = async (req, res) => {
  const { DisplayName, Email, MFA_Mobile, AdminUser, O365Email, BlockAccess } = req.body;

  const isAdmin = AdminUser ? 1 : 0;
  const isBlocked = BlockAccess ? 1 : 0;

  // Default values
  const isOSPAdmin = 0;
  const functionalUser = 0;
  const status = "Testing";
  const colourMode = "L";
  const hierarchyMaintenance = 0;

  try {
    const pool = req.app.locals.db;

    // Check if email already exists
    const emailCheck = await pool.request().input("Email", Email).query("SELECT * FROM Users WHERE Email = @Email");

    if (emailCheck.recordset.length > 0) {
      return res.status(409).json({ error: "Email already exists." });
    }

    // Check if username already exists
    const usernameCheck = await pool.request().input("DisplayName", DisplayName).query("SELECT * FROM Users WHERE DisplayName = @DisplayName");

    if (usernameCheck.recordset.length > 0) {
      return res.status(409).json({ error: "Username already exists." });
    }

    // Insert new user
    await pool
      .request()
      .input("DisplayName", DisplayName)
      .input("Email", Email)
      .input("MFA_Mobile", MFA_Mobile)
      .input("AdminUser", isAdmin)
      .input("O365Email", O365Email)
      .input("BlockAccess", isBlocked)
      .input("IsOSPAdmin", isOSPAdmin)
      .input("Status", status)
      .input("FunctionalUser", functionalUser)
      .input("ColourMode", colourMode)
      .input("HierarchyMaintenance", hierarchyMaintenance).query(`
        INSERT INTO Users (
          DisplayName,
          Email,
          MFA_Mobile,
          AdminUser,
          O365Email,
          BlockAccess,
          IsOSPAdmin,
          Status,
          FunctionalUser,
          ColourMode,
          HierarchyMaintenance
        )
        VALUES (
          @DisplayName,
          @Email,
          @MFA_Mobile,
          @AdminUser,
          @O365Email,
          @BlockAccess,
          @IsOSPAdmin,
          @Status,
          @FunctionalUser,
          @ColourMode,
          @HierarchyMaintenance
        )
      `);

    res.status(201).send("User created successfully!");
  } catch (err) {
    console.error("Create user error:", err);
    res.status(500).send("Failed to create user.");
  }
};

// Controller to edit user
exports.editUser = async (req, res) => {
  const id = req.params.id;
  const { DisplayName, Email, MFA_Mobile, BlockAccess, O365Email, AdminUser } = req.body;

  const isAdmin = AdminUser ? 1 : 0;
  const isBlocked = BlockAccess ? 1 : 0;

  try {
    const pool = req.app.locals.db;

    await pool
      .request()
      .input("DisplayName", DisplayName)
      .input("Email", Email)
      .input("BlockAccess", isBlocked)
      .input("MFA_Mobile", MFA_Mobile)
      .input("O365Email", O365Email)
      .input("AdminUser", isAdmin)
      .input("UserID", id).query(`
      UPDATE Users
      SET
        DisplayName = @DisplayName,
        Email = @Email,
        BlockAccess = @BlockAccess,
        MFA_Mobile = @MFA_Mobile,
        O365Email = @O365Email,
        AdminUser = @AdminUser
      WHERE UserID = @UserID
    `);

    res.status(200).send("User updated successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Controller to get all users
exports.getUsers = async (req, res) => {
  try {
    const pool = req.app.locals.db;

    const result = await pool.request().query("SELECT * FROM Users");

    res.json(result.recordset);
  } catch (err) {
    console.error("SQL error:", err);
    res.status(500).send("Database query failed");
  }
};

// Controller to delete user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const pool = req.app.locals.db;

    await pool.request().input("UserID", id).query(`
        DELETE FROM Users
        WHERE UserID = @UserID
      `);

    res.status(200).send(`User with ID ${id} deleted successfully.`);
  } catch (err) {
    console.error(" Delete user error:", err);
    res.status(500).send("Failed to delete user.");
  }
};
