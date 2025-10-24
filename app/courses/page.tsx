import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CourseGrid } from "@/components/course-grid"
import { CourseFilters } from "@/components/course-filters"

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">课程中心</h1>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              探索全面的智慧养老课程体系，从理论到实践，助力专业成长
            </p>
          </div>

          <CourseFilters />
          <CourseGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}
