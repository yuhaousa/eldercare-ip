import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 z-0">
        <img
          src="/smart-elderly-care-university-collaboration-ai-health.jpg"
          alt="智慧健康养老融合生态背景"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85"></div>
        <div className="absolute inset-0 bg-primary/5"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            融合教育、科研与实践的创新平台
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
            构建智慧健康与养老
            <span className="text-primary">融合生态</span>
          </h1>

          <p className="mb-10 text-lg text-muted-foreground sm:text-xl text-pretty leading-relaxed">
            促进高校老年人生理健康专业与养老机构协同育人与科研， 打造AI赋能的健康老龄化创新示范基地
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              开始探索
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              了解更多
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
