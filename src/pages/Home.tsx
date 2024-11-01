import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Books from "../components/Books";
import { Book } from "../types";

export default function Home() {
  const books = useLoaderData() as Book[];

  return (
    <div className="space-y-20">
      <Banner />
      <Books books={books} />
    </div>
  );
}
