import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, FileText, Trophy, Users, TrendingUp } from "lucide-react"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">成果展示</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            展示平台在智慧健康与养老领域的研究成果、学术论文、专利技术及获奖荣誉
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center">
            <FileText className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">50+</div>
            <div className="text-sm text-muted-foreground">学术论文</div>
          </Card>
          <Card className="p-6 text-center">
            <Award className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">28</div>
            <div className="text-sm text-muted-foreground">专利技术</div>
          </Card>
          <Card className="p-6 text-center">
            <Trophy className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">15</div>
            <div className="text-sm text-muted-foreground">获奖荣誉</div>
          </Card>
          <Card className="p-6 text-center">
            <Users className="h-10 w-10 text-primary mx-auto mb-3" />
            <div className="text-3xl font-bold text-foreground mb-1">30+</div>
            <div className="text-sm text-muted-foreground">合作机构</div>
          </Card>
        </div>

        {/* Achievements Tabs */}
        <Tabs defaultValue="papers" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="papers">学术论文</TabsTrigger>
            <TabsTrigger value="patents">专利技术</TabsTrigger>
            <TabsTrigger value="awards">获奖荣誉</TabsTrigger>
            <TabsTrigger value="projects">项目成果</TabsTrigger>
          </TabsList>

          {/* Academic Papers */}
          <TabsContent value="papers" className="space-y-4">
            {papers.map((paper, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{paper.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{paper.authors}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span>{paper.journal}</span>
                      <span>•</span>
                      <span>{paper.year}</span>
                      <Badge variant="secondary">{paper.category}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Patents */}
          <TabsContent value="patents" className="space-y-4">
            {patents.map((patent, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{patent.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{patent.inventors}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span>专利号: {patent.number}</span>
                      <span>•</span>
                      <span>{patent.year}</span>
                      <Badge variant="secondary">{patent.type}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Awards */}
          <TabsContent value="awards" className="space-y-4">
            {awards.map((award, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Trophy className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{award.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{award.recipient}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span>{award.organization}</span>
                      <span>•</span>
                      <span>{award.year}</span>
                      <Badge variant="secondary">{award.level}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Project Results */}
          <TabsContent value="projects" className="space-y-4">
            {projectResults.map((project, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span>{project.institution}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                      <Badge variant="secondary">{project.status}</Badge>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}

const papers = [
  {
    title: "基于深度学习的老年人跌倒检测系统研究",
    authors: "张伟, 李明, 王芳",
    journal: "中国生物医学工程学报",
    year: "2024",
    category: "SCI",
  },
  {
    title: "智能可穿戴设备在慢性病管理中的应用研究",
    authors: "陈华, 刘洋, 赵敏",
    journal: "医疗卫生装备",
    year: "2024",
    category: "核心期刊",
  },
  {
    title: "AI辅助康复训练系统的设计与实现",
    authors: "孙强, 周杰, 吴静",
    journal: "计算机应用研究",
    year: "2023",
    category: "核心期刊",
  },
  {
    title: "养老机构智慧管理平台的构建与应用",
    authors: "马丽, 郑涛, 黄磊",
    journal: "中国卫生信息管理杂志",
    year: "2023",
    category: "核心期刊",
  },
  {
    title: "老年人心理健康评估模型研究",
    authors: "林芳, 徐明, 钱伟",
    journal: "心理学报",
    year: "2023",
    category: "CSSCI",
  },
]

const patents = [
  {
    title: "一种基于物联网的老年人健康监测系统",
    inventors: "张伟, 李明, 王芳",
    number: "ZL202310123456.7",
    year: "2024",
    type: "发明专利",
  },
  {
    title: "智能康复训练辅助装置",
    inventors: "陈华, 刘洋",
    number: "ZL202310234567.8",
    year: "2024",
    type: "实用新型",
  },
  {
    title: "老年人跌倒预警系统及方法",
    inventors: "孙强, 周杰",
    number: "ZL202310345678.9",
    year: "2023",
    type: "发明专利",
  },
  {
    title: "可穿戴式生理参数监测设备",
    inventors: "马丽, 郑涛",
    number: "ZL202310456789.0",
    year: "2023",
    type: "实用新型",
  },
]

const awards = [
  {
    title: "智慧养老创新应用示范项目",
    recipient: "中新智慧健康与养老融合平台",
    organization: "国家卫生健康委员会",
    year: "2024",
    level: "国家级",
  },
  {
    title: "优秀科技成果奖",
    recipient: "AI辅助康复训练系统",
    organization: "省科学技术厅",
    year: "2024",
    level: "省级",
  },
  {
    title: "医疗健康创新应用奖",
    recipient: "智能健康监测平台",
    organization: "中国医疗器械行业协会",
    year: "2023",
    level: "行业级",
  },
  {
    title: "产学研合作创新成果奖",
    recipient: "校企院联合培养项目",
    organization: "教育部",
    year: "2023",
    level: "国家级",
  },
]

const projectResults = [
  {
    title: "智能康复与运动监测系统",
    description: "开发了基于AI的康复训练评估系统，已在5家养老机构试点应用，服务老年人超过500人",
    institution: "工程学院 & 科技企业",
    year: "2024",
    status: "已完成",
  },
  {
    title: "老年慢病早筛与干预平台",
    description: "建立了多维度健康数据分析模型，实现慢性病早期筛查准确率达85%以上",
    institution: "医学院 & 养老机构",
    year: "2024",
    status: "进行中",
  },
  {
    title: "心理健康评估与干预系统",
    description: "开发了老年人心理健康评估工具，已为1000+老年人提供心理健康服务",
    institution: "护理学院 & 社会工作机构",
    year: "2023",
    status: "已完成",
  },
  {
    title: "AI健康教育平台",
    description: "构建了智能化健康教育内容推荐系统，累计服务学员超过2000人",
    institution: "教育学院 & 科技企业",
    year: "2023",
    status: "已完成",
  },
]
