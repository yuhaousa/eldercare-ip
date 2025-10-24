import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RehabOverview } from "@/components/rehab-overview"
import { TrainingPrograms } from "@/components/training-programs"
import { RehabProgress } from "@/components/rehab-progress"
import { UpcomingSessions } from "@/components/upcoming-sessions"

export default function RehabilitationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 sm:py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">康复训练中心</h1>
            <p className="mt-2 text-muted-foreground">智能化康复训练管理与进度追踪</p>
          </div>

          <RehabOverview />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
            <div className="lg:col-span-2">
              <TrainingPrograms />
            </div>
            <div className="lg:col-span-1">
              <UpcomingSessions />
            </div>
          </div>
          <RehabProgress />
        </div>
      </main>
      <Footer />
    </div>
  )
}
