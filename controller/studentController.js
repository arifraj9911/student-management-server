import { StudentModel } from "../postgres/postgres.js";

export const getAllStudent = async (req, res) => {
  try {
    const students = await StudentModel.findAll();
    if (students.length === 0) {
      return res.status(200).json({ message: "students not found" });
    }
    return res.status(200).json(students);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addStudent = async (req, res) => {
  const { roll } = req.body;
  console.log(req.body);

  try {
    const existingStudent = await StudentModel.findOne({ where: { roll } });
    if (existingStudent) {
      return res.status(409).json({ message: "student already exists" });
    }

    const newStudent = await StudentModel.create(req.body);
    return res.status(201).json(newStudent);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateStudent = async (req, res) => {
  let roll = req.params.roll;
  try {
    const student = await StudentModel.update(req.body, { where: { roll } });
    if (student[0] === 0) {
      return res.status(404).json({ message: "student not found" });
    }
    const updatedStudent = await StudentModel.findOne({ where: { roll } });
    return res
      .status(201)
      .json({ message: "update successful", updatedStudent });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteStudent = async (req, res) => {
  const roll = req.params.roll;
  try {
    const student = await StudentModel.findOne({ where: { roll } });
    await student.destroy();
    return res.status(201).json({ message: "delete student successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};
