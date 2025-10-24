import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Circle } from "lucide-react"

const learningPath = [
  { step: "理论课程", status: "completed", description: "完成基础理论学习" },
  { step: "模拟训练", status: "completed", description: "通过模拟场景训练" },
  { step: "实地实践", status: "in-progress", description: "正在进行实践学习" },
  { step: "AI能力评估", status: "pending", description: "待完成能力评估" },
  { step: "职业认证", status: "pending", description: "获得专业认证" },
]

export function LearningProgress() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">学习路径</h2>
      <Card>
        <CardHeader>
          <CardTitle>您的学习进度</CardTitle>
          <CardDescription>按照学习路径逐步提升专业技能</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {learningPath.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  {item.status === "completed" ? (
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  ) : item.status === "in-progress" ? (
                    <div className="h-6 w-6 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                  ) : (
                    <Circle className="h-6 w-6 text-muted-foreground" />
                  )}
                  {index < learningPath.length - 1 && (
                    <div className={`w-0.5 h-12 mt-2 ${item.status === "completed" ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h4
                    className={`font-medium ${item.status === "pending" ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    {item.step}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
