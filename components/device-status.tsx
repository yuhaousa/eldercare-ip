import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Watch, Activity, Wifi, Battery } from "lucide-react"

const devices = [
  {
    icon: Watch,
    name: "智能手环",
    model: "小米手环 7",
    status: "online",
    battery: 85,
    lastSync: "5分钟前",
  },
  {
    icon: Activity,
    name: "血压计",
    model: "欧姆龙 HEM-7136",
    status: "online",
    battery: 60,
    lastSync: "1小时前",
  },
  {
    icon: Wifi,
    name: "体重秤",
    model: "云麦好轻 Color2",
    status: "offline",
    battery: 40,
    lastSync: "2天前",
  },
]

export function DeviceStatus() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>设备状态</CardTitle>
        <CardDescription>查看已连接的健康监测设备</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {devices.map((device, index) => {
            const Icon = device.icon
            return (
              <div key={index} className="p-4 rounded-lg border border-border bg-card">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant={device.status === "online" ? "default" : "secondary"}>
                    {device.status === "online" ? "在线" : "离线"}
                  </Badge>
                </div>
                <h4 className="font-medium text-foreground mb-1">{device.name}</h4>
                <p className="text-xs text-muted-foreground mb-3">{device.model}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Battery className="h-3 w-3" />
                      <span>电量</span>
                    </div>
                    <span className="font-medium">{device.battery}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">最后同步</span>
                    <span className="font-medium">{device.lastSync}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
