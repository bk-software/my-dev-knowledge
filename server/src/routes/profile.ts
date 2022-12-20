import express, { Request, Response } from "express";
const router = express.Router();
import { User } from "../models/User";
import { auth, CustomRequest } from "../../middlewares/auth";
import _ from "lodash";

router.get("/", auth, async (req: Request, res: Response) => {
  try {
    let user = await User.findById((req as CustomRequest).payload._id);
    if (!user) return res.status(404).send("Wrong details");
    res.status(200).send(_.pick(user, ["_id", "name", "email", "isAdmin"]));
  } catch (error) {
    res.status(400).send("error in profile " + error);
  }
});

export = router;
