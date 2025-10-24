import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Footprints, Dna, Users, BarChart, Globe2 } from "lucide-react"

const researchProjects = [
  {
    icon: Footprints,
    title: "智能康复与运动监测",
    collaboration: "联合实验室 + 穿戴式机器人研究",
    outcomes: "老年步态改进数据模型、论文与专利",
    color: "primary",
  },
  {
    icon: Dna,
    title: "老年慢病早筛与干预",
    collaboration: "医学院 + 养老院健康档案共享",
    outcomes: "老年风险预测算法、健康干预方案",
    color: "accent",
  },
  {
    icon: Users,
    title: "心理健康与社会适应",
    collaboration: "心理系 + 社工学院",
    outcomes: "老年心理测评工具与陪伴方案",
    color: "chart-2",
  },
  {
    icon: BarChart,
    title: "AI健康教育平台研究",
    collaboration: "教育学院 + 工程学院",
    outcomes: "自适应学习系统、技能画像模型",
    color: "chart-3",
  },
  {
    icon: Globe2,
    title: "国际交流与政策研究",
    collaboration: "海外大学 + 养老机构",
    outcomes: "联合出版物、标准化认证路径研究",
    color: "chart-4",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">科研与创新项目</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">推动产学研深度融合，打造智慧养老科研创新高地</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {researchProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${project.color}/10 mb-4`}>
                    <Icon className={`h-6 w-6 text-${project.color}`} />
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.collaboration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase">预期成果</h4>
                    <p className="text-sm text-foreground">{project.outcomes}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 border border-primary/20">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm font-medium text-foreground">科研项目</div>
            <div className="text-xs text-muted-foreground mt-1">正在进行中</div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">30+</div>
            <div className="text-sm font-medium text-foreground">合作机构</div>
            <div className="text-xs text-muted-foreground mt-1">高校与养老院</div>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-chart-2/10 to-chart-2/5 p-8 border border-chart-2/20">
            <div className="text-4xl font-bold text-chart-2 mb-2">50+</div>
            <div className="text-sm font-medium text-foreground">研究成果</div>
            <div className="text-xs text-muted-foreground mt-1">论文与专利</div>
          </div>
        </div>
      </div>
    </section>
  )
}
