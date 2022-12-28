import dal from "../2-utils/dal";
import BookModel from "../4-models/BookModel";

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
  return book;
}

// POST one book
async function postOneBook(book: BookModel): Promise<BookModel> {
  const SQL = `
  INSERT INTO books (id, bookName, bookAuthor, bookPrice)
  VALUES ('${book.id}', '${book.name}', '${book.author}', '${book.price}')
  `;
  const books = await dal.execute(SQL);
  return book;
}

export default {
  getAllBooks,
  getOneBook,
  postOneBook,
};
