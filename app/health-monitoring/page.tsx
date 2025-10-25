import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HealthOverview } from "@/components/health-overview"
import { VitalSignsMonitor } from "@/components/vital-signs-monitor"
import { HealthTrends } from "@/components/health-trends"
import { HealthAlerts } from "@/components/health-alerts"
import { DeviceStatus } from "@/components/device-status"

export default function HealthMonitoringPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 sm:py-16 bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">我的健康</h1>
            <p className="mt-2 text-muted-foreground">实时监测健康数据，智能分析健康趋势</p>
          </div>

          <HealthOverview />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
            <div className="lg:col-span-2">
              <VitalSignsMonitor />
            </div>
            <div className="lg:col-span-1">
              <HealthAlerts />
            </div>
          </div>
          <HealthTrends />
          <DeviceStatus />
        </div>
      </main>
      <Footer />
    </div>
  )
}
