import express, { NextFunction, Request, Response } from "express";
import deleteMessage from "../3-middleware/deleteMessage";
import bookLogic from "../5-logic/bookLogic";

const router = express.Router();

// GET all books
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    // (10).toFixed(101);
    const books = await bookLogic.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
});

// GET one book
router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = +req.params.id;
    const book = await bookLogic.getOneBook(id);
    res.json(book);
  } catch (error) {
    next(error);
  }
});

// POST one book
router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body;
    const newBook = await bookLogic.postOneBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
});

// UPDATE one book
router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBook = req.body;
    newBook.id = +req.params.id;
    const updatedBook = await bookLogic.updateOneBook(newBook);
    res.status(200).json(updatedBook);
  } catch (error) {
    next(error);
  }
});

// DELETE one book
router.delete(
  "/:id",
  deleteMessage,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await bookLogic.deleteOneBook(+req.params.id);
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
