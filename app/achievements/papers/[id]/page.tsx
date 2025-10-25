import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, ExternalLink, Calendar, Users } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

const papers = [
  {
    id: "fall-detection-dl",
    title: "基于深度学习的老年人跌倒检测系统研究",
    authors: "张伟, 李明, 王芳",
    journal: "中国生物医学工程学报",
    year: "2024",
    category: "SCI",
    abstract:
      "本研究提出了一种基于深度学习的老年人跌倒检测系统。系统采用卷积神经网络(CNN)和长短期记忆网络(LSTM)相结合的方法，通过分析可穿戴传感器采集的加速度和陀螺仪数据，实现对老年人跌倒行为的实时检测。实验结果表明，该系统在真实场景下的检测准确率达到96.5%，误报率低于2%，能够有效提高老年人居家安全保障水平。",
    keywords: ["深度学习", "跌倒检测", "可穿戴设备", "老年人安全", "卷积神经网络"],
    doi: "10.3969/j.issn.0258-8021.2024.01.001",
    citations: 23,
    downloads: 456,
  },
  {
    id: "wearable-chronic-disease",
    title: "智能可穿戴设备在慢性病管理中的应用研究",
    authors: "陈华, 刘洋, 赵敏",
    journal: "医疗卫生装备",
    year: "2024",
    category: "核心期刊",
    abstract:
      "慢性病是影响老年人健康的主要因素。本研究探讨了智能可穿戴设备在慢性病管理中的应用价值，通过对200名慢性病患者进行为期6个月的跟踪研究，评估了可穿戴设备在血压、血糖、心率等生理指标监测中的准确性和实用性。研究发现，使用智能可穿戴设备的患者在疾病控制、用药依从性和生活质量方面均有显著改善。",
    keywords: ["可穿戴设备", "慢性病管理", "健康监测", "远程医疗", "老年健康"],
    doi: "10.3969/j.issn.1003-8868.2024.02.003",
    citations: 18,
    downloads: 342,
  },
  {
    id: "ai-rehabilitation",
    title: "AI辅助康复训练系统的设计与实现",
    authors: "孙强, 周杰, 吴静",
    journal: "计算机应用研究",
    year: "2023",
    category: "核心期刊",
    abstract:
      "针对传统康复训练缺乏个性化指导和实时反馈的问题，本文设计并实现了一套AI辅助康复训练系统。系统利用计算机视觉技术实时捕捉患者的运动姿态，通过深度学习算法分析动作的准确性和完成度，并提供个性化的训练建议。临床试验表明，使用该系统的患者康复效果提升30%以上，训练依从性显著提高。",
    keywords: ["人工智能", "康复训练", "计算机视觉", "姿态识别", "个性化医疗"],
    doi: "10.3969/j.issn.1001-3695.2023.08.015",
    citations: 31,
    downloads: 589,
  },
  {
    id: "smart-management-platform",
    title: "养老机构智慧管理平台的构建与应用",
    authors: "马丽, 郑涛, 黄磊",
    journal: "中国卫生信息管理杂志",
    year: "2023",
    category: "核心期刊",
    abstract:
      "随着人口老龄化加剧，养老机构面临着管理效率低、服务质量参差不齐等挑战。本研究构建了一个集成化的智慧管理平台，涵盖入住管理、健康监测、护理记录、安全预警等功能模块。平台在3家养老机构试点应用后，管理效率提升40%，护理质量评分提高25%，老年人及家属满意度显著提升。",
    keywords: ["智慧养老", "管理平台", "养老机构", "信息化", "服务质量"],
    doi: "10.3969/j.issn.1671-5659.2023.05.012",
    citations: 15,
    downloads: 278,
  },
  {
    id: "mental-health-assessment",
    title: "老年人心理健康评估模型研究",
    authors: "林芳, 徐明, 钱伟",
    journal: "心理学报",
    year: "2023",
    category: "CSSCI",
    abstract:
      "老年人心理健康问题日益受到关注。本研究基于大样本调查数据，构建了老年人心理健康多维评估模型，包括认知功能、情绪状态、社会支持、生活满意度等维度。通过机器学习方法识别心理健康风险因素，为早期干预提供科学依据。模型在验证集上的预测准确率达到88.7%，具有良好的临床应用价值。",
    keywords: ["老年心理健康", "评估模型", "机器学习", "风险预测", "早期干预"],
    doi: "10.3724/SP.J.1041.2023.00567",
    citations: 27,
    downloads: 412,
  },
]

export default function PaperDetailPage({ params }: { params: { id: string } }) {
  const paper = papers.find((p) => p.id === params.id)

  if (!paper) {
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
          <span className="text-foreground">论文详情</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-3">
                    {paper.category}
                  </Badge>
                  <h1 className="text-3xl font-bold text-foreground mb-4">{paper.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{paper.authors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{paper.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">摘要</h2>
                  <p className="text-muted-foreground leading-relaxed">{paper.abstract}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">关键词</h2>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((keyword, index) => (
                      <Badge key={index} variant="outline">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">期刊信息</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      <span className="font-medium text-foreground">期刊名称：</span>
                      {paper.journal}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">发表年份：</span>
                      {paper.year}
                    </p>
                    <p>
                      <span className="font-medium text-foreground">DOI：</span>
                      {paper.doi}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    下载全文
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    查看原文
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">论文统计</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-primary">{paper.citations}</div>
                  <div className="text-sm text-muted-foreground">被引用次数</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{paper.downloads}</div>
                  <div className="text-sm text-muted-foreground">下载次数</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">作者信息</h3>
              <div className="space-y-3">
                {paper.authors.split(", ").map((author, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">{author[0]}</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{author}</div>
                      <div className="text-xs text-muted-foreground">研究员</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">相关论文</h3>
              <div className="space-y-3">
                {papers
                  .filter((p) => p.id !== paper.id)
                  .slice(0, 3)
                  .map((relatedPaper) => (
                    <Link key={relatedPaper.id} href={`/achievements/papers/${relatedPaper.id}`}>
                      <div className="text-sm hover:text-primary transition-colors">
                        <div className="font-medium line-clamp-2 mb-1">{relatedPaper.title}</div>
                        <div className="text-xs text-muted-foreground">{relatedPaper.year}</div>
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
