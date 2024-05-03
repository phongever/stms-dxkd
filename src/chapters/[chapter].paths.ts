import { fetchChapters } from "../../utils/fetchChapters";
import type { Chapters } from "../../utils/fetchChapters";

type Path = {
  params: { chapter: string; title: string; url: string };
  content: string;
};

export default {
  async paths(): Promise<Path[]> {
    const chapters: Chapters = await fetchChapters();

    return chapters.map(({ chapterId, content, title, url }) => ({
      params: { chapter: chapterId, title, url },
      content,
    }));
  },
};
