import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

const sessions = [
  {
    id: 1,
    title: "物理治疗",
    therapist: "李治疗师",
    date: "今天",
    time: "14:00 - 15:00",
    location: "康复中心 3楼",
    type: "线下",
  },
  {
    id: 2,
    title: "步态评估",
    therapist: "王医生",
    date: "明天",
    time: "10:00 - 11:00",
    location: "评估室",
    type: "线下",
  },
  {
    id: 3,
    title: "在线指导",
    therapist: "张治疗师",
    date: "周五",
    time: "15:00 - 15:30",
    location: "视频会议",
    type: "线上",
  },
]

export function UpcomingSessions() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>预约安排</CardTitle>
        <CardDescription>即将进行的康复训练</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {sessions.map((session) => (
          <div key={session.id} className="p-3 rounded-lg bg-secondary/50 space-y-2">
            <div className="flex items-start justify-between">
              <h4 className="font-medium text-foreground">{session.title}</h4>
              <Badge variant={session.type === "线上" ? "default" : "secondary"}>{session.type}</Badge>
            </div>
            <p className="text-sm text-muted-foreground">{session.therapist}</p>
            <div className="space-y-1 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                <span>{session.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-3 w-3" />
                <span>{session.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                <span>{session.location}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
