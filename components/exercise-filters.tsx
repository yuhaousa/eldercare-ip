"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function ExerciseFilters() {
  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="搜索运动..." className="pl-9" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="难度等级" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">全部难度</SelectItem>
            <SelectItem value="beginner">初级</SelectItem>
            <SelectItem value="intermediate">中级</SelectItem>
            <SelectItem value="advanced">高级</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="训练类型" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">全部类型</SelectItem>
            <SelectItem value="upper">上肢训练</SelectItem>
            <SelectItem value="lower">下肢训练</SelectItem>
            <SelectItem value="core">核心训练</SelectItem>
            <SelectItem value="balance">平衡训练</SelectItem>
            <SelectItem value="flexibility">灵活性训练</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" size="sm">
          全部运动
        </Button>
        <Button variant="ghost" size="sm">
          上肢训练
        </Button>
        <Button variant="ghost" size="sm">
          下肢训练
        </Button>
        <Button variant="ghost" size="sm">
          核心训练
        </Button>
        <Button variant="ghost" size="sm">
          平衡训练
        </Button>
        <Button variant="ghost" size="sm">
          灵活性训练
        </Button>
      </div>
    </div>
  )
}
