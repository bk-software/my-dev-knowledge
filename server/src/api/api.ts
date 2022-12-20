import express, { Express } from "express";

import login from "./login";
import profile from "./profile";
import register from "./register";
import routes from "./routes";
import users from "./users";

function router(app: Express) {
  app.use(routes.LOGIN, login);
  app.use(routes.REGISTER, register);
  app.use(routes.PROFILE, profile);
  app.use(routes.USERS, users);
}

export = router;
