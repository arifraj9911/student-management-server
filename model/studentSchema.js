import { DataTypes } from "sequelize";

export const createStudentModel = async (sequelize) => {
  const Student = sequelize.define("Student", {
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.ENUM(
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12"
      ),
      allowNull: false,
    },
    division: {
      type: DataTypes.ENUM("A", "B", "C", "D", "E"),
      allowNull: false,
    },
    roll: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 2],
        min: 1,
        max: 99,
      },
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    landmark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pincode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [4, 6],
      },
    },
  });
  await Student.sync({ force: false });
  return Student;
};
