"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, TrendingUp, FileText, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "新中智慧健康养老平台正式启动，开启校企院三方合作新模式",
      excerpt: "平台整合高校、养老机构、科技企业三方资源，构建智慧健康与养老融合生态系统，推动产学研深度融合。",
      category: "平台新闻",
      date: "2024-01-15",
      image: "/smart-elderly-care-platform-launch-ceremony.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "AI健康监测系统成功部署，服务超过500位老年人",
      excerpt: "基于人工智能的健康监测系统在多家养老机构成功部署，实现24小时实时健康数据监测与预警。",
      category: "平台新闻",
      date: "2024-01-10",
      image: "/ai-health-monitoring-system-elderly-care.jpg",
    },
    {
      id: 3,
      title: "首批智慧养老专业学生完成实践培训，就业率达95%",
      excerpt: "通过平台系统化培训，首批学生掌握了智慧养老核心技能，获得多家养老机构和科技企业青睐。",
      category: "平台新闻",
      date: "2024-01-05",
      image: "/students-training-elderly-care-practice.jpg",
    },
    {
      id: 4,
      title: "新加坡养老专家团队来访，深化中新养老服务合作",
      excerpt: "新加坡国立大学养老研究中心专家团队访问平台，双方就智慧养老技术应用、人才培养等领域达成多项合作共识。",
      category: "国际交流",
      date: "2024-01-25",
      image: "/singapore-experts-visiting-elderly-care-center.jpg",
    },
    {
      id: 5,
      title: "中新联合研发的智能护理机器人通过临床测试",
      excerpt: "由中新两国科研团队联合研发的智能护理机器人在多家养老机构完成临床测试，获得老年人和护理人员一致好评。",
      category: "技术创新",
      date: "2024-01-22",
      image: "/nursing-robot-assisting-elderly-person.jpg",
    },
    {
      id: 6,
      title: "平台举办首届中新智慧养老创新论坛",
      excerpt: "来自中国和新加坡的200余位专家学者齐聚一堂，共同探讨智慧养老产业发展趋势和创新实践。",
      category: "学术活动",
      date: "2024-01-20",
      image: "/conference-forum-elderly-care-innovation.jpg",
    },
    {
      id: 7,
      title: "中新养老服务标准化合作项目正式启动",
      excerpt: "双方将共同制定智慧养老服务标准体系，推动中新养老服务标准互认，促进养老产业国际化发展。",
      category: "标准制定",
      date: "2024-01-18",
      image: "/signing-ceremony-partnership-agreement.jpg",
    },
    {
      id: 8,
      title: "平台学生赴新加坡进行为期三个月的实习交流",
      excerpt: "首批20名学生前往新加坡知名养老机构实习，学习国际先进的养老服务理念和管理经验。",
      category: "人才培养",
      date: "2024-01-15",
      image: "/students-learning-in-singapore-elderly-care-facili.jpg",
    },
  ]

  const policies = [
    {
      id: 1,
      title: "国务院办公厅关于推进养老服务发展的意见",
      summary: "加快建设居家社区机构相协调、医养康养相结合的养老服务体系，推动智慧养老产业发展。",
      date: "2024-01-20",
      source: "国务院办公厅",
      level: "国家级",
    },
    {
      id: 2,
      title: "关于促进互联网+医疗健康发展的指导意见",
      summary:
        "鼓励医疗机构应用互联网等信息技术拓展医疗服务空间和内容，构建覆盖诊前、诊中、诊后的线上线下一体化医疗服务模式。",
      date: "2024-01-18",
      source: "国家卫生健康委员会",
      level: "国家级",
    },
    {
      id: 3,
      title: "智慧健康养老产业发展行动计划（2024-2026年）",
      summary: "推动人工智能、物联网、云计算、大数据等新一代信息技术和智能硬件在养老服务领域的深度应用。",
      date: "2024-01-12",
      source: "工业和信息化部",
      level: "国家级",
    },
    {
      id: 4,
      title: "关于加强医养结合机构医疗卫生服务质量管理的通知",
      summary: "规范医养结合机构医疗卫生服务，提升服务质量，保障老年人健康权益。",
      date: "2024-01-08",
      source: "国家卫生健康委员会",
      level: "国家级",
    },
    {
      id: 5,
      title: "关于深化中新双边养老服务合作的框架协议",
      summary: "中新两国政府签署养老服务合作框架协议，在人才培养、技术交流、标准互认等方面开展全面合作。",
      date: "2024-01-25",
      source: "民政部",
      level: "国家级",
    },
    {
      id: 6,
      title: "养老机构智能化改造补贴实施细则",
      summary: "对养老机构进行智能化、信息化改造给予财政补贴，支持引进智能监测设备、康复训练系统等。",
      date: "2024-01-22",
      source: "财政部、民政部",
      level: "国家级",
    },
    {
      id: 7,
      title: "智慧养老服务人才培养指导意见",
      summary: "加强智慧养老服务人才培养，鼓励高校开设相关专业，推动校企合作，建立实训基地。",
      date: "2024-01-15",
      source: "教育部、民政部",
      level: "国家级",
    },
    {
      id: 8,
      title: "老年人健康数据安全与隐私保护规范",
      summary: "明确老年人健康数据采集、存储、使用的安全要求，保护老年人个人隐私和数据安全。",
      date: "2024-01-10",
      source: "国家网信办",
      level: "国家级",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "智能康复训练系统获得国家科技进步二等奖",
      description: "基于AI的智能康复训练系统，实现个性化康复方案定制，康复效果提升40%。",
      date: "2024-01-22",
      type: "科技奖项",
      impact: "已在20家养老机构推广应用",
    },
    {
      id: 2,
      title: "发布《智慧养老服务标准体系白皮书》",
      description: "联合多家机构共同编制，填补国内智慧养老服务标准空白，为行业发展提供指导。",
      date: "2024-01-18",
      type: "标准制定",
      impact: "成为行业参考标准",
    },
    {
      id: 3,
      title: "老年慢病早筛AI模型准确率突破92%",
      description: "通过深度学习技术，实现对老年常见慢性病的早期筛查，准确率达到92.3%。",
      date: "2024-01-15",
      type: "技术突破",
      impact: "已筛查超过10000人次",
    },
    {
      id: 4,
      title: "与新加坡国立大学签署智慧养老研究合作协议",
      description: "开展国际合作研究，引进先进养老理念和技术，推动中新养老服务标准对接。",
      date: "2024-01-10",
      type: "国际合作",
      impact: "建立长期合作机制",
    },
    {
      id: 5,
      title: "中新联合实验室成功研发智能睡眠监测系统",
      description: "采用非接触式传感技术，实时监测老年人睡眠质量，及时发现睡眠障碍和健康风险。",
      date: "2024-01-26",
      type: "技术突破",
      impact: "已在15家养老机构试点应用",
    },
    {
      id: 6,
      title: "平台培养的首批学生获新加坡养老机构高度认可",
      description: "20名学生在新加坡实习期间表现优异，其中8名获得新加坡养老机构正式聘用邀请。",
      date: "2024-01-24",
      type: "人才培养",
      impact: "就业率100%，平均薪资提升30%",
    },
    {
      id: 7,
      title: "智慧养老大数据平台正式上线运营",
      description: "整合健康监测、康复训练、服务管理等多维度数据，为养老决策提供科学依据。",
      date: "2024-01-20",
      type: "平台建设",
      impact: "接入30+养老机构，服务5000+老年人",
    },
    {
      id: 8,
      title: "中新养老服务质量评估体系通过专家论证",
      description: "建立科学、系统的养老服务质量评估指标体系，推动养老服务标准化、规范化发展。",
      date: "2024-01-16",
      type: "标准制定",
      impact: "将在全国范围内推广应用",
    },
    {
      id: 9,
      title: "平台科研团队在国际顶级期刊发表智慧养老研究论文",
      description: "关于AI辅助老年认知障碍早期诊断的研究成果在《Nature Aging》发表，引起国际关注。",
      date: "2024-01-12",
      type: "学术成果",
      impact: "被引用次数已超过50次",
    },
    {
      id: 10,
      title: "智能药物管理系统获得医疗器械注册证",
      description: "自主研发的智能药物管理系统通过国家药监局审批，可实现用药提醒、剂量控制等功能。",
      date: "2024-01-08",
      type: "产品认证",
      impact: "预计年内推广至100家养老机构",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4">Platform Updates</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">新中交流</h1>
              <p className="text-lg text-muted-foreground">了解新中智慧健康养老平台的最新动态、政策解读与成果发布</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="news" className="w-full">
              <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
                <TabsTrigger value="news">平台新闻</TabsTrigger>
                <TabsTrigger value="policies">政策法规</TabsTrigger>
                <TabsTrigger value="achievements">成果发布</TabsTrigger>
              </TabsList>

              {/* News Tab */}
              <TabsContent value="news" className="space-y-8">
                {/* Featured News */}
                {newsItems
                  .filter((item) => item.featured)
                  .map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative h-64 md:h-auto">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 flex flex-col justify-center">
                          <Badge className="w-fit mb-3">{item.category}</Badge>
                          <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                          <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{item.date}</span>
                            </div>
                          </div>
                          <Link href={`/news/${item.id}`}>
                            <Button>
                              阅读全文 <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  ))}

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsItems
                    .filter((item) => !item.featured)
                    .map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="relative h-48">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <Badge className="mb-3">{item.category}</Badge>
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{item.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>{item.date}</span>
                            </div>
                            <Link href={`/news/${item.id}`}>
                              <Button variant="ghost" size="sm">
                                查看详情
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              {/* Policies Tab */}
              <TabsContent value="policies" className="space-y-4">
                {policies.map((policy) => (
                  <Card key={policy.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{policy.level}</Badge>
                          <span className="text-sm text-muted-foreground">{policy.source}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{policy.title}</h3>
                        <p className="text-muted-foreground mb-3">{policy.summary}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{policy.date}</span>
                          </div>
                          <Link href={`/news/policies/${policy.id}`}>
                            <Button variant="ghost" size="sm">
                              查看详情 <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Achievements Tab */}
              <TabsContent value="achievements" className="space-y-4">
                {achievements.map((achievement) => (
                  <Card key={achievement.id} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 flex-shrink-0">
                        <Award className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{achievement.type}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{achievement.date}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                        <p className="text-muted-foreground mb-3">{achievement.description}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          <span className="text-primary font-medium">{achievement.impact}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
