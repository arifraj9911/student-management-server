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
router.get("/getAll", getAll);
router.post("/addUser", addUser);
router.put("/updateUser/:empId", updateUser);
router.delete("/deleteUser/:empId", deleteUser);

// for student
router.get("/getAllStudent", getAllStudent);
router.post("/addStudent", addStudent);
router.put("/updateStudent/:roll", updateStudent);
router.delete("/deleteStudent/:roll", deleteStudent);

export default router;
