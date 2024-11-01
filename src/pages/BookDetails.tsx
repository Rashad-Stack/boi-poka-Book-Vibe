import { useLocation } from "react-router-dom";
import { Book } from "../types";

export default function BookDetails() {
  const { state } = useLocation();

  const book = state.book as Book;

  return (
    <section>
      <div className="container mx-auto max-w-6xl">
        <div className="hero">
          <div className="hero-content w-full flex-col items-stretch gap-8 lg:flex-row">
            <div className="flex flex-1 items-center justify-center rounded-xl bg-base-200 p-8">
              <figure>
                <img
                  src={book.image}
                  className="max-w-xs rounded-xl object-contain"
                />
              </figure>
            </div>

            <div className="flex-1 space-y-5">
              <h1 className="font-playfair text-5xl font-bold">
                {book.bookName}
              </h1>
              <p className="font-semibold text-gray-500">By: {book.author}</p>
              <p className="border-y-2 py-2 text-lg font-semibold">
                {book.category}
              </p>
              <p>
                <span className="font-bold">Review: </span>
                {book.review}
              </p>

              <p className="flex items-center gap-2">
                <span className="font-bold">Review:</span>
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-brand-green badge font-semibold"
                  >
                    #{tag}
                  </span>
                ))}
              </p>
              <div className="border-t pt-5">
                <div className="flex max-w-md items-center justify-start gap-10 text-left">
                  <div className="space-y-3">
                    <p className="text-gray-500">Number of Pages:</p>
                    <p className="text-gray-500">Publisher:</p>
                    <p className="text-gray-500">Year of Publishing:</p>
                    <p className="text-gray-500">Rating:</p>
                  </div>
                  <div className="space-y-3">
                    <p className="font-bold">{book.totalPages}</p>
                    <p className="font-bold">{book.publisher}</p>
                    <p className="font-bold">{book.yearOfPublishing}</p>
                    <p className="font-bold">{book.rating}</p>
                  </div>
                </div>
                <div className="mt-4 space-x-5">
                  <button className="hover:outline-brand-blue btn bg-transparent outline-4 hover:bg-transparent">
                    Read
                  </button>
                  <button className="bg-brand-blue hover:bg-brand-blue/80 btn text-white">
                    Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
