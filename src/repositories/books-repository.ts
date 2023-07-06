import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";

import prisma from "../database";

// import connection from "../database";

// export async function getBooks() {
//   const query = `SELECT * FROM books`;
//   const result = await connection.query<Book>(query);
//   return result.rows;
// }

export async function getBooks() {
  const books = await prisma.book.findMany()
  return books;
}

// export async function getBook(id: number) {
//   const query = `SELECT * FROM books WHERE id = $1`;
//   const result = await connection.query<Book>(query, [id]);
//   return result.rows[0];
// }

export async function getBook(id: number) {
  const book = await prisma.book.findFirst({
    where: {
      id
    }
  })
  return book;
}

// export async function createBook(book: CreateBook) {
//   const { title, author, publisher, purchaseDate } = book;
//   const query = `
//     INSERT INTO books (title, author, publisher, "purchaseDate")
//     VALUES ($1, $2, $3, $4)`;

//   const result = await connection.query(query, [
//     title, author, publisher, purchaseDate
//   ]);

//   return result.rowCount;
// }

export async function createBook(book: CreateBook) {
  const newBook = await prisma.book.create({
    data: book
  });
  return newBook;
}

// export async function reviewBook(bookReview: CreateReview) {
//   const { bookId, grade, review } = bookReview;
//   const query = `
//     UPDATE books 
//     SET
//       grade = $1,
//       review = $2,
//       read = true 
//     WHERE id = $3
//   `;

//   const result = await connection.query(query, [grade, review, bookId]);
//   return result.rowCount;
// }

export async function reviewBook(bookReview: CreateReview) {
  const review = await prisma.book.update({
    data: bookReview,
    where: {
      id: bookReview.bookId
    }
  });
  return review;
}