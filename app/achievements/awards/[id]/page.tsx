import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Award, Building2 } from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const awards = [
  {
    id: "smart-elderly-care-demo",
    title: "智慧养老创新应用示范项目",
    recipient: "中新智慧健康与养老融合平台",
    organization: "国家卫生健康委员会",
    year: "2024",
    level: "国家级",
    description:
      "该奖项表彰在智慧养老领域做出突出贡献的创新项目。中新智慧健康与养老融合平台通过整合高校、养老机构和科技企业资源，构建了完整的智慧养老生态系统，在健康监测、康复训练、机构管理等方面实现了重大创新，为推动我国养老事业发展做出了重要贡献。",
    achievements: [
      "建立了校企院三方协同的创新培养模式",
      "开发了多项智慧养老核心技术和产品",
      "在全国10余家养老机构成功应用",
      "培养了200余名专业养老服务人才",
    ],
    impact: "该项目的成功实施为我国智慧养老事业发展提供了可复制、可推广的经验模式，获得了行业内外的广泛认可。",
    awardDate: "2024-06-15",
    certificate: "/award-certificate.png",
  },
  {
    id: "excellent-tech-achievement",
    title: "优秀科技成果奖",
    recipient: "AI辅助康复训练系统",
    organization: "省科学技术厅",
    year: "2024",
    level: "省级",
    description:
      "AI辅助康复训练系统是一项创新性的医疗康复技术成果。系统采用计算机视觉和深度学习技术，能够实时分析患者的康复训练动作，提供个性化的训练方案和实时反馈。该系统已在多家医疗机构和养老院投入使用，显著提高了康复训练的效果和效率。",
    achievements: [
      "开发了基于AI的康复动作识别算法，准确率达95%以上",
      "建立了包含1000+康复动作的标准动作库",
      "系统已服务500+康复患者，康复效果提升30%",
      "获得2项发明专利和3项软件著作权",
    ],
    impact: "该系统的推广应用有效缓解了康复医疗资源不足的问题，为康复医学的智能化发展开辟了新路径。",
    awardDate: "2024-09-20",
    certificate: "/technology-achievement-award.jpg",
  },
  {
    id: "healthcare-innovation",
    title: "医疗健康创新应用奖",
    recipient: "智能健康监测平台",
    organization: "中国医疗器械行业协会",
    year: "2023",
    level: "行业级",
    description:
      "智能健康监测平台是一个集成化的健康管理解决方案，通过物联网技术连接各类健康监测设备，实现对老年人健康状况的全方位、实时监测。平台采用大数据分析技术，能够及时发现健康风险，为医护人员提供决策支持。",
    achievements: [
      "集成了心率、血压、血糖等10余种健康监测功能",
      "建立了老年人健康数据分析模型",
      "平台用户超过5000人，监测数据准确率达98%",
      "实现了健康异常的智能预警，预警准确率达90%",
    ],
    impact: "该平台的应用提高了老年人健康管理的效率和质量，为慢性病防控和健康老龄化提供了有力支持。",
    awardDate: "2023-11-10",
    certificate: "/healthcare-innovation-award.jpg",
  },
  {
    id: "industry-collaboration",
    title: "产学研合作创新成果奖",
    recipient: "校企院联合培养项目",
    organization: "教育部",
    year: "2023",
    level: "国家级",
    description:
      "校企院联合培养项目是一个创新性的人才培养模式，通过高校、企业和养老机构的深度合作，培养具有理论知识和实践能力的复合型养老服务人才。项目建立了完整的课程体系和实践基地，为养老行业输送了大量优秀人才。",
    achievements: [
      "建立了涵盖5大模块的完整课程体系",
      "与30余家养老机构建立了实践合作关系",
      "累计培养学员300余人，就业率达95%",
      "开发了10余门特色课程和教材",
    ],
    impact: "该项目为解决养老服务人才短缺问题提供了有效途径，推动了养老服务行业的专业化发展。",
    awardDate: "2023-12-05",
    certificate: "/education-collaboration-award.jpg",
  },
]

export default function AwardDetailPage({ params }: { params: { id: string } }) {
  const award = awards.find((a) => a.id === params.id)

  if (!award) {
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
          <span className="text-foreground">获奖详情</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-3">
                    {award.level}
                  </Badge>
                  <h1 className="text-3xl font-bold text-foreground mb-4">{award.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <span>{award.recipient}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{award.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">获奖说明</h2>
                  <p className="text-muted-foreground leading-relaxed">{award.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">主要成就</h2>
                  <ul className="space-y-2">
                    {award.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-primary">{index + 1}</span>
                        </div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">社会影响</h2>
                  <p className="text-muted-foreground leading-relaxed">{award.impact}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">获奖信息</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">颁奖机构</div>
                      <div className="font-medium text-foreground">{award.organization}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">获奖级别</div>
                      <Badge variant="default">{award.level}</Badge>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">获奖年份</div>
                      <div className="font-medium text-foreground">{award.year}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">颁奖日期</div>
                      <div className="font-medium text-foreground">{award.awardDate}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-3">获奖证书</h2>
                  <div className="relative aspect-[3/2] rounded-lg overflow-hidden border">
                    <Image src={award.certificate || "/placeholder.svg"} alt="获奖证书" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">获奖单位</h3>
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">{award.recipient}</div>
                  <div className="text-sm text-muted-foreground">获奖主体</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">颁奖机构</h3>
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">{award.organization}</div>
                  <div className="text-sm text-muted-foreground">{award.level}</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">相关获奖</h3>
              <div className="space-y-3">
                {awards
                  .filter((a) => a.id !== award.id)
                  .slice(0, 3)
                  .map((relatedAward) => (
                    <Link key={relatedAward.id} href={`/achievements/awards/${relatedAward.id}`}>
                      <div className="text-sm hover:text-primary transition-colors">
                        <div className="font-medium line-clamp-2 mb-1">{relatedAward.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {relatedAward.year} · {relatedAward.level}
                        </div>
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
