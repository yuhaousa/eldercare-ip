import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Users, Plus } from "lucide-react"
import Link from "next/link"

export function ActiveProjects() {
  const projects = [
    {
      id: "1",
      title: "智能康复设备效果评估研究",
      category: "智能康复",
      status: "active",
      progress: 65,
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      team: [
        { name: "张教授", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "李医生", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "王工程师", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      description: "评估智能康复设备在老年人康复训练中的应用效果",
    },
    {
      id: "2",
      title: "慢性病早期筛查模型开发",
      category: "慢病管理",
      status: "active",
      progress: 42,
      startDate: "2024-02-01",
      endDate: "2025-01-31",
      team: [
        { name: "陈主任", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "刘博士", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      description: "基于AI技术的老年人慢性病早期筛查与预警系统",
    },
    {
      id: "3",
      title: "老年心理健康干预研究",
      category: "心理健康",
      status: "active",
      progress: 78,
      startDate: "2023-09-01",
      endDate: "2024-08-31",
      team: [
        { name: "赵教授", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "孙医生", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "周研究员", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      description: "探索有效的老年心理健康干预方法与实施路径",
    },
    {
      id: "4",
      title: "养老机构智能化管理系统",
      category: "机构管理",
      status: "planning",
      progress: 15,
      startDate: "2024-06-01",
      endDate: "2025-05-31",
      team: [
        { name: "吴院长", avatar: "/placeholder.svg?height=32&width=32" },
        { name: "郑工程师", avatar: "/placeholder.svg?height=32&width=32" },
      ],
      description: "开发智能化养老机构管理系统，提升运营效率",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">活跃项目</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          新建项目
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div>
                <Badge className="mb-2" variant="secondary">
                  {project.category}
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">项目进度</span>
                  <span className="text-sm font-medium text-foreground">{project.progress}%</span>
                </div>
                <Progress value={project.progress} />
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {project.startDate} 至 {project.endDate}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <div className="flex -space-x-2">
                    {project.team.map((member, index) => (
                      <Avatar key={index} className="h-8 w-8 border-2 border-background">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </div>
                <Link href={`/research/projects/${project.id}`}>
                  <Button variant="outline" size="sm">
                    查看详情
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
