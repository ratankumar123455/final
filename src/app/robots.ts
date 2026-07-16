import type { MetadataRoute } from "next";

const siteUrl = "https://www.metabob.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/signup"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
