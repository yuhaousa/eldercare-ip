import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, GraduationCap, Lightbulb } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-healthcare-collaboration-handshake-partners.jpg" alt="合作背景" className="w-full h-full object-cover" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-accent/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            携手共建智慧养老新生态
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/90">
            我们诚邀高校、养老机构、科技企业加入平台，共同推动健康老龄化创新发展。
            通过产学研深度融合，打造具有国际影响力的智慧养老示范基地。
          </p>

          {/* Partner Types */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-3 rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <GraduationCap className="h-10 w-10 text-white" />
              <h3 className="text-lg font-semibold text-white">高校合作</h3>
              <p className="text-sm text-white/80 text-center">课程共建、师资培养、学生实践</p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <Building2 className="h-10 w-10 text-white" />
              <h3 className="text-lg font-semibold text-white">养老机构</h3>
              <p className="text-sm text-white/80 text-center">智能化升级、人才输送、标准制定</p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <Lightbulb className="h-10 w-10 text-white" />
              <h3 className="text-lg font-semibold text-white">科技企业</h3>
              <p className="text-sm text-white/80 text-center">技术研发、产品应用、市场推广</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="group">
              申请合作
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              了解更多
            </Button>
          </div>

          {/* Contact Info */}
          <p className="mt-8 text-sm text-white/70">联系我们：cooperation@health-elderly.edu.cn | +86 10 1234 5678</p>
        </div>
      </div>
    </section>
  )
}
