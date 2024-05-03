import { loadEnv } from "vitepress";
import contentful from "contentful";

interface ENV {
  VITE_CONTENTFUL_ACCESS_TOKEN: string;
  VITE_CONTENTFUL_ENVIRONMENT_ID: string;
  VITE_CONTENTFUL_SPACE_ID: string;
  VITE_CONTENTFUL_BOOK_ID: string;
}

export type Chapter = {
  chapterId: string;
  title: string;
  content: string;
  url: string;
};

export type Chapters = Chapter[];

const {
  VITE_CONTENTFUL_ACCESS_TOKEN,
  VITE_CONTENTFUL_ENVIRONMENT_ID,
  VITE_CONTENTFUL_SPACE_ID,
  VITE_CONTENTFUL_BOOK_ID,
}: Record<keyof ENV, string> = loadEnv("", process.cwd());
const client = contentful.createClient({
  accessToken: VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: VITE_CONTENTFUL_ENVIRONMENT_ID,
  space: VITE_CONTENTFUL_SPACE_ID,
});

export const fetchChapters = async (): Promise<Chapters> => {
  const entry = await client.getEntries({
    "sys.id": VITE_CONTENTFUL_BOOK_ID,
  });
  const book = entry.items[0].fields as {
    chapters: { fields: Chapter }[];
  };
  const chapters = book.chapters.map(({ fields: { title, content } }) => ({
    title,
    content,
  }));

  return chapters.map((chapter, index) => {
    const chapterId = `chapter-${index + 1}`;

    return {
      ...chapter,
      chapterId,
      url: `/chapters/${chapterId}.html`,
    };
  });
};
