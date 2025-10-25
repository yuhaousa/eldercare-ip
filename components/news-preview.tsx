"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export function NewsPreview() {
  const latestNews = [
    {
      id: 1,
      title: "新中智慧健康养老平台正式启动",
      excerpt: "平台整合高校、养老机构、科技企业三方资源，构建智慧健康与养老融合生态系统。",
      category: "平台新闻",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "AI健康监测系统成功部署",
      excerpt: "基于人工智能的健康监测系统在多家养老机构成功部署，实现24小时实时健康数据监测。",
      category: "技术创新",
      date: "2024-01-10",
    },
    {
      id: 3,
      title: "智能康复训练系统获国家科技进步奖",
      excerpt: "基于AI的智能康复训练系统，实现个性化康复方案定制，康复效果提升40%。",
      category: "成果发布",
      date: "2024-01-08",
    },
  ]

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">新中交流</h2>
            <p className="text-muted-foreground">了解最新的平台新闻、政策与成果</p>
          </div>
          <Link href="/news">
            <Button variant="outline">
              查看全部 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {latestNews.map((news) => (
            <Card key={news.id} className="p-6 hover:shadow-lg transition-shadow">
              <Badge className="mb-3">{news.category}</Badge>
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">{news.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{news.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{news.date}</span>
                </div>
                <Link href={`/news/${news.id}`}>
                  <Button variant="ghost" size="sm">
                    阅读更多
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
