import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react"

export function LearningStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">已学课程</p>
              <p className="text-2xl font-bold text-foreground mt-1">3</p>
            </div>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">学习时长</p>
              <p className="text-2xl font-bold text-foreground mt-1">24.5h</p>
            </div>
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Clock className="h-6 w-6 text-accent" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">获得证书</p>
              <p className="text-2xl font-bold text-foreground mt-1">2</p>
            </div>
            <div className="h-12 w-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-chart-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">本周进度</p>
              <p className="text-2xl font-bold text-foreground mt-1">+15%</p>
            </div>
            <div className="h-12 w-12 rounded-lg bg-chart-3/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-chart-3" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
