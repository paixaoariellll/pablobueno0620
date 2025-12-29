import HomePage from "@/components/home-page";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Início");

export default function Page() {
  return <HomePage />;
}
