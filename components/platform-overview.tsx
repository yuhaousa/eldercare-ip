import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Building2, Cpu, Target } from "lucide-react"

export function PlatformOverview() {
  return (
    <section id="platform" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">平台愿景与目标</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">构建融合教育、科研与实践的智慧养老创新平台</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-12">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>高校合作</CardTitle>
              </div>
              <CardDescription>医学院 / 护理学院 / 生理健康系</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                与顶尖医学院校深度合作，培养专业的老年健康管理人才，推动学术研究与临床实践的有机结合。
              </p>
            </CardContent>
          </Card>

          <Card className="border-accent/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Building2 className="h-5 w-5 text-accent" />
                </div>
                <CardTitle>养老机构</CardTitle>
              </div>
              <CardDescription>合作实践基地（康复中心、护理院）</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                建立实践基地网络，提供真实的养老服务场景，让学生在实践中学习，在服务中成长。
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-2/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/10">
                  <Cpu className="h-5 w-5 text-chart-2" />
                </div>
                <CardTitle>科技企业</CardTitle>
              </div>
              <CardDescription>AI健康监测、可穿戴设备、数据平台</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                引入前沿科技力量，提供AI健康监测、可穿戴设备等技术支持，推动智慧养老创新发展。
              </p>
            </CardContent>
          </Card>

          <Card className="border-chart-3/20">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/10">
                  <Target className="h-5 w-5 text-chart-3" />
                </div>
                <CardTitle>核心目标</CardTitle>
              </div>
              <CardDescription>四大核心发展方向</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>建立校企院联合培养机制</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>构建AI赋能的老年健康学习系统</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>推动智慧康复与数据研究项目落地</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>打造健康老龄化的创新示范基地</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
