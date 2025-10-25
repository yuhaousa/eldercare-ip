import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Download, ExternalLink, Calendar, Users } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"

const patents = [
  {
    id: "iot-health-monitoring",
    title: "一种基于物联网的老年人健康监测系统",
    inventors: "张伟, 李明, 王芳",
    number: "ZL202310123456.7",
    year: "2024",
    type: "发明专利",
    abstract:
      "本发明公开了一种基于物联网的老年人健康监测系统，包括可穿戴传感器模块、数据采集模块、云端分析模块和移动终端模块。系统能够实时监测老年人的心率、血压、血氧、体温等生理指标，通过物联网技术将数据上传至云端进行智能分析，当检测到异常情况时自动向家属和医护人员发送预警信息。本发明具有监测准确、响应及时、操作简便等优点。",
    applicant: "中新智慧健康科技有限公司",
    applicationDate: "2023-03-15",
    authorizationDate: "2024-01-20",
    legalStatus: "有效",
    claims: 12,
  },
  {
    id: "smart-rehabilitation-device",
    title: "智能康复训练辅助装置",
    inventors: "陈华, 刘洋",
    number: "ZL202310234567.8",
    year: "2024",
    type: "实用新型",
    abstract:
      "本实用新型涉及一种智能康复训练辅助装置，包括支撑框架、运动传感器、力反馈装置和控制系统。装置能够根据患者的康复进度自动调整训练强度，通过力反馈技术提供实时指导，帮助患者完成标准化的康复动作。装置结构简单、使用方便，适用于医院康复科和养老机构使用。",
    applicant: "中新智慧健康科技有限公司",
    applicationDate: "2023-05-20",
    authorizationDate: "2024-02-15",
    legalStatus: "有效",
    claims: 8,
  },
  {
    id: "fall-warning-system",
    title: "老年人跌倒预警系统及方法",
    inventors: "孙强, 周杰",
    number: "ZL202310345678.9",
    year: "2023",
    type: "发明专利",
    abstract:
      "本发明提供了一种老年人跌倒预警系统及方法，通过在老年人居住环境中部署多个传感器节点，实时采集老年人的位置、姿态和运动状态信息。系统采用机器学习算法分析老年人的行为模式，识别跌倒风险因素，在跌倒发生前发出预警提示。当检测到跌倒事件时，系统自动触发报警并通知紧急联系人。本发明能够有效降低老年人跌倒风险，提高居家安全水平。",
    applicant: "中新智慧健康科技有限公司",
    applicationDate: "2023-07-10",
    authorizationDate: "2023-12-05",
    legalStatus: "有效",
    claims: 15,
  },
  {
    id: "wearable-monitoring-device",
    title: "可穿戴式生理参数监测设备",
    inventors: "马丽, 郑涛",
    number: "ZL202310456789.0",
    year: "2023",
    type: "实用新型",
    abstract:
      "本实用新型公开了一种可穿戴式生理参数监测设备，包括传感器模块、数据处理模块、显示模块和通信模块。设备采用轻量化设计，佩戴舒适，能够连续监测心率、血氧饱和度、睡眠质量等多项生理参数。设备具有低功耗、高精度、长续航等特点，适合老年人日常佩戴使用。",
    applicant: "中新智慧健康科技有限公司",
    applicationDate: "2023-09-05",
    authorizationDate: "2023-11-28",
    legalStatus: "有效",
    claims: 10,
  },
]

export default function PatentDetailPage({ params }: { params: { id: string } }) {
  const patent = patents.find((p) => p.id === params.id)

  if (!patent) {
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
          <span className="text-foreground">专利详情</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-3">
                    {patent.type}
                  </Badge>
                  <h1 className="text-3xl font-bold text-foreground mb-4">{patent.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{patent.inventors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{patent.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">摘要</h2>
                  <p className="text-muted-foreground leading-relaxed">{patent.abstract}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">专利信息</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">专利号</div>
                      <div className="font-medium text-foreground">{patent.number}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">专利类型</div>
                      <div className="font-medium text-foreground">{patent.type}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">申请人</div>
                      <div className="font-medium text-foreground">{patent.applicant}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">法律状态</div>
                      <Badge variant="default">{patent.legalStatus}</Badge>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">申请日期</div>
                      <div className="font-medium text-foreground">{patent.applicationDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">授权日期</div>
                      <div className="font-medium text-foreground">{patent.authorizationDate}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">发明人</h2>
                  <div className="flex flex-wrap gap-2">
                    {patent.inventors.split(", ").map((inventor, index) => (
                      <Badge key={index} variant="outline">
                        {inventor}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button>
                    <Download className="h-4 w-4 mr-2" />
                    下载专利文件
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    查看专利详情
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">专利统计</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-primary">{patent.claims}</div>
                  <div className="text-sm text-muted-foreground">权利要求数</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{patent.year}</div>
                  <div className="text-sm text-muted-foreground">授权年份</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">发明人信息</h3>
              <div className="space-y-3">
                {patent.inventors.split(", ").map((inventor, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary">{inventor[0]}</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{inventor}</div>
                      <div className="text-xs text-muted-foreground">发明人</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">相关专利</h3>
              <div className="space-y-3">
                {patents
                  .filter((p) => p.id !== patent.id)
                  .slice(0, 3)
                  .map((relatedPatent) => (
                    <Link key={relatedPatent.id} href={`/achievements/patents/${relatedPatent.id}`}>
                      <div className="text-sm hover:text-primary transition-colors">
                        <div className="font-medium line-clamp-2 mb-1">{relatedPatent.title}</div>
                        <div className="text-xs text-muted-foreground">{relatedPatent.year}</div>
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
