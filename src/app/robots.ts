import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nmsoftware.com.ar/sitemap.xml",
    host: "https://nmsoftware.com.ar",
  };
}
