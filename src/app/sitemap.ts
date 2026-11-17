import type { MetadataRoute } from "next";
import { projects } from "./projects";

const baseUrl = "https://nmsoftware.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/web`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/software`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...projects.map((project) => ({
      url: `${baseUrl}/proyectos/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
