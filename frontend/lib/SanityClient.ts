import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.sanityProjectId,
  dataset: process.env.sanityDataset,
  apiVersion: "2023-01-21",
  useCdn: true,
});

export default client;
