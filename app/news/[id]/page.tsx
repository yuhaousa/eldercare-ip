"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar, User, Tag, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { use } from "react"

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  // Mock data - in real app, fetch based on id
  const newsDetail = {
    id: 1,
    title: "新中智慧健康养老平台正式启动，开启校企院三方合作新模式",
    category: "平台新闻",
    date: "2024-01-15",
    author: "平台编辑部",
    image: "/smart-elderly-care-platform-launch-ceremony.jpg",
    content: `
      <p>2024年1月15日，新中智慧健康养老平台在新加坡-中国智慧养老创新中心正式启动。该平台由多所高校医学院、护理学院，多家养老机构以及领先科技企业共同打造，旨在构建智慧健康与养老融合生态系统。</p>
      
      <h2>三方协同，创新合作模式</h2>
      <p>平台创新性地整合了高校、养老机构、科技企业三方资源，形成了"教育培训-科研创新-实践应用"的完整闭环。高校负责课程体系设计和人才培养，养老机构提供实践场景和需求反馈，科技企业提供技术支持和产品研发。</p>
      
      <h2>AI赋能，打造智慧养老新生态</h2>
      <p>平台充分运用人工智能、物联网、大数据等前沿技术，开发了一系列智慧养老产品和服务。包括AI健康监测系统、智能康复训练设备、远程医疗平台等，为老年人提供全方位的健康管理和养老服务。</p>
      
      <h2>国际视野，对接新加坡先进经验</h2>
      <p>平台与新加坡多家养老机构和研究机构建立了长期合作关系，引进新加坡先进的养老理念、管理模式和技术标准，推动中新养老服务标准对接，提升国内养老服务水平。</p>
      
      <h2>未来展望</h2>
      <p>平台计划在未来三年内，培养1000名智慧养老专业人才，服务10000名老年人，研发20款智能养老产品，建立50家示范养老机构，为健康老龄化事业贡献力量。</p>
    `,
    tags: ["平台启动", "三方合作", "智慧养老", "AI赋能"],
    relatedNews: [
      {
        id: 2,
        title: "AI健康监测系统成功部署，服务超过500位老年人",
        date: "2024-01-10",
      },
      {
        id: 3,
        title: "首批智慧养老专业学生完成实践培训，就业率达95%",
        date: "2024-01-05",
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/news">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回动态列表
              </Button>
            </Link>

            {/* Article Header */}
            <div className="mb-8">
              <Badge className="mb-4">{newsDetail.category}</Badge>
              <h1 className="text-4xl font-bold mb-4">{newsDetail.title}</h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{newsDetail.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{newsDetail.author}</span>
                </div>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  分享
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={newsDetail.image || "/placeholder.svg"}
                alt={newsDetail.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: newsDetail.content }} />

            {/* Tags */}
            <div className="flex items-center gap-2 mb-8">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-wrap gap-2">
                {newsDetail.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="my-8" />

            {/* Related News */}
            <div>
              <h2 className="text-2xl font-bold mb-4">相关动态</h2>
              <div className="space-y-4">
                {newsDetail.relatedNews.map((news) => (
                  <Card key={news.id} className="p-4 hover:shadow-lg transition-shadow">
                    <Link href={`/news/${news.id}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold mb-1">{news.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>{news.date}</span>
                          </div>
                        </div>
                        <ArrowLeft className="h-5 w-5 rotate-180 text-muted-foreground" />
                      </div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
