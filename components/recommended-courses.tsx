import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Globe, Star } from "lucide-react"
import Link from "next/link"

const recommendedCourses = [
  {
    id: "institution-management",
    icon: Shield,
    title: "机构管理与安全",
    description: "掌握质量与风险管理、合规体系建设",
    level: "中级",
    rating: 4.6,
    color: "chart-3",
  },
  {
    id: "international-module",
    icon: Globe,
    title: "国际与跨界模块",
    description: "了解国际护理标准、多语健康交流",
    level: "高级",
    rating: 4.8,
    color: "chart-4",
  },
]

export function RecommendedCourses() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">推荐课程</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {recommendedCourses.map((course) => {
          const Icon = course.icon
          return (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-${course.color}/10`}>
                    <Icon className={`h-5 w-5 text-${course.color}`} />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={`/courses/${course.id}`}>了解详情</Link>
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
