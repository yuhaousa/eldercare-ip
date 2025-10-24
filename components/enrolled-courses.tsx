import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, Dumbbell, Heart } from "lucide-react"
import Link from "next/link"

const enrolledCourses = [
  {
    id: "geriatric-physiology",
    icon: Brain,
    title: "老年生理与疾病管理",
    progress: 65,
    nextLesson: "第三章：常见疾病概述",
    color: "primary",
  },
  {
    id: "rehabilitation-training",
    icon: Dumbbell,
    title: "康复训练与智能设备",
    progress: 30,
    nextLesson: "第二章：肌肉功能恢复",
    color: "accent",
  },
  {
    id: "psychology-social-work",
    icon: Heart,
    title: "心理与社会工作",
    progress: 85,
    nextLesson: "第四章：临终关怀实践",
    color: "chart-2",
  },
]

export function EnrolledCourses() {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">我的课程</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {enrolledCourses.map((course) => {
          const Icon = course.icon
          return (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${course.color}/10 mb-3`}>
                  <Icon className={`h-5 w-5 text-${course.color}`} />
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>下一课：{course.nextLesson}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">学习进度</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} />
                </div>
                <Button asChild className="w-full">
                  <Link href={`/courses/${course.id}`}>继续学习</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
