import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Calendar, Building2, CheckCircle2 } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

const projectResults = [
  {
    id: "smart-rehabilitation-monitoring",
    title: "智能康复与运动监测系统",
    description: "开发了基于AI的康复训练评估系统，已在5家养老机构试点应用，服务老年人超过500人",
    institution: "工程学院 & 科技企业",
    year: "2024",
    status: "已完成",
    fullDescription:
      "智能康复与运动监测系统是一个集成了人工智能、计算机视觉和物联网技术的创新康复解决方案。系统通过摄像头和可穿戴传感器实时捕捉患者的运动数据，利用深度学习算法分析动作的准确性和完成度，为康复训练提供科学指导和实时反馈。",
    objectives: [
      "开发高精度的康复动作识别算法",
      "建立标准化的康复训练评估体系",
      "实现康复训练的个性化定制",
      "提高康复训练的效率和效果",
    ],
    achievements: [
      "开发了基于深度学习的动作识别算法，识别准确率达95%以上",
      "建立了包含1000+标准康复动作的动作库",
      "在5家养老机构成功部署，服务老年人超过500人",
      "康复训练效果提升30%，训练依从性提高40%",
      "获得2项发明专利和3项软件著作权",
    ],
    team: [
      { name: "张伟", role: "项目负责人", affiliation: "工程学院" },
      { name: "李明", role: "算法工程师", affiliation: "科技企业" },
      { name: "王芳", role: "康复专家", affiliation: "养老机构" },
    ],
    timeline: [
      { date: "2023-01", event: "项目启动，需求调研" },
      { date: "2023-06", event: "完成算法开发和系统设计" },
      { date: "2023-12", event: "首家养老机构试点应用" },
      { date: "2024-06", event: "扩展至5家机构，项目验收" },
    ],
    publications: 3,
    patents: 2,
    funding: "国家重点研发计划",
  },
  {
    id: "chronic-disease-screening",
    title: "老年慢病早筛与干预平台",
    description: "建立了多维度健康数据分析模型，实现慢性病早期筛查准确率达85%以上",
    institution: "医学院 & 养老机构",
    year: "2024",
    status: "进行中",
    fullDescription:
      "老年慢病早筛与干预平台是一个基于大数据和人工智能的健康管理系统。平台整合了老年人的体检数据、生活习惯、家族病史等多维度信息，通过机器学习算法建立疾病风险预测模型，实现对高血压、糖尿病、心脑血管疾病等常见慢性病的早期筛查和干预。",
    objectives: [
      "建立老年人慢性病风险评估模型",
      "实现慢性病的早期筛查和预警",
      "提供个性化的健康干预方案",
      "降低慢性病的发病率和并发症风险",
    ],
    achievements: [
      "建立了包含20余项指标的多维度健康评估模型",
      "慢性病早期筛查准确率达85%以上",
      "为3000余名老年人提供了健康评估服务",
      "通过早期干预，高危人群慢病发病率降低25%",
      "发表SCI论文2篇，核心期刊论文5篇",
    ],
    team: [
      { name: "陈华", role: "项目负责人", affiliation: "医学院" },
      { name: "刘洋", role: "数据科学家", affiliation: "医学院" },
      { name: "赵敏", role: "临床医生", affiliation: "养老机构" },
    ],
    timeline: [
      { date: "2023-03", event: "项目启动，数据采集" },
      { date: "2023-09", event: "完成模型开发和验证" },
      { date: "2024-03", event: "平台上线，开始试运行" },
      { date: "2024-12", event: "预计完成项目验收" },
    ],
    publications: 7,
    patents: 1,
    funding: "省自然科学基金",
  },
  {
    id: "mental-health-intervention",
    title: "心理健康评估与干预系统",
    description: "开发了老年人心理健康评估工具，已为1000+老年人提供心理健康服务",
    institution: "护理学院 & 社会工作机构",
    year: "2023",
    status: "已完成",
    fullDescription:
      "心理健康评估与干预系统是一个专门针对老年人心理健康问题的综合性解决方案。系统包含心理健康评估、心理咨询、团体活动、家庭支持等多个模块，通过科学的评估工具识别老年人的心理健康风险，提供个性化的干预方案，帮助老年人保持良好的心理状态。",
    objectives: [
      "开发适合老年人的心理健康评估工具",
      "建立心理健康风险预警机制",
      "提供多样化的心理干预服务",
      "提高老年人的心理健康水平和生活质量",
    ],
    achievements: [
      "开发了包含认知、情绪、社交等维度的心理健康评估量表",
      "建立了老年人心理健康数据库，收集1000+样本数据",
      "为1000+老年人提供了心理健康评估和干预服务",
      "参与者心理健康水平显著提升，抑郁焦虑症状减少40%",
      "发表CSSCI论文3篇，出版专著1部",
    ],
    team: [
      { name: "孙强", role: "项目负责人", affiliation: "护理学院" },
      { name: "周杰", role: "心理咨询师", affiliation: "社会工作机构" },
      { name: "吴静", role: "社会工作者", affiliation: "社会工作机构" },
    ],
    timeline: [
      { date: "2022-06", event: "项目启动，文献研究" },
      { date: "2022-12", event: "完成评估工具开发" },
      { date: "2023-06", event: "开展大规模评估和干预" },
      { date: "2023-12", event: "项目结题，成果发布" },
    ],
    publications: 4,
    patents: 0,
    funding: "教育部人文社科项目",
  },
  {
    id: "ai-health-education",
    title: "AI健康教育平台",
    description: "构建了智能化健康教育内容推荐系统，累计服务学员超过2000人",
    institution: "教育学院 & 科技企业",
    year: "2023",
    status: "已完成",
    fullDescription:
      "AI健康教育平台是一个基于人工智能的个性化健康教育系统。平台利用自然语言处理和推荐算法技术，根据学员的知识水平、学习兴趣和健康需求，智能推荐适合的健康教育内容。平台涵盖老年生理、慢病管理、康复训练、心理健康等多个领域，为养老服务人才培养提供了创新的教学工具。",
    objectives: [
      "开发智能化的健康教育内容推荐系统",
      "建立丰富的健康教育资源库",
      "实现个性化的学习路径规划",
      "提高健康教育的效果和效率",
    ],
    achievements: [
      "建立了包含500+课程、3000+知识点的健康教育资源库",
      "开发了基于深度学习的内容推荐算法，推荐准确率达90%",
      "累计服务学员超过2000人，课程完成率达85%",
      "学员健康知识水平提升50%，实践能力显著增强",
      "获得软件著作权5项，发表论文6篇",
    ],
    team: [
      { name: "马丽", role: "项目负责人", affiliation: "教育学院" },
      { name: "郑涛", role: "技术总监", affiliation: "科技企业" },
      { name: "黄磊", role: "课程设计师", affiliation: "教育学院" },
    ],
    timeline: [
      { date: "2022-09", event: "项目启动，需求分析" },
      { date: "2023-03", event: "完成平台开发和内容建设" },
      { date: "2023-06", event: "平台上线，开始推广应用" },
      { date: "2023-12", event: "项目验收，成果总结" },
    ],
    publications: 6,
    patents: 0,
    funding: "企业横向课题",
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectResults.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            首页
          </Link>
          <span className="mx-2">/</span>
          <Link href="/achievements" className="hover:text-foreground">
            成果展示
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">项目详情</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-3">
                    {project.status}
                  </Badge>
                  <h1 className="text-3xl font-bold text-foreground mb-4">{project.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4" />
                      <span>{project.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">项目简介</h2>
                  <p className="text-muted-foreground leading-relaxed">{project.fullDescription}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">项目目标</h2>
                  <ul className="space-y-2">
                    {project.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">主要成果</h2>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">项目团队</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.team.map((member, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-lg font-medium text-primary">{member.name[0]}</span>
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{member.name}</div>
                            <div className="text-sm text-muted-foreground">{member.role}</div>
                            <div className="text-xs text-muted-foreground">{member.affiliation}</div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">项目进展</h2>
                  <div className="space-y-4">
                    {project.timeline.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                            <div className="h-3 w-3 rounded-full bg-primary" />
                          </div>
                          {index < project.timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="text-sm font-medium text-foreground mb-1">{item.date}</div>
                          <div className="text-sm text-muted-foreground">{item.event}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">项目信息</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">项目状态</div>
                  <Badge variant="default">{project.status}</Badge>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">完成年份</div>
                  <div className="font-medium text-foreground">{project.year}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">合作单位</div>
                  <div className="font-medium text-foreground">{project.institution}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">资助来源</div>
                  <div className="font-medium text-foreground">{project.funding}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">学术产出</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-primary">{project.publications}</div>
                  <div className="text-sm text-muted-foreground">发表论文</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{project.patents}</div>
                  <div className="text-sm text-muted-foreground">申请专利</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">相关项目</h3>
              <div className="space-y-3">
                {projectResults
                  .filter((p) => p.id !== project.id)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link key={relatedProject.id} href={`/achievements/projects/${relatedProject.id}`}>
                      <div className="text-sm hover:text-primary transition-colors">
                        <div className="font-medium line-clamp-2 mb-1">{relatedProject.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {relatedProject.year} · {relatedProject.status}
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
