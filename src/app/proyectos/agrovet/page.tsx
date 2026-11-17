import ProjectCase, { caseMetadata } from "../ProjectCase";

export const metadata = caseMetadata("agrovet");

export default function AgrovetPage() {
  return <ProjectCase slug="agrovet" />;
}
