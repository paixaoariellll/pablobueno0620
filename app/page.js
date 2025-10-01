import ProjectGallery from "@/components/features-06/features-06";
import Hero07 from "@/components/hero-07/hero-07";
import Diferenciais from "@/components/stats-01/stats-01";
import Timeline from "@/components/timeline-01/timeline-01";
import WhoIs from "@/components/whoIs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata("Início");

export default function HomePage() {
  return (
    <div className='flex flex-1 flex-col pt-0 mt-2'>
      <Hero07 />
      <WhoIs />
      <Timeline />
      <Diferenciais />
      <ProjectGallery />
    </div>
  );
}
