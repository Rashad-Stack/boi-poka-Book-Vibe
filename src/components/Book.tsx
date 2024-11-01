import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Book as BookProp } from "../types";

interface BookProps {
  book: BookProp;
}

export default function Book({ book }: BookProps) {
  return (
    <Link to={`/books/${book.bookId}`} className="card border p-5">
      <figure className="max-h-52 rounded-xl bg-base-200 p-10">
        <img
          src={book.image}
          alt="Shoes"
          className="h-full w-full rounded-xl object-contain"
        />
      </figure>
      <div className="card-body flex-col px-0 pb-0">
        <div className="flex gap-4">
          {book.tags.map((tag, index) => (
            <span key={index} className="text-brand-green badge">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="card-title">{book.bookName}</h2>
        <p>By: {book.author}</p>
        <div className="card-actions flex justify-between border-t pt-3">
          <span>{book.category}</span>
          <span className="inline-flex items-center gap-2">
            {book.rating} <FiStar />
          </span>
        </div>
      </div>
    </Link>
  );
}
