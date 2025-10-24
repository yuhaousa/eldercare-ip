import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, Phone, Plus } from "lucide-react"

export function ResearchTeam() {
  const team = [
    {
      name: "张明教授",
      role: "首席研究员",
      department: "医学院",
      expertise: ["智能康复", "老年医学", "康复工程"],
      projects: 5,
      publications: 28,
      email: "zhang.ming@university.edu",
      phone: "+86 138-0000-0001",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "李华医生",
      role: "高级研究员",
      department: "护理学院",
      expertise: ["慢病管理", "健康评估", "护理研究"],
      projects: 4,
      publications: 15,
      email: "li.hua@university.edu",
      phone: "+86 138-0000-0002",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "王强工程师",
      role: "技术负责人",
      department: "工程学院",
      expertise: ["AI算法", "数据分析", "系统开发"],
      projects: 6,
      publications: 12,
      email: "wang.qiang@university.edu",
      phone: "+86 138-0000-0003",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "陈静主任",
      role: "研究员",
      department: "心理学院",
      expertise: ["老年心理", "心理干预", "社会工作"],
      projects: 3,
      publications: 18,
      email: "chen.jing@university.edu",
      phone: "+86 138-0000-0004",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "刘洋博士",
      role: "研究员",
      department: "公共卫生学院",
      expertise: ["流行病学", "健康管理", "数据统计"],
      projects: 4,
      publications: 22,
      email: "liu.yang@university.edu",
      phone: "+86 138-0000-0005",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "赵敏教授",
      role: "高级研究员",
      department: "管理学院",
      expertise: ["养老管理", "政策研究", "服务创新"],
      projects: 3,
      publications: 20,
      email: "zhao.min@university.edu",
      phone: "+86 138-0000-0006",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">研究团队</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          邀请成员
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {team.map((member, index) => (
          <Card key={index} className="p-6">
            <div className="flex gap-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src={member.avatar || "/placeholder.svg"} />
                <AvatarFallback>{member.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  {member.role} · {member.department}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {member.expertise.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-muted-foreground">参与项目</p>
                    <p className="text-sm font-medium text-foreground">{member.projects} 个</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">发表论文</p>
                    <p className="text-sm font-medium text-foreground">{member.publications} 篇</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Mail className="h-3 w-3 mr-1" />
                    邮件
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Phone className="h-3 w-3 mr-1" />
                    电话
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
