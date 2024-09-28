import { where } from "sequelize";
import { UserModel } from "../postgres/postgres.js";

export const getAll = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    if (users.length === 0) {
      return res.status(200).json({ message: "users not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addUser = async (req, res) => {
  const { name, email, designation, empId } = req.body;
  console.log(req.body);
  // Validate request body
  if (!name || !email || !designation || !empId) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await UserModel.findOne({ where: { empId } });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const newUser = await UserModel.create({ name, email, designation, empId });
    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  let userId = req.params.empId;
  try {
    const user = await UserModel.update(req.body, { where: { empId: userId } });
    if (user[0] === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedUser = await UserModel.findOne({ where: { empId: userId } });
    return res.status(201).json({ message: "update successful", updatedUser });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.empId;
  try {
    const user = await UserModel.findOne({ where: { empId: userId } });
    await user.destroy();
    return res.status(201).json({ message: "delete user" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
