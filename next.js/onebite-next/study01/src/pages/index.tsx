// CSS Module
import { ReactNode } from "react";
import SearchableLayout from "./components/searchable-layout";
import style from "./index.module.css";
import books from "@/mock/books.json";
import BookItem from "./components/book-item";

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>Recommend</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </section>
      <section>
        <h3>All</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
