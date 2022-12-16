import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connect from "./connect";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => console.log("server running on port", PORT));
