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
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">平台动态</h1>
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
