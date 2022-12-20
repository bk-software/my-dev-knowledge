import express from "express";
const router = express.Router();
import { User } from "../models/User";
import routes from "./routes";
import joi from "joi";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

const loginSchema = joi.object({
  email: joi.string().required().email().min(6),
  password: joi.string().required().min(8),
});

// login user
router.post("/", async (req, res) => {
  try {
    //  joi validation
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.message);
    // cheack if user exists
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Wrong email or Password");
    // compare password
    const compareResult = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!compareResult) return res.status(400).send("Wrong email or Password");
    // create token
    const genToken = jwt.sign(
      {
        _id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.jwtKey as Secret
    );
    res.status(200).send({ token: genToken });
  } catch (error) {
    res.status(400).send("error in Login " + error);
  }
});

export = router;
