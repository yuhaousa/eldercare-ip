import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Dumbbell, Heart, Shield, Globe } from "lucide-react"

const courses = [
  {
    icon: Brain,
    title: "老年生理与疾病管理",
    description: "老年运动生理、常见慢病、营养管理",
    practice: "个案评估、健康档案管理",
    tech: "AI健康数据分析平台",
    color: "primary",
    image: "/elderly-physiology-health-management-medical-asses.jpg",
  },
  {
    icon: Dumbbell,
    title: "康复训练与智能设备",
    description: "物理治疗、肌肉功能恢复、穿戴式外骨骼操作",
    practice: "康复中心实训、步态评估",
    tech: "可穿戴机器人 + 数据追踪系统",
    color: "accent",
    image: "/rehabilitation-training-smart-wearable-devices-phy.jpg",
  },
  {
    icon: Heart,
    title: "心理与社会工作",
    description: "情绪疏导、临终关怀、家庭沟通",
    practice: "养老院情境演练、VR共情体验",
    tech: "AI情绪识别与虚拟陪伴",
    color: "chart-2",
    image: "/elderly-psychology-emotional-support-social-work-c.jpg",
  },
  {
    icon: Shield,
    title: "机构管理与安全",
    description: "质量与风险管理、合规体系、应急响应",
    practice: "模拟演练与岗位实践",
    tech: "智能监控与数据看板",
    color: "chart-3",
    image: "/nursing-home-management-safety-monitoring-dashboar.jpg",
  },
  {
    icon: Globe,
    title: "国际与跨界模块",
    description: "多语健康交流、护理标准比较",
    practice: "国际案例研讨",
    tech: "联合认证 / 远程课程",
    color: "chart-4",
    image: "/international-healthcare-standards-global-nursing-.jpg",
  },
]

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 sm:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">课程体系设计</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            学术与实践融合，理论课程 → 模拟训练 → 实地实践 → AI能力评估 → 职业认证
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {courses.map((course, index) => {
            const Icon = course.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div
                    className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-${course.color}/90 backdrop-blur-sm`}
                  >
                    <Icon className={`h-6 w-6 text-${course.color}-foreground`} />
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">核心模块</Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">实践场景</h4>
                    <p className="text-sm text-muted-foreground">{course.practice}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">技术支持</h4>
                    <p className="text-sm text-muted-foreground">{course.tech}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 rounded-xl bg-card p-8 border border-border shadow-sm">
          <h3 className="text-xl font-semibold text-foreground mb-4">学习路径</h3>
          <div className="flex flex-wrap items-center gap-3">
            {["理论课程", "模拟训练", "实地实践", "AI能力评估", "职业认证"].map((step, index, array) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium text-foreground">{step}</span>
                </div>
                {index < array.length - 1 && (
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
