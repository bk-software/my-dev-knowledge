import express, { Express } from "express";
import dotenv from "dotenv";
import dbconnect from "./dbconnect";
import router from "./api/api";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

router(app);

const db = process.env.dbString as string;
dbconnect({ db });
app.listen(PORT, () => console.log("server running on port", PORT));
