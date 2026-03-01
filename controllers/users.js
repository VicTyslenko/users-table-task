// Controller to create a new user
exports.createUser = async (req, res) => {
  const { DisplayName, Email, MFA_Mobile, AdminUser, O365Email, BlockAccess } = req.body;
  const supabase = req.app.locals.db;

  try {
    const { data: existingEmail } = await supabase
      .from("Users")
      .select("UserID")
      .eq("Email", Email)
      .maybeSingle();

    if (existingEmail) {
      return res.status(409).json({ error: "Email already exists." });
    }

    const { data: existingName } = await supabase
      .from("Users")
      .select("UserID")
      .eq("DisplayName", DisplayName)
      .maybeSingle();

    if (existingName) {
      return res.status(409).json({ error: "Username already exists." });
    }

    const { error } = await supabase.from("Users").insert({
      DisplayName,
      Email,
      MFA_Mobile,
      AdminUser: !!AdminUser,
      O365Email,
      BlockAccess: !!BlockAccess,
    });

    if (error) throw error;

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
  const supabase = req.app.locals.db;

  try {
    const { data, error } = await supabase
      .from("Users")
      .update({
        DisplayName,
        Email,
        BlockAccess: !!BlockAccess,
        MFA_Mobile,
        O365Email,
        AdminUser: !!AdminUser,
      })
      .eq("UserID", id)
      .select();

    if (error) throw error;

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).send("User updated successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Controller to get all users
exports.getUsers = async (req, res) => {
  const supabase = req.app.locals.db;

  try {
    const { data, error } = await supabase.from("Users").select("*");

    if (error) throw error;

    res.json(data);
  } catch (err) {
    console.error("Supabase error:", err);
    res.status(500).send("Database query failed");
  }
};

// Controller to delete user
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  const supabase = req.app.locals.db;

  try {
    const { data, error } = await supabase
      .from("Users")
      .delete()
      .eq("UserID", id)
      .select();

    if (error) throw error;

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "User not found." });
    }

    res.status(200).send(`User with ID ${id} deleted successfully.`);
  } catch (err) {
    console.error("Delete user error:", err);
    res.status(500).send("Failed to delete user.");
  }
};
