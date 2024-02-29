import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "p1niotdu",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
