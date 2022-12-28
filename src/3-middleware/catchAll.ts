import { NextFunction, Request, Response } from "express";

function catchAll(err: any, req: Request, res: Response, next: NextFunction) {
  console.log(err);
  res.status(err.status || 500).send(err.msg);
}

export default catchAll;
