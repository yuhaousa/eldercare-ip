import { CourseDetail } from "@/components/course-detail"
import { notFound } from "next/navigation"

const courses = [
  {
    id: "geriatric-physiology",
    title: "老年生理与疾病管理",
    description: "深入学习老年运动生理、常见慢病管理、营养评估等核心知识",
    instructor: "张教授",
    duration: "12周",
    level: "中级",
    students: 1234,
    rating: 4.8,
  },
  {
    id: "rehabilitation-training",
    title: "康复训练与智能设备",
    description: "掌握物理治疗技术、肌肉功能恢复方法及穿戴式外骨骼操作",
    instructor: "李教授",
    duration: "10周",
    level: "高级",
    students: 856,
    rating: 4.9,
  },
  {
    id: "psychology-social-work",
    title: "心理与社会工作",
    description: "学习情绪疏导、临终关怀、家庭沟通等心理社会工作技能",
    instructor: "王教授",
    duration: "8周",
    level: "初级",
    students: 2103,
    rating: 4.7,
  },
  {
    id: "institution-management",
    title: "机构管理与安全",
    description: "掌握质量与风险管理、合规体系建设、应急响应等管理技能",
    instructor: "刘教授",
    duration: "10周",
    level: "中级",
    students: 678,
    rating: 4.6,
  },
  {
    id: "international-module",
    title: "国际与跨界模块",
    description: "了解国际护理标准、多语健康交流及跨文化养老服务",
    instructor: "陈教授",
    duration: "6周",
    level: "高级",
    students: 432,
    rating: 4.8,
  },
]

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = courses.find((c) => c.id === params.id)

  if (!course) {
    notFound()
  }

  return (
    <main>
      <CourseDetail course={course} />
    </main>
  )
}
