"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const weeklyData = [
  { day: "周一", steps: 6500, sleep: 7.5, water: 1800 },
  { day: "周二", steps: 7200, sleep: 8, water: 2000 },
  { day: "周三", steps: 5800, sleep: 7, water: 1600 },
  { day: "周四", steps: 8100, sleep: 7.5, water: 2200 },
  { day: "周五", steps: 7500, sleep: 8, water: 2000 },
  { day: "周六", steps: 9200, sleep: 8.5, water: 2400 },
  { day: "周日", steps: 8800, sleep: 8, water: 2100 },
]

const monthlyData = [
  { week: "第1周", avgHeartRate: 70, avgBloodPressure: 118 },
  { week: "第2周", avgHeartRate: 72, avgBloodPressure: 120 },
  { week: "第3周", avgHeartRate: 69, avgBloodPressure: 117 },
  { week: "第4周", avgHeartRate: 71, avgBloodPressure: 119 },
]

export function HealthTrends() {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>健康趋势分析</CardTitle>
        <CardDescription>查看您的健康数据变化趋势</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" className="w-full">
          <TabsList>
            <TabsTrigger value="weekly">本周数据</TabsTrigger>
            <TabsTrigger value="monthly">本月趋势</TabsTrigger>
          </TabsList>
          <TabsContent value="weekly" className="mt-6">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="steps" fill="hsl(var(--primary))" name="步数" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">平均步数</p>
                <p className="text-2xl font-bold text-foreground">7,586</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">平均睡眠</p>
                <p className="text-2xl font-bold text-foreground">7.8h</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">平均饮水</p>
                <p className="text-2xl font-bold text-foreground">2,014ml</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="monthly" className="mt-6">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="avgHeartRate" fill="hsl(var(--accent))" name="平均心率" radius={[4, 4, 0, 0]} />
                <Bar dataKey="avgBloodPressure" fill="hsl(var(--chart-2))" name="平均收缩压" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">月平均心率</p>
                <p className="text-2xl font-bold text-foreground">70.5 bpm</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <p className="text-sm text-muted-foreground mb-1">月平均血压</p>
                <p className="text-2xl font-bold text-foreground">118.5 mmHg</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
