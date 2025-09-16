import { projectDetails } from "@/utils/data/project-details";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const staticRoutes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projectDetails.map((p) => ({
    url: `${baseUrl}#projects`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}


