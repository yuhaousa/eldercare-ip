"use client"

import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export function DataAnalytics() {
  const projectData = [
    { month: "1月", projects: 8, completed: 2 },
    { month: "2月", projects: 9, completed: 3 },
    { month: "3月", projects: 10, completed: 2 },
    { month: "4月", projects: 11, completed: 4 },
    { month: "5月", projects: 12, completed: 3 },
    { month: "6月", projects: 12, completed: 2 },
  ]

  const publicationData = [
    { year: "2020", count: 12 },
    { year: "2021", count: 18 },
    { year: "2022", count: 22 },
    { year: "2023", count: 25 },
    { year: "2024", count: 28 },
  ]

  const categoryData = [
    { name: "智能康复", value: 35, color: "#10b981" },
    { name: "慢病管理", value: 25, color: "#3b82f6" },
    { name: "心理健康", value: 20, color: "#8b5cf6" },
    { name: "机构管理", value: 15, color: "#f59e0b" },
    { name: "其他", value: 5, color: "#6b7280" },
  ]

  const fundingData = [
    { year: "2020", amount: 450 },
    { year: "2021", amount: 580 },
    { year: "2022", amount: 680 },
    { year: "2023", amount: 750 },
    { year: "2024", amount: 850 },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">数据分析</h2>

      <Tabs defaultValue="projects" className="space-y-6">
        <TabsList>
          <TabsTrigger value="projects">项目统计</TabsTrigger>
          <TabsTrigger value="publications">论文发表</TabsTrigger>
          <TabsTrigger value="categories">研究方向</TabsTrigger>
          <TabsTrigger value="funding">经费趋势</TabsTrigger>
        </TabsList>

        <TabsContent value="projects">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">项目进展趋势</h3>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="projects" stroke="#10b981" strokeWidth={2} name="活跃项目" />
                <Line type="monotone" dataKey="completed" stroke="#3b82f6" strokeWidth={2} name="完成项目" />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="publications">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">论文发表数量</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={publicationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="count" fill="#10b981" name="论文数量" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>

        <TabsContent value="categories">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">研究方向分布</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="funding">
          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">研究经费趋势（万元）</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={fundingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="year" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="amount" fill="#3b82f6" name="经费金额" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
