"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar } from "lucide-react"

export function HealthRecordsFilters() {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="搜索健康记录..." className="pl-9" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="记录类型" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">全部类型</SelectItem>
            <SelectItem value="checkup">体检报告</SelectItem>
            <SelectItem value="blood">血液检查</SelectItem>
            <SelectItem value="ecg">心电图</SelectItem>
            <SelectItem value="xray">X光检查</SelectItem>
            <SelectItem value="ultrasound">超声检查</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          选择日期
        </Button>
      </div>
    </div>
  )
}
