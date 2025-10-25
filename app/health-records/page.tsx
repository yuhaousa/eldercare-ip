import { HealthRecordsList } from "@/components/health-records-list"
import { HealthRecordsFilters } from "@/components/health-records-filters"
import { Button } from "@/components/ui/button"
import { Plus, FileText, Activity, Stethoscope, TestTube } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HealthRecordsPage() {
  return (
    <main className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">健康档案</h1>
            <p className="mt-2 text-muted-foreground">查看和管理完整的健康记录与检查报告</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            添加记录
          </Button>
        </div>

        <Tabs defaultValue="records" className="mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="records">健康记录</TabsTrigger>
            <TabsTrigger value="reports">检查报告</TabsTrigger>
          </TabsList>

          <TabsContent value="records" className="mt-6">
            <HealthRecordsFilters />
            <HealthRecordsList />
          </TabsContent>

          <TabsContent value="reports" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                        <TestTube className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">血液常规检查</CardTitle>
                        <CardDescription>2024-01-15</CardDescription>
                      </div>
                    </div>
                    <Badge>正常</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">白细胞计数</span>
                      <span className="font-medium">6.5 × 10⁹/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">红细胞计数</span>
                      <span className="font-medium">4.8 × 10¹²/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">血红蛋白</span>
                      <span className="font-medium">145 g/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">血小板计数</span>
                      <span className="font-medium">220 × 10⁹/L</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    查看完整报告
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                        <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">心电图检查</CardTitle>
                        <CardDescription>2024-01-10</CardDescription>
                      </div>
                    </div>
                    <Badge>正常</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">心率</span>
                      <span className="font-medium">72 次/分</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">心律</span>
                      <span className="font-medium">窦性心律</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">PR间期</span>
                      <span className="font-medium">160 ms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">QRS时限</span>
                      <span className="font-medium">90 ms</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    查看完整报告
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                        <Stethoscope className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">胸部X光检查</CardTitle>
                        <CardDescription>2024-01-08</CardDescription>
                      </div>
                    </div>
                    <Badge>正常</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">肺部</span>
                      <span className="font-medium">未见异常</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">心影</span>
                      <span className="font-medium">大小正常</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">膈肌</span>
                      <span className="font-medium">位置正常</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">骨骼</span>
                      <span className="font-medium">未见骨折</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    查看完整报告
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                        <TestTube className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">肝功能检查</CardTitle>
                        <CardDescription>2024-01-05</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary">轻度异常</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">谷丙转氨酶</span>
                      <span className="font-medium text-orange-600">45 U/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">谷草转氨酶</span>
                      <span className="font-medium">32 U/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">总胆红素</span>
                      <span className="font-medium">15 μmol/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">白蛋白</span>
                      <span className="font-medium">42 g/L</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    查看完整报告
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900">
                        <TestTube className="h-5 w-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">血糖检测</CardTitle>
                        <CardDescription>2024-01-03</CardDescription>
                      </div>
                    </div>
                    <Badge>正常</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">空腹血糖</span>
                      <span className="font-medium">5.2 mmol/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">餐后2小时血糖</span>
                      <span className="font-medium">6.8 mmol/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">糖化血红蛋白</span>
                      <span className="font-medium">5.4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">胰岛素</span>
                      <span className="font-medium">12 μU/mL</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    查看完整报告
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900">
                        <TestTube className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">肾功能检查</CardTitle>
                        <CardDescription>2024-01-01</CardDescription>
                      </div>
                    </div>
                    <Badge>正常</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">肌酐</span>
                      <span className="font-medium">85 μmol/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">尿素氮</span>
                      <span className="font-medium">5.2 mmol/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">尿酸</span>
                      <span className="font-medium">320 μmol/L</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">肾小球滤过率</span>
                      <span className="font-medium">95 mL/min</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <FileText className="h-4 w-4 mr-2" />
                    查看完整报告
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
