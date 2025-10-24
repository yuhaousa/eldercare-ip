import { Card, CardContent } from "@/components/ui/card"
import { Heart, Activity, Droplet, Thermometer } from "lucide-react"

const healthMetrics = [
  {
    icon: Heart,
    label: "心率",
    value: "72",
    unit: "bpm",
    status: "normal",
    change: "+2",
    color: "primary",
  },
  {
    icon: Activity,
    label: "血压",
    value: "120/80",
    unit: "mmHg",
    status: "normal",
    change: "-3",
    color: "accent",
  },
  {
    icon: Droplet,
    label: "血氧",
    value: "98",
    unit: "%",
    status: "normal",
    change: "+1",
    color: "chart-2",
  },
  {
    icon: Thermometer,
    label: "体温",
    value: "36.5",
    unit: "°C",
    status: "normal",
    change: "0",
    color: "chart-3",
  },
]

export function HealthOverview() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
      {healthMetrics.map((metric, index) => {
        const Icon = metric.icon
        return (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${metric.color}/10`}>
                  <Icon className={`h-5 w-5 text-${metric.color}`} />
                </div>
                <div
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    metric.status === "normal"
                      ? "bg-green-100 text-green-700"
                      : metric.status === "warning"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  正常
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold text-foreground">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.unit}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  较上次 {metric.change > "0" ? "+" : ""}
                  {metric.change}
                </p>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
