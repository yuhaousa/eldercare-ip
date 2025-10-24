import { Card, CardContent } from "@/components/ui/card"
import { Dumbbell, Target, TrendingUp, Award } from "lucide-react"

const stats = [
  {
    icon: Dumbbell,
    label: "本周训练",
    value: "5",
    unit: "次",
    change: "+2",
    color: "primary",
  },
  {
    icon: Target,
    label: "完成率",
    value: "85",
    unit: "%",
    change: "+5",
    color: "accent",
  },
  {
    icon: TrendingUp,
    label: "能力提升",
    value: "12",
    unit: "%",
    change: "+3",
    color: "chart-2",
  },
  {
    icon: Award,
    label: "训练天数",
    value: "45",
    unit: "天",
    change: "+7",
    color: "chart-3",
  },
]

export function RehabOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${stat.color}/10`}>
                  <Icon className={`h-5 w-5 text-${stat.color}`} />
                </div>
                <div className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.unit}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
