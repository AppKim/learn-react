import BookItem from "@/components/book-item";
import { BookData } from "@/types";

// export const dynamic = "error";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | undefined }>;
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${
      (
        await searchParams
      ).q
    }`,
    { cache: "force-cache" }
  );

  if (!response.ok) {
    return <div>occurred error</div>;
  }
  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
