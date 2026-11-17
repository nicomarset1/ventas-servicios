import type { Metadata } from "next";
import SitePage from "../components/SitePage";
import { areas } from "../content";

const area = areas.find((item) => item.slug === "software")!;

export const metadata: Metadata = {
  title: area.metaTitle,
  description: area.metaDescription,
  alternates: { canonical: "/software" },
  openGraph: {
    title: area.metaTitle,
    description: area.metaDescription,
    url: "https://nmsoftware.com.ar/software",
  },
};

export default function SoftwareAreaPage() {
  return <SitePage hero={area.hero} area="software" />;
}
