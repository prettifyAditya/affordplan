// app/page.tsx
import { Metadata } from "next";
import { fetchMetaDataById } from "@/store/frontendSlice/metaAPISlice";
import MediaPage from "@/components/frontendcomponents/pages/media";

const API_ID = 10;
const CANONICAL_URL =
  process.env.NEXT_PUBLIC_CANONICAL_URL ?? "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const meta = await fetchMetaDataById(API_ID);
    const defaultTitle = "afford";
    return {
      title: meta?.MetaTitle || defaultTitle,
      description: meta?.MetaDescriptions || "",
      keywords: meta?.MetaKeywords || "",
      alternates: { canonical: `${CANONICAL_URL}/about-us` },
      openGraph: {
        type: "website",
        url: `${CANONICAL_URL}/about-us`,
        title: meta?.MetaTitle || defaultTitle,
        description: meta?.MetaDescriptions || "",
        images: [
          {
            url: "/logo.svg",
            width: 1200,
            height: 630,
            alt: "afford",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: meta?.MetaTitle || defaultTitle,
        description: meta?.MetaDescriptions || "",
        images: ["/logo.svg"],
      },
      icons: {
        icon: "/favicon.ico",
      },
    };
  } catch (err) {
    console.error("Meta fetch failed", err);
    return {
      title: "afford",
      description: "",
    };
  }
}

export default function MediaPageData() {
  return (
    <MediaPage />
  );
}