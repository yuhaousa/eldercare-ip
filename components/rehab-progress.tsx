"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

const strengthData = [
  { week: "第1周", upper: 60, lower: 55, core: 50 },
  { week: "第2周", upper: 65, lower: 60, core: 55 },
  { week: "第3周", upper: 70, lower: 65, core: 60 },
  { week: "第4周", upper: 75, lower: 70, core: 65 },
  { week: "第5周", upper: 78, lower: 73, core: 68 },
  { week: "第6周", upper: 82, lower: 78, core: 72 },
]

const abilityData = [
  { ability: "力量", current: 78, target: 90 },
  { ability: "平衡", current: 72, target: 85 },
  { ability: "灵活性", current: 68, target: 80 },
  { ability: "耐力", current: 75, target: 88 },
  { ability: "协调性", current: 70, target: 82 },
]

export function RehabProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>康复进度分析</CardTitle>
        <CardDescription>查看您的康复训练效果与能力提升</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="strength" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="strength">力量趋势</TabsTrigger>
            <TabsTrigger value="ability">能力评估</TabsTrigger>
          </TabsList>
          <TabsContent value="strength" className="mt-6">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={strengthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[40, 90]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="upper"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  name="上肢力量"
                  dot={{ fill: "hsl(var(--primary))" }}
                />
                <Line
                  type="monotone"
                  dataKey="lower"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  name="下肢力量"
                  dot={{ fill: "hsl(var(--accent))" }}
                />
                <Line
                  type="monotone"
                  dataKey="core"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  name="核心力量"
                  dot={{ fill: "hsl(var(--chart-2))" }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">上肢力量</p>
                <p className="text-2xl font-bold text-foreground">82</p>
                <p className="text-xs text-green-600 mt-1">+22 提升</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">下肢力量</p>
                <p className="text-2xl font-bold text-foreground">78</p>
                <p className="text-xs text-green-600 mt-1">+23 提升</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">核心力量</p>
                <p className="text-2xl font-bold text-foreground">72</p>
                <p className="text-xs text-green-600 mt-1">+22 提升</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="ability" className="mt-6">
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={abilityData}>
                <PolarGrid stroke="hsl(var(--border))" />
                <PolarAngleAxis dataKey="ability" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[0, 100]} />
                <Radar
                  name="当前水平"
                  dataKey="current"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="目标水平"
                  dataKey="target"
                  stroke="hsl(var(--chart-3))"
                  fill="hsl(var(--chart-3))"
                  fillOpacity={0.1}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">综合能力</p>
                <p className="text-2xl font-bold text-foreground">72.6</p>
                <p className="text-xs text-muted-foreground mt-1">满分100</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">目标达成</p>
                <p className="text-2xl font-bold text-foreground">85%</p>
                <p className="text-xs text-green-600 mt-1">持续进步中</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
