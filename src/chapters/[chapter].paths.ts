import { fetchChapters } from "../../utils";

export default {
  async paths() {
    await fetchChapters();

    return [
      {
        params: { chapter: "chapter-1", title: "Chapter 1" },
        content: "test 1",
      },
      {
        params: { chapter: "chapter-2", title: "Chapter 2" },
        content: "test 2",
      },
    ];
  },
};
