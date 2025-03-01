import { BookData } from "@/types";

export default async function fetchRecommendBooks(): Promise<BookData[]> {
  const url = `https://onebite-books-server-phi-dun.vercel.app/book/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}
