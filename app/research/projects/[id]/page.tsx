import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Users, FileText, MessageSquare, Upload, Download, Share2 } from "lucide-react"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Mock project data
  const project = {
    id: params.id,
    title: "智能康复设备效果评估研究",
    status: "active",
    progress: 65,
    startDate: "2024-01-15",
    endDate: "2024-12-31",
    budget: "¥500,000",
    spent: "¥325,000",
    description:
      "本研究旨在评估智能康复设备在老年人康复训练中的应用效果，通过对比传统康复方法与智能设备辅助康复的效果差异，为智能康复设备的推广应用提供科学依据。",
    objectives: [
      "收集100例老年康复患者的训练数据",
      "对比智能设备与传统方法的康复效果",
      "分析不同年龄段、疾病类型的康复差异",
      "建立智能康复效果评估模型",
    ],
    team: [
      { name: "张教授", role: "项目负责人", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "李医生", role: "临床研究员", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "王工程师", role: "技术支持", avatar: "/placeholder.svg?height=40&width=40" },
      { name: "陈研究生", role: "数据分析", avatar: "/placeholder.svg?height=40&width=40" },
    ],
    milestones: [
      { title: "项目启动与方案设计", date: "2024-01", status: "completed" },
      { title: "伦理审查与患者招募", date: "2024-02", status: "completed" },
      { title: "数据收集与初步分析", date: "2024-03-06", status: "in-progress" },
      { title: "中期报告与调整", date: "2024-07", status: "pending" },
      { title: "数据分析与论文撰写", date: "2024-09", status: "pending" },
      { title: "项目结题与成果发布", date: "2024-12", status: "pending" },
    ],
    documents: [
      { name: "研究方案.pdf", size: "2.3 MB", date: "2024-01-15" },
      { name: "伦理审查批准书.pdf", size: "1.1 MB", date: "2024-02-01" },
      { name: "数据收集表格.xlsx", size: "856 KB", date: "2024-03-01" },
      { name: "中期报告草稿.docx", size: "3.2 MB", date: "2024-05-20" },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{project.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {project.startDate} 至 {project.endDate}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {project.team.length} 名成员
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
              <Button size="sm">
                <Upload className="h-4 w-4 mr-2" />
                上传文件
              </Button>
            </div>
          </div>

          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">进行中</Badge>
        </div>

        {/* Progress Overview */}
        <Card className="p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">项目进度</p>
              <div className="flex items-center gap-3">
                <Progress value={project.progress} className="flex-1" />
                <span className="text-2xl font-bold text-foreground">{project.progress}%</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">预算使用</p>
              <div className="flex items-center gap-3">
                <Progress value={65} className="flex-1" />
                <span className="text-sm font-medium text-foreground">
                  {project.spent} / {project.budget}
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">剩余时间</p>
              <p className="text-2xl font-bold text-foreground">7 个月</p>
            </div>
          </div>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">项目概览</TabsTrigger>
            <TabsTrigger value="milestones">里程碑</TabsTrigger>
            <TabsTrigger value="team">团队成员</TabsTrigger>
            <TabsTrigger value="documents">文档资料</TabsTrigger>
            <TabsTrigger value="discussion">讨论区</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">项目描述</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">研究目标</h3>
                <ul className="space-y-3">
                  {project.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="milestones">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">项目里程碑</h3>
              <div className="space-y-6">
                {project.milestones.map((milestone, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`h-10 w-10 rounded-full flex items-center justify-center ${
                          milestone.status === "completed"
                            ? "bg-primary text-primary-foreground"
                            : milestone.status === "in-progress"
                              ? "bg-primary/20 text-primary"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {milestone.status === "completed" ? "✓" : index + 1}
                      </div>
                      {index < project.milestones.length - 1 && (
                        <div
                          className={`w-0.5 h-16 ${milestone.status === "completed" ? "bg-primary" : "bg-border"}`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-foreground">{milestone.title}</h4>
                        <Badge
                          variant={
                            milestone.status === "completed"
                              ? "default"
                              : milestone.status === "in-progress"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {milestone.status === "completed"
                            ? "已完成"
                            : milestone.status === "in-progress"
                              ? "进行中"
                              : "待开始"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{milestone.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="team">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">团队成员</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.team.map((member, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                  >
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-foreground">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-foreground">项目文档</h3>
                <Button size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  上传文档
                </Button>
              </div>
              <div className="space-y-3">
                {project.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {doc.size} · {doc.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="discussion">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6">项目讨论</h3>
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">暂无讨论内容</p>
                <Button>发起讨论</Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
