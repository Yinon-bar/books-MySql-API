import { NextFunction, Request, Response } from "express";

function deleteMessage(req: Request, res: Response, next: NextFunction) {
  console.log(`Delete Obj-${req.params.id}`);
  next();
}

export default deleteMessage;
