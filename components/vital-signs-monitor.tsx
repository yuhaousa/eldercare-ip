"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

const heartRateData = [
  { time: "00:00", value: 68 },
  { time: "04:00", value: 65 },
  { time: "08:00", value: 72 },
  { time: "12:00", value: 75 },
  { time: "16:00", value: 73 },
  { time: "20:00", value: 70 },
  { time: "24:00", value: 68 },
]

const bloodPressureData = [
  { time: "00:00", systolic: 118, diastolic: 78 },
  { time: "04:00", systolic: 115, diastolic: 76 },
  { time: "08:00", systolic: 122, diastolic: 82 },
  { time: "12:00", systolic: 125, diastolic: 84 },
  { time: "16:00", systolic: 120, diastolic: 80 },
  { time: "20:00", systolic: 118, diastolic: 79 },
  { time: "24:00", systolic: 116, diastolic: 77 },
]

const oxygenData = [
  { time: "00:00", value: 97 },
  { time: "04:00", value: 96 },
  { time: "08:00", value: 98 },
  { time: "12:00", value: 98 },
  { time: "16:00", value: 97 },
  { time: "20:00", value: 98 },
  { time: "24:00", value: 98 },
]

export function VitalSignsMonitor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>生命体征监测</CardTitle>
        <CardDescription>24小时实时数据追踪</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="heart-rate" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="heart-rate">心率</TabsTrigger>
            <TabsTrigger value="blood-pressure">血压</TabsTrigger>
            <TabsTrigger value="oxygen">血氧</TabsTrigger>
          </TabsList>
          <TabsContent value="heart-rate" className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={heartRateData}>
                <defs>
                  <linearGradient id="heartRateGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[60, 80]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fill="url(#heartRateGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div>
                <span className="text-muted-foreground">平均值：</span>
                <span className="font-medium ml-1">70 bpm</span>
              </div>
              <div>
                <span className="text-muted-foreground">范围：</span>
                <span className="font-medium ml-1">65-75 bpm</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="blood-pressure" className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bloodPressureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[70, 130]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="systolic"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  name="收缩压"
                  dot={{ fill: "hsl(var(--accent))" }}
                />
                <Line
                  type="monotone"
                  dataKey="diastolic"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  name="舒张压"
                  dot={{ fill: "hsl(var(--chart-2))" }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-accent"></div>
                  <span className="text-muted-foreground">收缩压</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-chart-2"></div>
                  <span className="text-muted-foreground">舒张压</span>
                </div>
              </div>
              <div>
                <span className="text-muted-foreground">平均：</span>
                <span className="font-medium ml-1">120/80 mmHg</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="oxygen" className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={oxygenData}>
                <defs>
                  <linearGradient id="oxygenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[94, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--chart-2))"
                  strokeWidth={2}
                  fill="url(#oxygenGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div>
                <span className="text-muted-foreground">平均值：</span>
                <span className="font-medium ml-1">97.4%</span>
              </div>
              <div>
                <span className="text-muted-foreground">范围：</span>
                <span className="font-medium ml-1">96-98%</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
