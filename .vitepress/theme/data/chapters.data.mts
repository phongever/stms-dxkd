import { fetchChapters } from "../../../utils/fetchChapters";

export default {
  async load() {
    await fetchChapters();

    return {
      hello: "world",
    };
  },
};
