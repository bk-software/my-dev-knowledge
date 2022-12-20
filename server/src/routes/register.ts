import express from "express";
const router = express.Router();
import routes from "./routes";
import joi from "joi";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";
import { User } from "../models/User";

const registerSchema = joi.object({
  firstName: joi.string().required().min(2),
  lastName: joi.string().required().min(2),
  email: joi.string().required().email().min(6),
  password: joi.string().required().min(8),
  isAdmin: joi.boolean().required(),
});

// add new user
router.post("/", async (req, res) => {
  try {
    // joi validation
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);
    // cheack if user exists
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User allready exists");
    // add new user
    user = new User(req.body);
    // encrypt password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    // create token
    const genToken = jwt.sign(
      {
        _id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.jwtKey as Secret
    );
    await user.save();
    res.status(201).send({ token: genToken });
  } catch (err) {
    res.status(400).send("Error in Register " + err);
  }
});

export = router;
