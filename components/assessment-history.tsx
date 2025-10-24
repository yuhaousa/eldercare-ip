import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, TrendingUp, TrendingDown } from "lucide-react"

const assessments = [
  {
    id: 1,
    date: "2024-01-15",
    score: 72.6,
    level: "B+",
    change: "+8.3",
    trend: "up",
    notes: "整体表现良好，力量指标显著提升",
  },
  {
    id: 2,
    date: "2024-01-01",
    score: 64.3,
    level: "B",
    change: "+5.2",
    trend: "up",
    notes: "平衡能力有所改善，建议继续加强",
  },
  {
    id: 3,
    date: "2023-12-15",
    score: 59.1,
    level: "C+",
    change: "+3.8",
    trend: "up",
    notes: "基础能力稳步提升，保持训练频率",
  },
  {
    id: 4,
    date: "2023-12-01",
    score: 55.3,
    level: "C",
    change: "-1.2",
    trend: "down",
    notes: "训练频率下降，需要调整计划",
  },
]

export function AssessmentHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>评估历史</CardTitle>
        <CardDescription>查看您的历史评估记录</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {assessments.map((assessment) => (
          <div key={assessment.id} className="p-4 rounded-lg border border-border bg-card">
            <div className="flex items-start justify-between mb-3">
              <div className="flex gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground">综合能力评估</h4>
                    <Badge variant="secondary">{assessment.level}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{assessment.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-foreground">{assessment.score}</p>
                <div
                  className={`flex items-center gap-1 text-sm ${assessment.trend === "up" ? "text-green-600" : "text-red-600"}`}
                >
                  {assessment.trend === "up" ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span>{assessment.change}</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{assessment.notes}</p>
            <Button variant="outline" size="sm">
              查看详细报告
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
