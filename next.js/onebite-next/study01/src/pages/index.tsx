// CSS Module
import { ReactNode } from "react";
import SearchableLayout from "./components/searchable-layout";
import style from "./index.module.css";
import BookItem from "./components/book-item";
import { InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRecommendBooks from "@/lib/fetch-recommend-books";
import Head from "next/head";

export const getStaticProps = async () => {
  console.log("index page");

  const [allBooks, recommendBooks] = await Promise.all([
    fetchBooks(),
    fetchRecommendBooks(),
  ]);
  return {
    props: {
      allBooks,
      recommendBooks,
    },
    revalidate: 3,
  };
};

export default function Home({
  allBooks,
  recommendBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Onebite Books</title>
        <meta property="og:image" content="/thumnail.png" />
        <meta property="og:title" content="Onebite Books" />
        <meta property="og:description" content="" />
      </Head>
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
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
