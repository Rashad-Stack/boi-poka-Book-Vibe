import { Book as BookProp } from "../types";
import Book from "./Book";

interface BooksProps {
  books: BookProp[];
}

export default function Books({ books = [] }: BooksProps) {
  return (
    <section>
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-playfair text-center text-4xl font-bold">Books</h2>
        <div className="mt-10 grid grid-cols-3 gap-5">
          {books.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
