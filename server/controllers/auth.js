const bcrypt = require("bcryptjs");
const { Users } = require("../models"); // Adjust the path accordingly
const jwt = require("jsonwebtoken");

//Register
const register = async (req, res) => {
  const { userName, name, email, password } = req.body;

  try {
    const existingUser = await Users.findOne({
      where: { userName: userName },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);

    const newUser = await Users.create({
      userName,
      name,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
//\\

//login
const login = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await Users.findOne({
      where: { userName: userName },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const passwordMatch = await bcrypt.compareSync(password, user.password);

    if (passwordMatch) {
      const token = jwt.sign({ id: user.id }, "secretkey");

      res.cookie("token", token, { httpOnly: true });

      return res
        .status(200)
        .json({ message: "Login successful", user: user, token: token });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
//\\

//logout
const logout = (req, res) => {
  try {
    res.clearCookie("token", {
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({ message: "User Logout successfully" });
  } catch (error) {
    console.error("Error during logout:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
//\\

module.exports = {
  login,
  register,
  logout,
};
