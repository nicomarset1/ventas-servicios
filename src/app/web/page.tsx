import type { Metadata } from "next";
import SitePage from "../components/SitePage";
import { areas } from "../content";

const area = areas.find((item) => item.slug === "web")!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  alternates: { canonical: "/web" },
  openGraph: {
    title: area.metaTitle,
    description: area.metaDescription,
    url: "https://nmsoftware.com.ar/web",
  },
};

export default function WebAreaPage() {
  return <SitePage hero={area.hero} area="web" />;
}
