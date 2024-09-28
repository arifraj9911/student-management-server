import express from "express";
import { connection } from "./postgres/postgres.js";
import router from "./view/routes.js";
import cors from "cors";
const app = express();

const port = 5000;

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
