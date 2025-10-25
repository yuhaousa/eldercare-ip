import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Package, CheckCircle, Users, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = productsData.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">
            首页
          </Link>
          <span>/</span>
          <Link href="/achievements" className="hover:text-foreground">
            成果展示
          </Link>
          <span>/</span>
          <span className="text-foreground">产品详情</span>
        </div>

        <Button variant="ghost" asChild className="mb-6">
          <Link href="/achievements">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回成果展示
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                  <Badge variant="secondary" className="text-sm">
                    {product.category}
                  </Badge>
                </div>
              </div>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            {/* Product Image */}
            <Card className="overflow-hidden">
              <div className="relative h-96 w-full bg-muted">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
            </Card>

            {/* Product Details */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">产品详情</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p>{product.fullDescription}</p>
              </div>
            </Card>

            {/* Technical Specifications */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">技术规格</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-foreground">{spec.label}</div>
                      <div className="text-sm text-muted-foreground">{spec.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Application Scenarios */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-foreground mb-4">应用场景</h2>
              <div className="space-y-3">
                {product.scenarios.map((scenario, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <p className="text-muted-foreground">{scenario}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Key Features */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">核心功能</h3>
              <div className="space-y-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Product Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">产品信息</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Package className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground">研发单位</div>
                    <div className="text-sm text-muted-foreground">{product.developer}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground">发布时间</div>
                    <div className="text-sm text-muted-foreground">{product.releaseDate}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-foreground">服务用户</div>
                    <div className="text-sm text-muted-foreground">{product.users}</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Related Products */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">相关产品</h3>
              <div className="space-y-3">
                {product.relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/achievements/products/${related.id}`}
                    className="block p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="font-medium text-sm text-foreground mb-1">{related.name}</div>
                    <div className="text-xs text-muted-foreground">{related.category}</div>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

const productsData = [
  {
    id: "smart-watch",
    name: "智能健康手环",
    description: "实时监测心率、血压、血氧等生理指标，支持跌倒检测和SOS紧急呼叫功能",
    fullDescription:
      "智能健康手环是专为老年人设计的可穿戴健康监测设备。采用医疗级传感器，能够24小时不间断监测心率、血压、血氧饱和度等关键生理指标。内置高精度加速度传感器和陀螺仪，可准确识别跌倒事件并自动发送SOS求救信号。设备支持防水设计，续航时间长达7天，配备大字体显示屏，操作简单便捷。所有健康数据实时同步至云端平台，家属和医护人员可通过手机APP远程查看，及时了解老人健康状况。",
    image: "/smart-health-wearable-watch-elderly-care-monitorin.jpg",
    category: "可穿戴设备",
    features: ["心率监测", "跌倒检测", "SOS呼叫", "防水设计", "长续航"],
    specifications: [
      { label: "传感器", value: "医疗级PPG光电传感器" },
      { label: "续航时间", value: "7-10天" },
      { label: "防水等级", value: "IP68" },
      { label: "屏幕尺寸", value: "1.3英寸彩色触摸屏" },
      { label: "连接方式", value: "蓝牙5.0 + 4G" },
      { label: "重量", value: "45克" },
    ],
    scenarios: [
      "居家养老：实时监测老人健康状况，异常情况及时预警",
      "养老机构：批量管理多位老人健康数据，提高护理效率",
      "康复中心：跟踪康复训练效果，调整康复方案",
      "独居老人：提供紧急呼叫功能，保障安全",
    ],
    developer: "工程学院 & 智能科技有限公司",
    releaseDate: "2024年3月",
    users: "已服务1000+老年用户",
    relatedProducts: [
      { id: "sleep-monitor", name: "智能睡眠监测垫", category: "监测设备" },
      { id: "emergency-button", name: "一键呼叫报警器", category: "安全设备" },
    ],
  },
  {
    id: "rehabilitation-robot",
    name: "智能康复训练机器人",
    description: "基于AI的康复训练辅助系统，提供个性化训练方案和实时动作纠正",
    fullDescription:
      "智能康复训练机器人是一款集成了人工智能、计算机视觉和机器人技术的创新康复设备。系统通过3D摄像头实时捕捉用户动作，AI算法分析动作标准度并给出即时反馈。根据用户的康复阶段和身体状况，系统自动生成个性化训练方案，包括关节活动度训练、肌力训练、平衡训练等多种模式。训练过程中，机器人通过语音和屏幕提示指导用户完成动作，并记录训练数据生成康复报告。设备适用于脑卒中、骨折术后、关节置换等多种康复场景。",
    image: "/rehabilitation-robot-elderly-care-training-equipme.jpg",
    category: "康复设备",
    features: ["AI辅助", "动作识别", "个性化方案", "实时反馈", "数据分析"],
    specifications: [
      { label: "识别技术", value: "3D深度视觉 + AI算法" },
      { label: "训练模式", value: "20+种康复训练模式" },
      { label: "适用范围", value: "上肢、下肢、平衡训练" },
      { label: "屏幕", value: "21.5英寸触摸屏" },
      { label: "数据存储", value: "云端存储，支持导出" },
      { label: "语音交互", value: "支持中英文语音指导" },
    ],
    scenarios: [
      "康复中心：提供标准化康复训练，减轻治疗师工作负担",
      "养老机构：帮助老人保持身体机能，预防功能退化",
      "居家康复：在家即可进行专业康复训练，节省往返时间",
      "医院康复科：辅助康复治疗，提高康复效果",
    ],
    developer: "工程学院 & 康复科技公司",
    releaseDate: "2024年1月",
    users: "已部署于15家康复机构",
    relatedProducts: [
      { id: "exercise-bike", name: "智能康复单车", category: "康复设备" },
      { id: "smart-bed", name: "智能护理床", category: "护理设备" },
    ],
  },
  {
    id: "sleep-monitor",
    name: "智能睡眠监测垫",
    description: "非接触式睡眠质量监测，分析睡眠周期、呼吸频率和心率变化",
    fullDescription:
      "智能睡眠监测垫采用先进的压电传感技术，无需穿戴任何设备即可监测睡眠质量。监测垫铺设在床垫下方，通过高灵敏度传感器捕捉微小的身体运动、呼吸和心跳信号。AI算法自动分析睡眠周期，识别深睡、浅睡、REM睡眠等不同阶段，生成详细的睡眠报告。系统可检测睡眠呼吸暂停、心率异常等健康风险，及时发出预警。配套的手机APP提供睡眠改善建议，帮助老年人提高睡眠质量。",
    image: "/smart-sleep-monitoring-mat-elderly-care-health-dev.jpg",
    category: "监测设备",
    features: ["非接触式", "睡眠分析", "异常预警", "呼吸监测", "心率监测"],
    specifications: [
      { label: "传感技术", value: "压电薄膜传感器" },
      { label: "监测指标", value: "睡眠周期、心率、呼吸率" },
      { label: "尺寸", value: "60cm × 90cm" },
      { label: "厚度", value: "3mm超薄设计" },
      { label: "连接方式", value: "Wi-Fi" },
      { label: "数据同步", value: "实时云端同步" },
    ],
    scenarios: [
      "居家养老：监测独居老人睡眠状况，异常情况及时通知家属",
      "养老机构：批量监测住户睡眠质量，优化护理服务",
      "医疗机构：辅助诊断睡眠障碍，评估治疗效果",
      "康复中心：监测康复期患者睡眠，调整康复计划",
    ],
    developer: "医学院 & 健康科技公司",
    releaseDate: "2023年10月",
    users: "已服务800+家庭用户",
    relatedProducts: [
      { id: "smart-watch", name: "智能健康手环", category: "可穿戴设备" },
      { id: "smart-bed", name: "智能护理床", category: "护理设备" },
    ],
  },
  {
    id: "medication-dispenser",
    name: "智能药盒提醒器",
    description: "自动提醒服药时间，记录用药历史，支持远程监护和用药管理",
    fullDescription:
      "智能药盒提醒器是专为老年人设计的用药管理设备。药盒采用7天28格设计，可存放一周的药物。内置定时提醒功能，到服药时间会发出声光提醒，确保老人按时服药。药盒配备智能锁，只有到服药时间才能打开对应格子，防止误服或漏服。每次开盖记录会自动上传至云端，家属可通过手机APP查看老人的服药情况。系统还提供用药提醒推送、药物相互作用提示等功能，全方位保障用药安全。",
    image: "/smart-medication-dispenser-pill-box-elderly-care-r.jpg",
    category: "辅助设备",
    features: ["定时提醒", "用药记录", "远程监护", "智能锁", "声光提醒"],
    specifications: [
      { label: "容量", value: "7天28格（早中晚睡前）" },
      { label: "提醒方式", value: "声音 + LED灯光 + 震动" },
      { label: "电池续航", value: "3个月" },
      { label: "连接方式", value: "Wi-Fi + 蓝牙" },
      { label: "材质", value: "食品级PP材料" },
      { label: "尺寸", value: "20cm × 15cm × 5cm" },
    ],
    scenarios: [
      "慢病管理：帮助高血压、糖尿病等慢病患者规律服药",
      "术后康复：确保术后患者按时按量服用康复药物",
      "独居老人：远程监督老人用药，减少家属担忧",
      "养老机构：批量管理住户用药，提高护理效率",
    ],
    developer: "护理学院 & 医疗器械公司",
    releaseDate: "2023年8月",
    users: "已服务1200+用户",
    relatedProducts: [
      { id: "smart-watch", name: "智能健康手环", category: "可穿戴设备" },
      { id: "voice-assistant", name: "智能语音助手", category: "AI设备" },
    ],
  },
  {
    id: "emergency-button",
    name: "一键呼叫报警器",
    description: "便携式紧急呼叫设备，支持GPS定位和多方通话功能",
    fullDescription:
      "一键呼叫报警器是专为老年人设计的便携式紧急求助设备。设备采用项链或手环佩戴方式，遇到紧急情况时只需按下按钮即可发出求救信号。内置GPS和北斗双模定位系统，可精确定位老人位置。求救信号会同时发送给预设的家属、社区服务中心和120急救中心。设备支持双向通话功能，老人可直接与救援人员沟通。防水防摔设计，适合各种使用场景。电池续航长达30天，低电量自动提醒充电。",
    image: "/emergency-call-button-elderly-care-sos-device-gps.jpg",
    category: "安全设备",
    features: ["GPS定位", "一键呼叫", "防水设计", "双向通话", "长续航"],
    specifications: [
      { label: "定位方式", value: "GPS + 北斗 + LBS" },
      { label: "定位精度", value: "室外5米，室内20米" },
      { label: "通话功能", value: "支持双向通话" },
      { label: "防水等级", value: "IP67" },
      { label: "续航时间", value: "30天待机" },
      { label: "佩戴方式", value: "项链/手环/腰夹" },
    ],
    scenarios: [
      "独居老人：提供24小时紧急求助通道，保障安全",
      "外出活动：老人外出时随身携带，遇险及时求救",
      "慢病患者：突发疾病时快速呼叫救援",
      "养老机构：作为安全保障设施，提高服务质量",
    ],
    developer: "工程学院 & 安全科技公司",
    releaseDate: "2023年6月",
    users: "已服务2000+老年用户",
    relatedProducts: [
      { id: "smart-watch", name: "智能健康手环", category: "可穿戴设备" },
      { id: "smart-cane", name: "智能拐杖", category: "辅助设备" },
    ],
  },
  {
    id: "smart-cane",
    name: "智能拐杖",
    description: "集成LED照明、跌倒检测、GPS定位和SOS呼叫功能的智能辅助行走设备",
    fullDescription:
      "智能拐杖是一款多功能辅助行走设备，在传统拐杖的基础上集成了多项智能功能。拐杖底部配备LED照明灯，夜间行走更安全。内置高精度传感器可检测跌倒事件，一旦检测到跌倒会自动发送SOS信号并定位老人位置。拐杖手柄设有一键呼叫按钮，紧急情况下可快速求救。采用人体工学设计，手柄舒适防滑，高度可调节适应不同身高。拐杖还具有计步、运动量统计等健康管理功能，鼓励老人适度运动。",
    image: "/smart-walking-cane-elderly-care-led-gps-fall-detec.jpg",
    category: "辅助设备",
    features: ["LED照明", "跌倒检测", "GPS定位", "SOS呼叫", "高度可调"],
    specifications: [
      { label: "材质", value: "航空铝合金" },
      { label: "承重", value: "150kg" },
      { label: "高度调节", value: "75-95cm" },
      { label: "照明", value: "LED灯，3档亮度" },
      { label: "续航", value: "60天" },
      { label: "重量", value: "450克" },
    ],
    scenarios: [
      "日常出行：提供照明和安全保障，增强老人出行信心",
      "夜间活动：LED照明确保夜间行走安全",
      "康复训练：辅助行走训练，记录运动数据",
      "户外活动：GPS定位防止走失，SOS功能保障安全",
    ],
    developer: "工程学院 & 康复器械公司",
    releaseDate: "2023年12月",
    users: "已服务600+用户",
    relatedProducts: [
      { id: "emergency-button", name: "一键呼叫报警器", category: "安全设备" },
      { id: "fall-detection-camera", name: "AI跌倒检测摄像头", category: "监测设备" },
    ],
  },
  {
    id: "blood-pressure-monitor",
    name: "智能血压计",
    description: "自动测量血压并上传云端，支持数据分析和异常预警",
    fullDescription:
      "智能血压计采用示波法测量原理，测量准确可靠。设备操作简单，一键启动自动测量，大屏幕显示测量结果，语音播报血压值。每次测量数据自动上传至云端平台，生成血压趋势图，帮助用户了解血压变化规律。系统具有智能分析功能，当检测到血压异常时会发出预警提醒，并推送给家属和医生。支持多用户管理，一台设备可供全家使用。配备专业的健康管理APP，提供用药提醒、健康建议等服务。",
    image: "/smart-blood-pressure-monitor-elderly-care-health-d.jpg",
    category: "监测设备",
    features: ["自动测量", "云端同步", "数据分析", "异常预警", "语音播报"],
    specifications: [
      { label: "测量方式", value: "示波法" },
      { label: "测量范围", value: "0-299mmHg" },
      { label: "精度", value: "±3mmHg" },
      { label: "袖带尺寸", value: "22-42cm" },
      { label: "存储", value: "本地99组 + 云端无限" },
      { label: "连接", value: "蓝牙 + Wi-Fi" },
    ],
    scenarios: [
      "高血压管理：每日监测血压，评估用药效果",
      "居家养老：远程监护老人血压状况，及时发现异常",
      "体检筛查：定期测量血压，早期发现高血压风险",
      "医疗机构：辅助诊断和治疗，提供准确数据支持",
    ],
    developer: "医学院 & 医疗器械公司",
    releaseDate: "2024年2月",
    users: "已服务1500+用户",
    relatedProducts: [
      { id: "smart-watch", name: "智能健康手环", category: "可穿戴设备" },
      { id: "smart-toilet", name: "智能健康马桶", category: "监测设备" },
    ],
  },
  {
    id: "voice-assistant",
    name: "智能语音助手",
    description: "专为老年人设计的语音交互系统，支持健康咨询、用药提醒和娱乐功能",
    fullDescription:
      "智能语音助手是专为老年人优化的AI语音交互设备。采用先进的语音识别技术，支持方言识别，老人可用自然语言与设备对话。系统集成了健康咨询、用药提醒、天气查询、新闻播报、音乐播放等多种功能。老人可以询问健康问题，系统会提供专业的健康建议。设备还可以设置用药提醒、喝水提醒等，帮助老人养成良好的生活习惯。支持视频通话功能，老人可以随时与家人视频聊天。大音量扬声器，音质清晰，适合听力下降的老人使用。",
    image: "/voice-assistant-speaker-elderly-care-ai-smart-home.jpg",
    category: "AI设备",
    features: ["语音交互", "健康咨询", "娱乐功能", "视频通话", "方言识别"],
    specifications: [
      { label: "语音识别", value: "支持普通话及8种方言" },
      { label: "屏幕", value: "8英寸触摸屏" },
      { label: "摄像头", value: "500万像素" },
      { label: "音响", value: "10W双扬声器" },
      { label: "连接", value: "Wi-Fi + 蓝牙" },
      { label: "功能", value: "健康咨询、娱乐、通话" },
    ],
    scenarios: [
      "独居老人：提供陪伴和娱乐，减少孤独感",
      "健康管理：随时咨询健康问题，获取专业建议",
      "家庭沟通：视频通话功能方便与家人联系",
      "智能家居：语音控制家电，提高生活便利性",
    ],
    developer: "AI研究院 & 智能科技公司",
    releaseDate: "2024年4月",
    users: "已服务900+家庭",
    relatedProducts: [
      { id: "medication-dispenser", name: "智能药盒提醒器", category: "辅助设备" },
      { id: "smart-watch", name: "智能健康手环", category: "可穿戴设备" },
    ],
  },
  {
    id: "smart-bed",
    name: "智能护理床",
    description: "电动调节床位，集成压力传感器监测翻身情况，预防褥疮",
    fullDescription:
      "智能护理床是专为失能、半失能老人设计的多功能护理设备。床体采用电动调节系统，可实现背部、腿部、整体升降等多角度调节，满足不同护理需求。床垫内置压力传感器阵列，实时监测老人体位和压力分布，长时间未翻身会自动提醒护理人员。系统可记录翻身次数和时间，生成护理报告。床体两侧配备护栏，可电动升降，确保安全。还配备了便盆架、输液架等护理配件。床体采用抗菌材料，易于清洁消毒。",
    image: "/smart-nursing-bed-elderly-care-pressure-sensor-adj.jpg",
    category: "护理设备",
    features: ["电动调节", "压力监测", "防褥疮", "护理记录", "安全护栏"],
    specifications: [
      { label: "调节功能", value: "背部、腿部、整体升降" },
      { label: "承重", value: "200kg" },
      { label: "床体尺寸", value: "210cm × 100cm" },
      { label: "传感器", value: "256点压力传感阵列" },
      { label: "材质", value: "抗菌ABS + 钢架" },
      { label: "控制", value: "遥控器 + APP" },
    ],
    scenarios: [
      "养老机构：提供专业护理，减轻护理人员工作强度",
      "居家护理：方便家属照顾失能老人",
      "医疗机构：辅助治疗和康复，预防并发症",
      "康复中心：支持康复训练，记录康复进展",
    ],
    developer: "护理学院 & 医疗器械公司",
    releaseDate: "2023年9月",
    users: "已部署于20家养老机构",
    relatedProducts: [
      { id: "sleep-monitor", name: "智能睡眠监测垫", category: "监测设备" },
      { id: "rehabilitation-robot", name: "智能康复训练机器人", category: "康复设备" },
    ],
  },
  {
    id: "fall-detection-camera",
    name: "AI跌倒检测摄像头",
    description: "基于计算机视觉的跌倒检测系统，实时监控并自动报警",
    fullDescription:
      "AI跌倒检测摄像头采用先进的计算机视觉和深度学习技术，能够实时识别老人跌倒事件。摄像头安装在房间顶部或墙壁上，覆盖主要活动区域。AI算法可以区分正常活动（如坐下、躺下）和跌倒事件，准确率达95%以上。一旦检测到跌倒，系统会立即发出警报并推送通知给家属和护理人员，同时保存跌倒前后的视频片段供分析。系统支持隐私保护模式，可以只检测跌倒而不录制视频。支持多摄像头联网，实现全屋监控。",
    image: "/ai-fall-detection-camera-elderly-care-computer-vis.jpg",
    category: "监测设备",
    features: ["AI识别", "实时监控", "自动报警", "隐私保护", "视频回放"],
    specifications: [
      { label: "分辨率", value: "1080P" },
      { label: "视角", value: "120度广角" },
      { label: "识别准确率", value: "95%以上" },
      { label: "夜视", value: "红外夜视，10米范围" },
      { label: "存储", value: "本地32GB + 云端" },
      { label: "连接", value: "Wi-Fi + 有线网络" },
    ],
    scenarios: [
      "独居老人：24小时监护，跌倒及时发现和救援",
      "养老机构：减少巡视频率，提高安全保障",
      "康复中心：监测康复训练安全，预防意外",
      "医疗机构：辅助护理，提高响应速度",
    ],
    developer: "AI研究院 & 安防科技公司",
    releaseDate: "2024年1月",
    users: "已部署于30家养老机构",
    relatedProducts: [
      { id: "smart-watch", name: "智能健康手环", category: "可穿戴设备" },
      { id: "emergency-button", name: "一键呼叫报警器", category: "安全设备" },
    ],
  },
  {
    id: "smart-toilet",
    name: "智能健康马桶",
    description: "自动检测尿液成分，分析健康状况，提供健康建议",
    fullDescription:
      "智能健康马桶是一款集成了健康检测功能的智能卫浴设备。马桶内置尿液分析传感器，每次使用后自动检测尿液中的葡萄糖、蛋白质、pH值等多项指标，评估肾功能、血糖水平等健康状况。检测结果自动上传至健康管理平台，生成健康趋势报告。系统可以早期发现糖尿病、肾病等疾病风险，及时提醒就医。马桶还具有自动冲洗、座圈加热、暖风烘干等舒适功能。采用抗菌材料，自动清洁消毒，保持卫生。操作简单，适合老年人使用。",
    image: "/smart-health-toilet-elderly-care-urine-analysis-he.jpg",
    category: "监测设备",
    features: ["尿液分析", "健康评估", "自动清洁", "舒适功能", "数据追踪"],
    specifications: [
      { label: "检测指标", value: "葡萄糖、蛋白质、pH等10项" },
      { label: "检测时间", value: "30秒" },
      { label: "准确率", value: "医疗级精度" },
      { label: "功能", value: "自动冲洗、加热、烘干" },
      { label: "连接", value: "Wi-Fi" },
      { label: "材质", value: "抗菌陶瓷" },
    ],
    scenarios: [
      "慢病管理：糖尿病、肾病患者日常监测",
      "居家养老：无感监测健康状况，早期发现疾病",
      "养老机构：批量健康监测，提高护理质量",
      "体检筛查：定期健康评估，预防疾病",
    ],
    developer: "医学院 & 智能卫浴公司",
    releaseDate: "2024年3月",
    users: "已服务400+家庭",
    relatedProducts: [
      { id: "blood-pressure-monitor", name: "智能血压计", category: "监测设备" },
      { id: "smart-watch", name: "智能健康手环", category: "可穿戴设备" },
    ],
  },
  {
    id: "exercise-bike",
    name: "智能康复单车",
    description: "可调节阻力的康复训练单车，实时监测运动数据和心率",
    fullDescription:
      "智能康复单车是专为老年人和康复患者设计的有氧运动设备。单车采用磁控阻力系统，可根据用户体能调节运动强度，支持8档阻力调节。座椅和把手高度可调，适应不同身高用户。内置心率传感器，实时监测运动心率，确保运动安全。配备21.5英寸触摸屏，显示运动数据和康复课程视频。系统根据用户的康复阶段自动生成训练计划，包括热身、训练、放松等环节。运动数据自动记录并生成报告，帮助医生评估康复效果。单车还具有虚拟骑行功能，增加运动趣味性。",
    image: "/smart-exercise-bike-elderly-care-rehabilitation-tr.jpg",
    category: "康复设备",
    features: ["阻力调节", "数据监测", "康复训练", "心率监测", "虚拟骑行"],
    specifications: [
      { label: "阻力系统", value: "磁控，8档调节" },
      { label: "承重", value: "150kg" },
      { label: "屏幕", value: "21.5英寸触摸屏" },
      { label: "监测", value: "心率、速度、距离、卡路里" },
      { label: "座椅调节", value: "上下前后可调" },
      { label: "连接", value: "Wi-Fi + 蓝牙" },
    ],
    scenarios: [
      "康复中心：心脏康复、骨科康复训练",
      "养老机构：提供有氧运动，增强体质",
      "居家康复：在家进行康复训练，节省时间",
      "健身房：老年人专用健身设备",
    ],
    developer: "工程学院 & 康复器械公司",
    releaseDate: "2023年11月",
    users: "已部署于25家康复机构",
    relatedProducts: [
      { id: "rehabilitation-robot", name: "智能康复训练机器人", category: "康复设备" },
      { id: "smart-watch", name: "智能健康手环", category: "可穿戴设备" },
    ],
  },
]
