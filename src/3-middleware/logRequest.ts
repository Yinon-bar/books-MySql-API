import { NextFunction, Request, Response } from "express";

function logRequest(req: Request, res: Response, next: NextFunction) {
  console.log(`Method: ${req.method} , Route: ${req.originalUrl}`);
  next();
}

export default logRequest;
