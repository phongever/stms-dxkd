import { loadEnv } from "vitepress";
import contentful from "contentful-management";

interface ENV {
  VITE_CONTENTFUL_ACCESS_TOKEN: string;
  VITE_CONTENTFUL_ENVIRONMENT_ID: string;
  VITE_CONTENTFUL_SPACE_ID: string;
}

const {
  VITE_CONTENTFUL_SPACE_ID,
  VITE_CONTENTFUL_ENVIRONMENT_ID,
  VITE_CONTENTFUL_ACCESS_TOKEN,
}: Record<keyof ENV, string> = loadEnv("", process.cwd());
const client = contentful.createClient(
  {
    accessToken: VITE_CONTENTFUL_ACCESS_TOKEN,
  },
  {
    type: "plain",
    defaults: {
      environmentId: VITE_CONTENTFUL_ENVIRONMENT_ID,
      spaceId: VITE_CONTENTFUL_SPACE_ID,
    },
  }
);

export const fetchChapters = async () => {
  const entries = await client.entry.getMany({
    query: {},
  });
};
