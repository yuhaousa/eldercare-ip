import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: 1,
    title: "下肢力量训练",
    description: "改善腿部肌肉力量和平衡能力",
    duration: "30分钟",
    exercises: 8,
    completed: 5,
    difficulty: "中级",
    nextSession: "今天 14:00",
  },
  {
    id: 2,
    title: "上肢灵活性训练",
    description: "提升手臂和肩部的活动范围",
    duration: "25分钟",
    exercises: 6,
    completed: 6,
    difficulty: "初级",
    nextSession: "明天 10:00",
  },
  {
    id: 3,
    title: "核心稳定性训练",
    description: "增强核心肌群和身体稳定性",
    duration: "35分钟",
    exercises: 10,
    completed: 3,
    difficulty: "高级",
    nextSession: "周五 15:00",
  },
]

export function TrainingPrograms() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>训练计划</CardTitle>
        <CardDescription>您的个性化康复训练方案</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {programs.map((program) => {
          const progress = (program.completed / program.exercises) * 100
          return (
            <div key={program.id} className="p-4 rounded-lg border border-border bg-card">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-foreground">{program.title}</h3>
                    <Badge variant="secondary">{program.difficulty}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{program.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="h-4 w-4" />
                      <span>
                        {program.completed}/{program.exercises} 动作
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">完成进度</span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">下次训练：{program.nextSession}</span>
                  <Button size="sm">
                    <Play className="h-4 w-4 mr-1" />
                    开始训练
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
        <Button variant="outline" className="w-full bg-transparent" asChild>
          <Link href="/rehabilitation/exercises">浏览更多训练</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
