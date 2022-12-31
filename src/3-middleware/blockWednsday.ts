import { NextFunction, Request, Response } from "express";

function blockWednesday(req: Request, res: Response, next: NextFunction) {
  const date = new Date();
  const today = date.getDay() + 1;
  if (today === 4) {
    res.status(403).send("Can't get data on wednesday");
    return;
  }

  next();
}

export default blockWednesday;
