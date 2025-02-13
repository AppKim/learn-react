// CSS Module
import { ReactNode } from "react";
import SearchableLayout from "./components/searchable-layout";
import style from "./index.module.css";
import BookItem from "./components/book-item";
import { InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRecommendBooks from "@/lib/fetch-recommend-books";

export const getServerSideProps = async () => {
  const [allBooks, recommendBooks] = await Promise.all([
    fetchBooks(),
    fetchRecommendBooks(),
  ]);
  return {
    props: {
      allBooks,
      recommendBooks,
    },
  };
};

export default function Home({
  allBooks,
  recommendBooks,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>Recommend</h3>
        {recommendBooks.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </section>
      <section>
        <h3>All</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book}></BookItem>
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
