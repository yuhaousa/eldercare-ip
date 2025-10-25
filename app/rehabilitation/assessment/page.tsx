import { AssessmentDashboard } from "@/components/assessment-dashboard"
import { AssessmentHistory } from "@/components/assessment-history"

export default function AssessmentPage() {
  return (
    <main className="py-12 sm:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">AI能力评估</h1>
          <p className="mt-2 text-muted-foreground">智能分析康复训练效果与能力水平</p>
        </div>

        <AssessmentDashboard />
        <AssessmentHistory />
      </div>
    </main>
  )
}
