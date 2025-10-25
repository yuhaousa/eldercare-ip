import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, FileText, Trophy, Users, TrendingUp, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AchievementsPage() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">成果展示</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          展示平台在智慧健康与养老领域的研究成果、学术论文、专利技术及获奖荣誉
        </p>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
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
          <Package className="h-10 w-10 text-primary mx-auto mb-3" />
          <div className="text-3xl font-bold text-foreground mb-1">12</div>
          <div className="text-sm text-muted-foreground">智能产品</div>
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
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="papers">学术论文</TabsTrigger>
          <TabsTrigger value="patents">专利技术</TabsTrigger>
          <TabsTrigger value="products">产品展示</TabsTrigger>
          <TabsTrigger value="awards">获奖荣誉</TabsTrigger>
          <TabsTrigger value="projects">项目成果</TabsTrigger>
        </TabsList>

        {/* Academic Papers */}
        <TabsContent value="papers" className="space-y-4">
          {papers.map((paper) => (
            <Link key={paper.id} href={`/achievements/papers/${paper.id}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
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
            </Link>
          ))}
        </TabsContent>

        {/* Patents */}
        <TabsContent value="patents" className="space-y-4">
          {patents.map((patent) => (
            <Link key={patent.id} href={`/achievements/patents/${patent.id}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
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
            </Link>
          ))}
        </TabsContent>

        {/* Products */}
        <TabsContent value="products">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/achievements/products/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <div className="relative h-48 w-full bg-muted">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
                      <Badge variant="secondary">{product.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </TabsContent>

        {/* Awards */}
        <TabsContent value="awards" className="space-y-4">
          {awards.map((award) => (
            <Link key={award.id} href={`/achievements/awards/${award.id}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
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
            </Link>
          ))}
        </TabsContent>

        {/* Project Results */}
        <TabsContent value="projects" className="space-y-4">
          {projectResults.map((project) => (
            <Link key={project.id} href={`/achievements/projects/${project.id}`}>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
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
            </Link>
          ))}
        </TabsContent>
      </Tabs>
    </main>
  )
}

const papers = [
  {
    id: "fall-detection-dl",
    title: "基于深度学习的老年人跌倒检测系统研究",
    authors: "张伟, 李明, 王芳",
    journal: "中国生物医学工程学报",
    year: "2024",
    category: "SCI",
  },
  {
    id: "wearable-chronic-disease",
    title: "智能可穿戴设备在慢性病管理中的应用研究",
    authors: "陈华, 刘洋, 赵敏",
    journal: "医疗卫生装备",
    year: "2024",
    category: "核心期刊",
  },
  {
    id: "ai-rehabilitation",
    title: "AI辅助康复训练系统的设计与实现",
    authors: "孙强, 周杰, 吴静",
    journal: "计算机应用研究",
    year: "2023",
    category: "核心期刊",
  },
  {
    id: "smart-management-platform",
    title: "养老机构智慧管理平台的构建与应用",
    authors: "马丽, 郑涛, 黄磊",
    journal: "中国卫生信息管理杂志",
    year: "2023",
    category: "核心期刊",
  },
  {
    id: "mental-health-assessment",
    title: "老年人心理健康评估模型研究",
    authors: "林芳, 徐明, 钱伟",
    journal: "心理学报",
    year: "2023",
    category: "CSSCI",
  },
]

const patents = [
  {
    id: "iot-health-monitoring",
    title: "一种基于物联网的老年人健康监测系统",
    inventors: "张伟, 李明, 王芳",
    number: "ZL202310123456.7",
    year: "2024",
    type: "发明专利",
  },
  {
    id: "smart-rehabilitation-device",
    title: "智能康复训练辅助装置",
    inventors: "陈华, 刘洋",
    number: "ZL202310234567.8",
    year: "2024",
    type: "实用新型",
  },
  {
    id: "fall-warning-system",
    title: "老年人跌倒预警系统及方法",
    inventors: "孙强, 周杰",
    number: "ZL202310345678.9",
    year: "2023",
    type: "发明专利",
  },
  {
    id: "wearable-monitoring-device",
    title: "可穿戴式生理参数监测设备",
    inventors: "马丽, 郑涛",
    number: "ZL202310456789.0",
    year: "2023",
    type: "实用新型",
  },
]

const awards = [
  {
    id: "smart-elderly-care-demo",
    title: "智慧养老创新应用示范项目",
    recipient: "中新智慧健康与养老融合平台",
    organization: "国家卫生健康委员会",
    year: "2024",
    level: "国家级",
  },
  {
    id: "excellent-tech-achievement",
    title: "优秀科技成果奖",
    recipient: "AI辅助康复训练系统",
    organization: "省科学技术厅",
    year: "2024",
    level: "省级",
  },
  {
    id: "healthcare-innovation",
    title: "医疗健康创新应用奖",
    recipient: "智能健康监测平台",
    organization: "中国医疗器械行业协会",
    year: "2023",
    level: "行业级",
  },
  {
    id: "industry-collaboration",
    title: "产学研合作创新成果奖",
    recipient: "校企院联合培养项目",
    organization: "教育部",
    year: "2023",
    level: "国家级",
  },
]

const projectResults = [
  {
    id: "smart-rehabilitation-monitoring",
    title: "智能康复与运动监测系统",
    description: "开发了基于AI的康复训练评估系统，已在5家养老机构试点应用，服务老年人超过500人",
    institution: "工程学院 & 科技企业",
    year: "2024",
    status: "已完成",
  },
  {
    id: "chronic-disease-screening",
    title: "老年慢病早筛与干预平台",
    description: "建立了多维度健康数据分析模型，实现慢性病早期筛查准确率达85%以上",
    institution: "医学院 & 养老机构",
    year: "2024",
    status: "进行中",
  },
  {
    id: "mental-health-intervention",
    title: "心理健康评估与干预系统",
    description: "开发了老年人心理健康评估工具，已为1000+老年人提供心理健康服务",
    institution: "护理学院 & 社会工作机构",
    year: "2023",
    status: "已完成",
  },
  {
    id: "ai-health-education",
    title: "AI健康教育平台",
    description: "构建了智能化健康教育内容推荐系统，累计服务学员超过2000人",
    institution: "教育学院 & 科技企业",
    year: "2023",
    status: "已完成",
  },
]

const products = [
  {
    id: "smart-watch",
    name: "智能健康手环",
    description: "实时监测心率、血压、血氧等生理指标，支持跌倒检测和SOS紧急呼叫功能",
    image: "/smart-health-wearable-watch-elderly-care-monitorin.jpg",
    category: "可穿戴设备",
    features: ["心率监测", "跌倒检测", "SOS呼叫"],
  },
  {
    id: "rehabilitation-robot",
    name: "智能康复训练机器人",
    description: "基于AI的康复训练辅助系统，提供个性化训练方案和实时动作纠正",
    image: "/rehabilitation-robot-elderly-care-training-equipme.jpg",
    category: "康复设备",
    features: ["AI辅助", "动作识别", "个性化方案"],
  },
  {
    id: "sleep-monitor",
    name: "智能睡眠监测垫",
    description: "非接触式睡眠质量监测，分析睡眠周期、呼吸频率和心率变化",
    image: "/smart-sleep-monitoring-mat-elderly-care-health-dev.jpg",
    category: "监测设备",
    features: ["非接触式", "睡眠分析", "异常预警"],
  },
  {
    id: "medication-dispenser",
    name: "智能药盒提醒器",
    description: "自动提醒服药时间，记录用药历史，支持远程监护和用药管理",
    image: "/smart-medication-dispenser-pill-box-elderly-care-r.jpg",
    category: "辅助设备",
    features: ["定时提醒", "用药记录", "远程监护"],
  },
  {
    id: "emergency-button",
    name: "一键呼叫报警器",
    description: "便携式紧急呼叫设备，支持GPS定位和多方通话功能",
    image: "/emergency-call-button-elderly-care-sos-device-gps.jpg",
    category: "安全设备",
    features: ["GPS定位", "一键呼叫", "防水设计"],
  },
  {
    id: "smart-cane",
    name: "智能拐杖",
    description: "集成LED照明、跌倒检测、GPS定位和SOS呼叫功能的智能辅助行走设备",
    image: "/smart-walking-cane-elderly-care-led-gps-fall-detec.jpg",
    category: "辅助设备",
    features: ["LED照明", "跌倒检测", "GPS定位"],
  },
  {
    id: "blood-pressure-monitor",
    name: "智能血压计",
    description: "自动测量血压并上传云端，支持数据分析和异常预警",
    image: "/smart-blood-pressure-monitor-elderly-care-health-d.jpg",
    category: "监测设备",
    features: ["自动测量", "云端同步", "数据分析"],
  },
  {
    id: "voice-assistant",
    name: "智能语音助手",
    description: "专为老年人设计的语音交互系统，支持健康咨询、用药提醒和娱乐功能",
    image: "/voice-assistant-speaker-elderly-care-ai-smart-home.jpg",
    category: "AI设备",
    features: ["语音交互", "健康咨询", "娱乐功能"],
  },
  {
    id: "smart-bed",
    name: "智能护理床",
    description: "电动调节床位，集成压力传感器监测翻身情况，预防褥疮",
    image: "/smart-nursing-bed-elderly-care-pressure-sensor-adj.jpg",
    category: "护理设备",
    features: ["电动调节", "压力监测", "防褥疮"],
  },
  {
    id: "fall-detection-camera",
    name: "AI跌倒检测摄像头",
    description: "基于计算机视觉的跌倒检测系统，实时监控并自动报警",
    image: "/ai-fall-detection-camera-elderly-care-computer-vis.jpg",
    category: "监测设备",
    features: ["AI识别", "实时监控", "自动报警"],
  },
  {
    id: "smart-toilet",
    name: "智能健康马桶",
    description: "自动检测尿液成分，分析健康状况，提供健康建议",
    image: "/smart-health-toilet-elderly-care-urine-analysis-he.jpg",
    category: "监测设备",
    features: ["尿液分析", "健康评估", "自动清洁"],
  },
  {
    id: "exercise-bike",
    name: "智能康复单车",
    description: "可调节阻力的康复训练单车，实时监测运动数据和心率",
    image: "/smart-exercise-bike-elderly-care-rehabilitation-tr.jpg",
    category: "康复设备",
    features: ["阻力调节", "数据监测", "康复训练"],
  },
]
