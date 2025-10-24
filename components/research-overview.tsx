import { Card } from "@/components/ui/card"
import { Beaker, Users, FileText, TrendingUp } from "lucide-react"

export function ResearchOverview() {
  const stats = [
    {
      icon: Beaker,
      label: "活跃项目",
      value: "12",
      change: "+3",
      trend: "up",
    },
    {
      icon: Users,
      label: "研究人员",
      value: "45",
      change: "+8",
      trend: "up",
    },
    {
      icon: FileText,
      label: "发表论文",
      value: "28",
      change: "+5",
      trend: "up",
    },
    {
      icon: TrendingUp,
      label: "研究经费",
      value: "¥850万",
      change: "+15%",
      trend: "up",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-primary">{stat.change}</span>
          </div>
          <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </Card>
      ))}
    </div>
  )
}
