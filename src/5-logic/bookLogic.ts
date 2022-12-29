import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import BookModel from "../4-models/BookModel";
import {
  ResourceNotFoundError,
  ValidationModel,
} from "../4-models/errorModels";

// GET all books
async function getAllBooks(): Promise<BookModel[]> {
  const SQL = `
  SELECT id, bookName AS name, bookAuthor AS author, bookPrice AS price
  FROM books
  `;
  const books = await dal.execute(SQL);
  return books;
}

// GET one book
async function getOneBook(id: number): Promise<BookModel[]> {
  const SQL = `
  SELECT id, bookName AS name, bookAuthor AS author, bookPrice AS price
  FROM books
  WHERE id = ${id}
  `;
  const books = await dal.execute(SQL);
  const book = books[0];

  if (!book) {
    throw new ResourceNotFoundError(id);
  }
  return book;
}

// POST one book
async function postOneBook(book: BookModel): Promise<BookModel> {
  const error = book.validation();
  if (error) {
    throw new ValidationModel(error);
  }

  const SQL = `
  INSERT INTO books (bookName, bookAuthor, bookPrice)
  VALUES ('${book.name}', '${book.author}', '${book.price}')
  `;

  const info: OkPacket = await dal.execute(SQL);
  book.id = info.insertId;
  return book;
}

// UPDATE one book
async function updateOneBook(book: BookModel): Promise<BookModel> {
  // TODO - Validation

  const SQL = `
  UPDATE books
  SET bookName = '${book.name}', bookAuthor = '${book.author}', bookPrice = '${book.price}'
  WHERE id = ${book.id};
  `;

  const info: OkPacket = await dal.execute(SQL);
  // book.id = info.insertId;
  if (info.affectedRows === 0) {
    throw new ResourceNotFoundError(book.id);
  }
  return book;
}

// DELETE one book
async function deleteOneBook(id: number) {
  // TODO - Validation

  const SQL = `
  DELETE FROM books
  WHERE id = ${id};
  `;

  const info: OkPacket = await dal.execute(SQL);
  // book.id = info.insertId;
  if (info.affectedRows === 0) {
    throw new ResourceNotFoundError(id);
  }

  return info;
}

export default {
  getAllBooks,
  getOneBook,
  postOneBook,
  updateOneBook,
  deleteOneBook,
};
