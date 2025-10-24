import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ExerciseLibrary } from "@/components/exercise-library"
import { ExerciseFilters } from "@/components/exercise-filters"

export default function ExercisesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">运动库</h1>
            <p className="mt-2 text-muted-foreground">浏览和学习各类康复训练动作</p>
          </div>

          <ExerciseFilters />
          <ExerciseLibrary />
        </div>
      </main>
      <Footer />
    </div>
  )
}
