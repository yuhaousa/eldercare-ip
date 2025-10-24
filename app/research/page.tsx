import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResearchOverview } from "@/components/research-overview"
import { ActiveProjects } from "@/components/active-projects"
import { ResearchTeam } from "@/components/research-team"
import { PublicationsList } from "@/components/publications-list"
import { DataAnalytics } from "@/components/data-analytics"

export default function ResearchPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">科研项目管理</h1>
          <p className="text-muted-foreground text-lg">管理研究项目、团队协作、数据分析与学术成果</p>
        </div>

        <ResearchOverview />

        <Tabs defaultValue="projects" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto">
            <TabsTrigger value="projects">活跃项目</TabsTrigger>
            <TabsTrigger value="team">研究团队</TabsTrigger>
            <TabsTrigger value="analytics">数据分析</TabsTrigger>
            <TabsTrigger value="publications">学术成果</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="mt-6">
            <ActiveProjects />
          </TabsContent>

          <TabsContent value="team" className="mt-6">
            <ResearchTeam />
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <DataAnalytics />
          </TabsContent>

          <TabsContent value="publications" className="mt-6">
            <PublicationsList />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
