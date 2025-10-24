import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink, Download, Plus } from "lucide-react"

export function PublicationsList() {
  const publications = [
    {
      title: "AI-Powered Rehabilitation Systems for Elderly Care: A Systematic Review",
      authors: "张明, 李华, 王强",
      journal: "Journal of Medical Systems",
      year: 2024,
      volume: "48(3)",
      pages: "125-142",
      doi: "10.1007/s10916-024-xxxxx",
      citations: 15,
      type: "SCI",
      impact: 4.8,
    },
    {
      title: "智能可穿戴设备在老年慢病管理中的应用研究",
      authors: "陈静, 刘洋, 张明",
      journal: "中华老年医学杂志",
      year: 2024,
      volume: "43(2)",
      pages: "89-95",
      doi: "10.3760/cma.j.issn.xxxx-xxxx",
      citations: 8,
      type: "CSCD",
      impact: 2.3,
    },
    {
      title: "Psychological Intervention Strategies for Elderly in Long-term Care Facilities",
      authors: "赵敏, 陈静, 李华",
      journal: "Aging & Mental Health",
      year: 2023,
      volume: "27(12)",
      pages: "2341-2350",
      doi: "10.1080/13607863.2023.xxxxx",
      citations: 23,
      type: "SSCI",
      impact: 3.5,
    },
    {
      title: "基于机器学习的老年人跌倒风险预测模型",
      authors: "王强, 刘洋, 张明",
      journal: "中国生物医学工程学报",
      year: 2023,
      volume: "42(5)",
      pages: "567-575",
      doi: "10.3969/j.issn.xxxx-xxxx",
      citations: 12,
      type: "EI",
      impact: 1.8,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">学术成果</h2>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          添加论文
        </Button>
      </div>

      <div className="space-y-4">
        {publications.map((pub, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground pr-4 leading-tight">{pub.title}</h3>
                  <div className="flex gap-2 flex-shrink-0">
                    <Badge variant="secondary">{pub.type}</Badge>
                    <Badge variant="outline">IF: {pub.impact}</Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>

                <p className="text-sm text-muted-foreground mb-3">
                  {pub.journal}, {pub.year}, {pub.volume}: {pub.pages}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      DOI: <span className="text-foreground">{pub.doi}</span>
                    </span>
                    <span className="text-muted-foreground">
                      引用: <span className="font-medium text-foreground">{pub.citations}</span>
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      查看
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      下载
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
