import { NextFunction, Request, Response } from "express";
import auth from "../2-utils/auth";
import { AuthErrorModel } from "../4-models/errorModels";

async function verifyLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const isValid = await auth.verifyToken(req);
    if (!isValid) {
      throw new AuthErrorModel("Unauthorized");
    }
    next();
  } catch (err) {
    next(err);
  }
}

export default verifyLogin;
