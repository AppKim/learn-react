import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import style from "./[id].module.css";
import fetchBook from "@/lib/fetch-book";
import { useRouter } from "next/router";
import Head from "next/head";

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const book = await fetchBook(Number(id));

  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: { book },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
      {
        params: { id: "2" },
      },
      {
        params: { id: "3" },
      },
    ],
    fallback: true,
    // false: 404 Not Found
    // blocking: SSR
    // true: SSR + propsを分けて処理する
  };
};

export default function Page({
  book,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Onebite Books</title>
          <meta property="og:image" content="/thumnail.png" />
          <meta property="og:title" content="Onebite Books" />
          <meta property="og:description" content="" />
        </Head>
        <div>Loading...</div>
      </>
    );
  }
  if (!book) return "Loading Error";
  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={coverImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      <div className={style.container}>
        <div
          className={style.cover_img_container}
          style={{ backgroundImage: `url('${coverImgUrl}')` }}
        >
          <img src={coverImgUrl} />
        </div>
        <div className={style.title}>{title}</div>
        <div className={style.subTitle}>{subTitle}</div>
        <div className={style.author}>
          {author} | {publisher}
        </div>
        <div className={style.description}>{description}</div>
      </div>
    </>
  );
}
