import express, { NextFunction, Request, Response } from "express";
import bookLogic from "../5-logic/bookLogic";

const router = express.Router();

// GET all books
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const books = await bookLogic.getAllBooks();
  res.json(books);
});

// GET one book
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const id = +req.params.id;
  const book = await bookLogic.getOneBook(id);
  res.json(book);
});

export default router;
