import { LearningProgress } from "@/components/learning-progress"
import { EnrolledCourses } from "@/components/enrolled-courses"
import { LearningStats } from "@/components/learning-stats"
import { RecommendedCourses } from "@/components/recommended-courses"

export default function LearningDashboardPage() {
  return (
    <main className="py-12 sm:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">学习中心</h1>
          <p className="mt-2 text-muted-foreground">追踪您的学习进度，继续您的学习之旅</p>
        </div>

        <LearningStats />
        <EnrolledCourses />
        <LearningProgress />
        <RecommendedCourses />
      </div>
    </main>
  )
}
