import { HeroSection } from "@/components/hero-section"
import { PlatformOverview } from "@/components/platform-overview"
import { CoursesSection } from "@/components/courses-section"
import { ResearchSection } from "@/components/research-section"
import { NewsPreview } from "@/components/news-preview"
import { CtaSection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PlatformOverview />
      <CoursesSection />
      <ResearchSection />
      <NewsPreview />
      <CtaSection />
    </main>
  )
}
