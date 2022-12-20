import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import connect from "./connect";
import login from "./routes/login";
import register from "./routes/register";
import routes from "./routes/routes";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(routes.LOGIN, login);
app.use(routes.REGISTER, register);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const db = process.env.dbString as string;
connect({ db });
app.listen(PORT, () => console.log("server running on port", PORT));
