import { createClient } from "next-sanity";

const client = createClient({
  projectId: "pmrju0ye",
  dataset: "production",
  apiVersion: "2023-01-21",
  useCdn: true,
});

export default client;
