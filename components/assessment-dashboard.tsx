import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp, Award, Calendar } from "lucide-react"

const assessmentMetrics = [
  {
    icon: Brain,
    label: "综合能力评分",
    value: "72.6",
    maxValue: "100",
    progress: 72.6,
    color: "primary",
  },
  {
    icon: TrendingUp,
    label: "较上次提升",
    value: "+8.3",
    maxValue: "分",
    progress: 83,
    color: "accent",
  },
  {
    icon: Award,
    label: "能力等级",
    value: "B+",
    maxValue: "级",
    progress: 75,
    color: "chart-2",
  },
  {
    icon: Calendar,
    label: "下次评估",
    value: "7",
    maxValue: "天后",
    progress: 50,
    color: "chart-3",
  },
]

export function AssessmentDashboard() {
  return (
    <div className="space-y-6 mb-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {assessmentMetrics.map((metric, index) => {
          const Icon = metric.icon
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${metric.color}/10 mb-4`}>
                  <Icon className={`h-5 w-5 text-${metric.color}`} />
                </div>
                <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                <div className="flex items-baseline gap-1 mb-3">
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.maxValue}</p>
                </div>
                <Progress value={metric.progress} />
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI智能评估</CardTitle>
          <CardDescription>基于您的训练数据进行综合能力分析</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg bg-secondary/50">
              <h4 className="font-medium text-foreground mb-2">优势能力</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>上肢力量表现优秀（82分）</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>下肢力量持续提升（78分）</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>训练完成率高（85%）</span>
                </li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-secondary/50">
              <h4 className="font-medium text-foreground mb-2">改进建议</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span>增加灵活性训练频率</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span>加强平衡能力练习</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <span>注意训练后的拉伸放松</span>
                </li>
              </ul>
            </div>
          </div>
          <Button className="w-full">开始新的评估</Button>
        </CardContent>
      </Card>
    </div>
  )
}
