import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock, Target } from "lucide-react"

const exercises = [
  {
    id: 1,
    title: "坐姿抬腿",
    category: "下肢训练",
    difficulty: "初级",
    duration: "3分钟",
    sets: "3组 × 10次",
    target: "股四头肌",
    description: "坐在椅子上，缓慢抬起一条腿至水平位置，保持2秒后放下",
  },
  {
    id: 2,
    title: "墙壁俯卧撑",
    category: "上肢训练",
    difficulty: "初级",
    duration: "4分钟",
    sets: "3组 × 8次",
    target: "胸肌、三头肌",
    description: "面对墙壁站立，双手撑墙，身体前倾后推回",
  },
  {
    id: 3,
    title: "单腿平衡",
    category: "平衡训练",
    difficulty: "中级",
    duration: "5分钟",
    sets: "3组 × 30秒",
    target: "平衡能力",
    description: "单脚站立，保持身体平衡，可扶椅背辅助",
  },
  {
    id: 4,
    title: "肩部旋转",
    category: "灵活性训练",
    difficulty: "初级",
    duration: "3分钟",
    sets: "3组 × 10次",
    target: "肩关节",
    description: "双臂向前伸直，做圆周旋转运动",
  },
  {
    id: 5,
    title: "核心卷腹",
    category: "核心训练",
    difficulty: "中级",
    duration: "4分钟",
    sets: "3组 × 12次",
    target: "腹直肌",
    description: "仰卧，双手抱头，上身缓慢抬起至肩胛骨离地",
  },
  {
    id: 6,
    title: "踝关节运动",
    category: "灵活性训练",
    difficulty: "初级",
    duration: "3分钟",
    sets: "3组 × 15次",
    target: "踝关节",
    description: "坐姿，脚尖上下活动，增加踝关节灵活性",
  },
]

export function ExerciseLibrary() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {exercises.map((exercise) => (
        <Card key={exercise.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary">{exercise.category}</Badge>
              <Badge variant="outline">{exercise.difficulty}</Badge>
            </div>
            <CardTitle className="text-lg">{exercise.title}</CardTitle>
            <CardDescription className="line-clamp-2">{exercise.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>时长</span>
                </div>
                <span className="font-medium">{exercise.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Target className="h-4 w-4" />
                  <span>目标</span>
                </div>
                <span className="font-medium">{exercise.target}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">训练量</span>
                <span className="font-medium">{exercise.sets}</span>
              </div>
            </div>
            <Button className="w-full">
              <Play className="h-4 w-4 mr-2" />
              查看详情
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
