import express from "express";
import {
  addUser,
  deleteUser,
  getAll,
  updateUser,
} from "../controller/userController.js";
import {
  addStudent,
  deleteStudent,
  getAllStudent,
  updateStudent,
} from "../controller/studentController.js";

const router = express.Router();

// for user
router.get("/api/getAll", getAll);
router.post("/api/addUser", addUser);
router.put("/api/updateUser/:empId", updateUser);
router.delete("/api/deleteUser/:empId", deleteUser);

// for student
router.get("/api/getAllStudent", getAllStudent);
router.post("/api/addStudent", addStudent);
router.put("/api/updateStudent/:roll", updateStudent);
router.delete("/api/deleteStudent/:roll", deleteStudent);

export default router;
