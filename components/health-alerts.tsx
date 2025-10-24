import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, CheckCircle2 } from "lucide-react"

const alerts = [
  {
    type: "warning",
    title: "血压偏高",
    message: "今日下午血压达到135/88，建议注意休息",
    time: "2小时前",
  },
  {
    type: "info",
    title: "用药提醒",
    message: "晚餐后记得服用降压药",
    time: "4小时前",
  },
  {
    type: "success",
    title: "运动目标达成",
    message: "今日步数已达8000步",
    time: "6小时前",
  },
]

export function HealthAlerts() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>健康提醒</CardTitle>
        <CardDescription>重要健康信息通知</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert, index) => (
          <div key={index} className="flex gap-3 p-3 rounded-lg bg-secondary/50">
            <div className="flex-shrink-0 mt-0.5">
              {alert.type === "warning" && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
              {alert.type === "info" && <Info className="h-5 w-5 text-blue-600" />}
              {alert.type === "success" && <CheckCircle2 className="h-5 w-5 text-green-600" />}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h4 className="text-sm font-medium text-foreground">{alert.title}</h4>
                <Badge
                  variant="secondary"
                  className={
                    alert.type === "warning"
                      ? "bg-yellow-100 text-yellow-700"
                      : alert.type === "info"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                  }
                >
                  {alert.type === "warning" ? "警告" : alert.type === "info" ? "提醒" : "完成"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{alert.message}</p>
              <p className="text-xs text-muted-foreground">{alert.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
