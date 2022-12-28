import dal from "../2-utils/dal";

async function getAllBooks() {
  const SQL = `
  SELECT id, bookName AS name, bookAuthor AS author, bookPrice AS price
  FROM books
  `;
  const books = await dal.execute(SQL);
  return books;
}

export default {
  getAllBooks,
};
