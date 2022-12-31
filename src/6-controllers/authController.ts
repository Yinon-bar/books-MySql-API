import express, { NextFunction, Request, Response } from "express";
import CredentialsModel from "../4-models/CredentialsModel";
import UserModel from "../4-models/UserModel";
import authLogic from "../5-logic/AuthLogic";

const router = express.Router();

// register
router.post(
  "/auth/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = new UserModel(req.body);
      const token = await authLogic.registerUser(user);
      console.log(token);

      res.status(201).json(token);
    } catch (err) {
      next(err);
    }
  }
);

// login
router.post(
  "/auth/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const credentials = new CredentialsModel(req.body);
      const token = await authLogic.logIn(credentials);
      console.log(token);

      res.json(token);
    } catch (err) {
      next(err);
    }
  }
);

export default router;
