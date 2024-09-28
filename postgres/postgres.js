import { Sequelize } from "sequelize";
import { createUserModel } from "../model/userSchema.js";
import { createStudentModel } from "../model/studentSchema.js";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

let UserModel = null;
let StudentModel = null;
const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    UserModel = await createUserModel(sequelize);
    StudentModel = await createStudentModel(sequelize);
    await sequelize.sync();
    console.log("database sync");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export { connection, UserModel, StudentModel };
