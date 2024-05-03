import { fetchChapters } from "../../../utils/fetchChapters";

export default {
  async load() {
    return await fetchChapters();
  },
};
