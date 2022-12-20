import express, { Request, Response } from "express";
const router = express.Router();
import { User } from "../models/User";
import { auth, CustomRequest } from "../../middlewares/auth";
import joi from "joi";
import _ from "lodash";

const userSchemaJoi = joi.object({
  firstName: joi.string().required().min(2),
  lastName: joi.string().required().min(2),
  email: joi.string().required().email().min(6),
  isAdmin: joi.boolean(),
});

// get specific user by id
router.get("/:id", auth, async (req: Request, res: Response) => {
  try {
    let user = await User.findById({ _id: req.params.id as string });
    if (!user) return res.status(404).send("Wrong details");
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("error in profile " + error);
  }
});

// update specific user
router.put("/:id", async (req, res) => {
  try {
    // joi validation:
    const { error } = userSchemaJoi.validate(req.body);
    if (error) return res.status(400).send(error.message);

    // search if user exists
    let user = await User.findById({ _id: req.params.id as string });
    if (!user) return res.status(400).send("user not found");

    user = await User.findOneAndUpdate(
      { _id: req.params.id as string },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send("Error in put user");
  }
});

// Delete specific user
router.delete("/:id", auth, async (req, res) => {
  try {
    let user = await User.findByIdAndDelete({ _id: req.params.id as string });
    if (!user) return res.status(404).send("Theres no such user");
    res.status(200).send("user deleted succesfuly");
  } catch (err) {
    res.status(400).send("Error in delete user");
  }
});

// get all users
router.get("/", async (req, res) => {
  try {
    let users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send("Error get users");
  }
});

export = router;
