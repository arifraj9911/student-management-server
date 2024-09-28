import express from "express";
import { connection } from "./postgres/postgres.js";
import router from "./view/routes.js";
import cors from "cors";
import dotenv from 'dotenv';
const app = express();

const port = process.env.PORT || 5000;

dotenv.config();

// middleware
app.use(express.json());
app.use(cors());
app.use(router);

// app.get('req,res')

// app.listen(port, () => {
//   console.log(`server running on the port ${port}`);
// });

connection();

export default app;
