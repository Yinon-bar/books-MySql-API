import express, { NextFunction, Request, Response } from "express";
import bookLogic from "../5-logic/bookLogic";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  const books = bookLogic.getAllBooks();
  res.json(books);
});

export default router;
