import type { MetadataRoute } from "next";

const baseUrl = "https://nmsoftware.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/proyectos/agrovet`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/proyectos/mecanica-marset`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
