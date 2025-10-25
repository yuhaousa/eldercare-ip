import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlatformOverview } from "@/components/platform-overview"
import { CoursesSection } from "@/components/courses-section"
import { ResearchSection } from "@/components/research-section"
import { NewsPreview } from "@/components/news-preview"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PlatformOverview />
        <CoursesSection />
        <ResearchSection />
        <NewsPreview />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
