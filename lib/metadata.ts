import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/"
}: PageMetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.concept}`;
  const url = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description,
    keywords: [...siteConfig.keywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      type: "website",
      locale: "es_CL",
      url,
      siteName: siteConfig.name,
      title: pageTitle,
      description
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description
    },
    robots: {
      index: true,
      follow: true
    }
  };
}
