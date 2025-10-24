"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Dumbbell, Heart, Shield, Globe, Clock, Users, Star } from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: "geriatric-physiology",
    icon: Brain,
    title: "老年生理与疾病管理",
    description: "深入学习老年运动生理、常见慢病管理、营养评估等核心知识",
    instructor: "张教授",
    duration: "12周",
    level: "中级",
    students: 1234,
    rating: 4.8,
    color: "primary",
    image: "/elderly-physiology-health-management-medical-asses.jpg",
  },
  {
    id: "rehabilitation-training",
    icon: Dumbbell,
    title: "康复训练与智能设备",
    description: "掌握物理治疗技术、肌肉功能恢复方法及穿戴式外骨骼操作",
    instructor: "李教授",
    duration: "10周",
    level: "高级",
    students: 856,
    rating: 4.9,
    color: "accent",
    image: "/rehabilitation-training-smart-wearable-devices-phy.jpg",
  },
  {
    id: "psychology-social-work",
    icon: Heart,
    title: "心理与社会工作",
    description: "学习情绪疏导、临终关怀、家庭沟通等心理社会工作技能",
    instructor: "王教授",
    duration: "8周",
    level: "初级",
    students: 2103,
    rating: 4.7,
    color: "chart-2",
    image: "/elderly-psychology-emotional-support-social-work-c.jpg",
  },
  {
    id: "institution-management",
    icon: Shield,
    title: "机构管理与安全",
    description: "掌握质量与风险管理、合规体系建设、应急响应等管理技能",
    instructor: "刘教授",
    duration: "10周",
    level: "中级",
    students: 678,
    rating: 4.6,
    color: "chart-3",
    image: "/nursing-home-management-safety-monitoring-dashboar.jpg",
  },
  {
    id: "international-module",
    icon: Globe,
    title: "国际与跨界模块",
    description: "了解国际护理标准、多语健康交流及跨文化养老服务",
    instructor: "陈教授",
    duration: "6周",
    level: "高级",
    students: 432,
    rating: 4.8,
    color: "chart-4",
    image: "/international-healthcare-standards-global-nursing-.jpg",
  },
]

export function CourseGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => {
        const Icon = course.icon
        return (
          <Card key={course.id} className="flex flex-col hover:shadow-lg transition-shadow overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="h-full w-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              <div
                className={`absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-lg bg-${course.color}/90 backdrop-blur-sm`}
              >
                <Icon className={`h-5 w-5 text-${course.color}-foreground`} />
              </div>
            </div>

            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{course.level}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                </div>
              </div>
              <CardTitle className="text-xl">{course.title}</CardTitle>
              <CardDescription className="line-clamp-2">{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} 名学员</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild className="flex-1">
                <Link href={`/courses/${course.id}`}>查看详情</Link>
              </Button>
            </CardFooter>
          </Card>
        )
      })}
    </div>
  )
}
