import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Eye } from "lucide-react"

const records = [
  {
    id: 1,
    type: "体检报告",
    date: "2024-01-15",
    hospital: "北京协和医院",
    doctor: "张医生",
    status: "已完成",
  },
  {
    id: 2,
    type: "血液检查",
    date: "2024-01-10",
    hospital: "北京协和医院",
    doctor: "李医生",
    status: "已完成",
  },
  {
    id: 3,
    type: "心电图",
    date: "2024-01-05",
    hospital: "北京协和医院",
    doctor: "王医生",
    status: "已完成",
  },
  {
    id: 4,
    type: "X光检查",
    date: "2023-12-20",
    hospital: "北京协和医院",
    doctor: "刘医生",
    status: "已完成",
  },
  {
    id: 5,
    type: "超声检查",
    date: "2023-12-15",
    hospital: "北京协和医院",
    doctor: "陈医生",
    status: "已完成",
  },
]

export function HealthRecordsList() {
  return (
    <div className="space-y-4">
      {records.map((record) => (
        <Card key={record.id}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-foreground">{record.type}</h3>
                    <Badge variant="secondary">{record.status}</Badge>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>检查日期：{record.date}</p>
                    <p>
                      {record.hospital} · {record.doctor}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  查看
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  下载
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
