import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

const routes = ["/", "/servicios", "/soluciones", "/contacto", "/brochure", "/privacidad", "/panel"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.75
  }));
}
