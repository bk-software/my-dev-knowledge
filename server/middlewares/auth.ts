import { Request, Response, NextFunction } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
  payload: any | JwtPayload;
}

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    // get the token
    let token = req.header("Authorization");
    if (!token) return res.status(401).send("Access denied, no token");
    // verify token
    let payload = jwt.verify(token, process.env.jwtKey as Secret);
    // save the payload
    (req as CustomRequest).payload = payload;
    next();
  } catch (err) {
    res.status(401).send("Invaled token " + err);
  }
};
