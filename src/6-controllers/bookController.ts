import express, { NextFunction, Request, Response } from "express";
import deleteMessage from "../3-middleware/deleteMessage";
import bookLogic from "../5-logic/bookLogic";

const router = express.Router();

// GET all books
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const books = await bookLogic.getAllBooks();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

// GET one book
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const id = +req.params.id;
  const book = await bookLogic.getOneBook(id);
  res.json(book);
});

// POST one book
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const newBook = await bookLogic.postOneBook(req.body);
  res.status(201).json(newBook);
});

// UPDATE one book
router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const newBook = req.body;
  newBook.id = +req.params.id;
  const updatedBook = await bookLogic.updateOneBook(newBook);
  res.status(200).json(updatedBook);
});

// DELETE one book
router.delete(
  "/:id",
  deleteMessage,
  async (req: Request, res: Response, next: NextFunction) => {
    await bookLogic.deleteOneBook(+req.params.id);
    res.sendStatus(204);
  }
);

export default router;
