import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, Calendar, Activity, ImageIcon } from "lucide-react"
import Image from "next/image"

export function MedicalReports() {
  const reports = [
    {
      id: 1,
      type: "血常规检查",
      date: "2024-01-15",
      status: "正常",
      doctor: "李医生",
      category: "blood",
      items: [
        { name: "白细胞计数", value: "6.5", unit: "×10⁹/L", range: "4.0-10.0", status: "normal" },
        { name: "红细胞计数", value: "4.8", unit: "×10¹²/L", range: "4.0-5.5", status: "normal" },
        { name: "血红蛋白", value: "145", unit: "g/L", range: "120-160", status: "normal" },
        { name: "血小板计数", value: "220", unit: "×10⁹/L", range: "100-300", status: "normal" },
      ],
    },
    {
      id: 2,
      type: "心电图检查",
      date: "2024-01-10",
      status: "正常",
      doctor: "王医生",
      category: "function",
      items: [
        { name: "心率", value: "72", unit: "次/分", range: "60-100", status: "normal" },
        { name: "PR间期", value: "160", unit: "ms", range: "120-200", status: "normal" },
        { name: "QRS时限", value: "90", unit: "ms", range: "60-100", status: "normal" },
        { name: "QT间期", value: "380", unit: "ms", range: "350-440", status: "normal" },
      ],
    },
    {
      id: 3,
      type: "肝功能检查",
      date: "2024-01-08",
      status: "轻度异常",
      doctor: "张医生",
      category: "blood",
      items: [
        { name: "谷丙转氨酶(ALT)", value: "45", unit: "U/L", range: "0-40", status: "high" },
        { name: "谷草转氨酶(AST)", value: "38", unit: "U/L", range: "0-40", status: "normal" },
        { name: "总胆红素", value: "15", unit: "μmol/L", range: "5-21", status: "normal" },
        { name: "白蛋白", value: "42", unit: "g/L", range: "35-55", status: "normal" },
      ],
    },
    {
      id: 4,
      type: "血糖检查",
      date: "2024-01-05",
      status: "正常",
      doctor: "赵医生",
      category: "blood",
      items: [
        { name: "空腹血糖", value: "5.2", unit: "mmol/L", range: "3.9-6.1", status: "normal" },
        { name: "餐后2小时血糖", value: "7.1", unit: "mmol/L", range: "<7.8", status: "normal" },
        { name: "糖化血红蛋白", value: "5.4", unit: "%", range: "4.0-6.0", status: "normal" },
      ],
    },
    {
      id: 5,
      type: "肾功能检查",
      date: "2024-01-03",
      status: "正常",
      doctor: "刘医生",
      category: "blood",
      items: [
        { name: "肌酐", value: "85", unit: "μmol/L", range: "44-133", status: "normal" },
        { name: "尿素氮", value: "5.5", unit: "mmol/L", range: "2.9-8.2", status: "normal" },
        { name: "尿酸", value: "320", unit: "μmol/L", range: "208-428", status: "normal" },
      ],
    },
    {
      id: 6,
      type: "胸部X光检查",
      date: "2024-01-01",
      status: "正常",
      doctor: "陈医生",
      category: "imaging",
      images: [
        { url: "/chest-xray-frontal.jpg", label: "正位片" },
        { url: "/chest-xray-lateral.jpg", label: "侧位片" },
      ],
      items: [
        { name: "心影", value: "正常大小，形态规则", unit: "", range: "", status: "normal" },
        { name: "肺纹理", value: "清晰，未见异常", unit: "", range: "", status: "normal" },
        { name: "膈肌", value: "光滑，位置正常", unit: "", range: "", status: "normal" },
        { name: "肋骨", value: "未见骨折征象", unit: "", range: "", status: "normal" },
      ],
      conclusion: "双肺未见明显实质性病变，心影大小正常，膈肌光滑。",
    },
    {
      id: 7,
      type: "腹部CT检查",
      date: "2023-12-28",
      status: "正常",
      doctor: "周医生",
      category: "imaging",
      images: [
        { url: "/abdominal-ct-scan.jpg", label: "横断面" },
        { url: "/abdominal-ct-coronal.jpg", label: "冠状面" },
      ],
      items: [
        { name: "肝脏", value: "形态正常，密度均匀", unit: "", range: "", status: "normal" },
        { name: "脾脏", value: "大小正常", unit: "", range: "", status: "normal" },
        { name: "胰腺", value: "未见异常", unit: "", range: "", status: "normal" },
        { name: "肾脏", value: "双肾形态正常", unit: "", range: "", status: "normal" },
      ],
      conclusion: "腹部各脏器未见明显异常。",
    },
    {
      id: 8,
      type: "头颅MRI检查",
      date: "2023-12-20",
      status: "正常",
      doctor: "吴医生",
      category: "imaging",
      images: [
        { url: "/brain-mri-axial.jpg", label: "轴位T1" },
        { url: "/brain-mri-sagittal.jpg", label: "矢状位T2" },
      ],
      items: [
        { name: "脑实质", value: "信号正常", unit: "", range: "", status: "normal" },
        { name: "脑室系统", value: "大小正常", unit: "", range: "", status: "normal" },
        { name: "脑沟脑回", value: "未见异常", unit: "", range: "", status: "normal" },
      ],
      conclusion: "颅脑MRI平扫未见明显异常。",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "正常":
        return "bg-green-500/10 text-green-700 dark:text-green-400"
      case "轻度异常":
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400"
      case "异常":
        return "bg-red-500/10 text-red-700 dark:text-red-400"
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400"
    }
  }

  const getItemStatusColor = (status: string) => {
    switch (status) {
      case "normal":
        return "text-green-600 dark:text-green-400"
      case "high":
        return "text-red-600 dark:text-red-400"
      case "low":
        return "text-yellow-600 dark:text-yellow-400"
      default:
        return "text-foreground"
    }
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              检查报告
            </CardTitle>
            <CardDescription>查看历史体检和检查报告</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            导出全部
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">全部报告</TabsTrigger>
            <TabsTrigger value="blood">血液检查</TabsTrigger>
            <TabsTrigger value="imaging">影像检查</TabsTrigger>
            <TabsTrigger value="function">功能检查</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 mt-4">
            {reports.map((report) => (
              <Card key={report.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{report.type}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {report.date}
                        </span>
                        <span>检查医生: {report.doctor}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {report.images && report.images.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-3">
                        <ImageIcon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">影像资料</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        {report.images.map((image, index) => (
                          <div key={index} className="space-y-2">
                            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted border">
                              <Image
                                src={image.url || "/placeholder.svg"}
                                alt={`${report.type} - ${image.label}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <p className="text-sm text-center text-muted-foreground">{image.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    {report.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className={getItemStatusColor(item.status)}>
                            {item.value} {item.unit}
                          </span>
                          {item.range && <span className="text-muted-foreground">参考范围: {item.range}</span>}
                        </div>
                      </div>
                    ))}
                  </div>

                  {report.conclusion && (
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm">
                        <span className="font-medium">诊断结论：</span>
                        {report.conclusion}
                      </p>
                    </div>
                  )}

                  <div className="mt-4 pt-4 border-t">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      查看完整报告
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="blood" className="space-y-4 mt-4">
            {reports
              .filter((r) => r.category === "blood")
              .map((report) => (
                <Card key={report.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{report.type}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {report.date}
                          </span>
                          <span>检查医生: {report.doctor}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {report.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                          <span className="font-medium">{item.name}</span>
                          <div className="flex items-center gap-4 text-sm">
                            <span className={getItemStatusColor(item.status)}>
                              {item.value} {item.unit}
                            </span>
                            {item.range && <span className="text-muted-foreground">参考: {item.range}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="imaging" className="space-y-4 mt-4">
            {reports
              .filter((r) => r.category === "imaging")
              .map((report) => (
                <Card key={report.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{report.type}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {report.date}
                          </span>
                          <span>检查医生: {report.doctor}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {report.images && report.images.length > 0 && (
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                          <ImageIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">影像资料</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          {report.images.map((image, index) => (
                            <div key={index} className="space-y-2">
                              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted border">
                                <Image
                                  src={image.url || "/placeholder.svg"}
                                  alt={`${report.type} - ${image.label}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <p className="text-sm text-center text-muted-foreground">{image.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      {report.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                          <span className="font-medium">{item.name}</span>
                          <span className={getItemStatusColor(item.status)}>{item.value}</span>
                        </div>
                      ))}
                    </div>

                    {report.conclusion && (
                      <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                        <p className="text-sm">
                          <span className="font-medium">诊断结论：</span>
                          {report.conclusion}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </TabsContent>

          <TabsContent value="function" className="space-y-4 mt-4">
            {reports
              .filter((r) => r.category === "function")
              .map((report) => (
                <Card key={report.id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle className="text-lg">{report.type}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {report.date}
                          </span>
                          <span>检查医生: {report.doctor}</span>
                        </div>
                      </div>
                      <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {report.items.map((item, index) => (
                        <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                          <span className="font-medium">{item.name}</span>
                          <div className="flex items-center gap-4 text-sm">
                            <span className={getItemStatusColor(item.status)}>
                              {item.value} {item.unit}
                            </span>
                            {item.range && <span className="text-muted-foreground">参考: {item.range}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
