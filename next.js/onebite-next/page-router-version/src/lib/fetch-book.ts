import { BookData } from "@/types";

export default async function fetchBook(
  id: number
): Promise<BookData | undefined> {
  const url = `https://onebite-books-server-phi-dun.vercel.app/book/${id}`;
  try {
    const reponse = await fetch(url);
    if (!reponse.ok) {
      throw new Error();
    }
    return reponse.json();
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
