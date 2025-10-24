import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HealthRecordsList } from "@/components/health-records-list"
import { HealthRecordsFilters } from "@/components/health-records-filters"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function HealthRecordsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">健康档案</h1>
              <p className="mt-2 text-muted-foreground">查看和管理完整的健康记录</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              添加记录
            </Button>
          </div>

          <HealthRecordsFilters />
          <HealthRecordsList />
        </div>
      </main>
      <Footer />
    </div>
  )
}
