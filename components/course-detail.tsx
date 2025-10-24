"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Users, Star, BookOpen, Award, CheckCircle2, PlayCircle } from "lucide-react"

interface CourseDetailProps {
  course: {
    id: string
    title: string
    description: string
    instructor: string
    duration: string
    level: string
    students: number
    rating: number
  }
}

const courseModules = [
  {
    title: "第一章：基础理论",
    lessons: [
      { title: "1.1 课程介绍与学习目标", duration: "15分钟", completed: true },
      { title: "1.2 老年生理学基础", duration: "30分钟", completed: true },
      { title: "1.3 常见疾病概述", duration: "25分钟", completed: false },
    ],
  },
  {
    title: "第二章：实践应用",
    lessons: [
      { title: "2.1 健康评估方法", duration: "40分钟", completed: false },
      { title: "2.2 个案分析与讨论", duration: "35分钟", completed: false },
      { title: "2.3 实践操作演示", duration: "45分钟", completed: false },
    ],
  },
  {
    title: "第三章：高级技能",
    lessons: [
      { title: "3.1 复杂病例处理", duration: "50分钟", completed: false },
      { title: "3.2 团队协作与沟通", duration: "30分钟", completed: false },
      { title: "3.3 综合能力评估", duration: "60分钟", completed: false },
    ],
  },
]

export function CourseDetail({ course }: CourseDetailProps) {
  return (
    <div className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{course.level}</Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span>({course.students.toLocaleString()} 名学员)</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">{course.description}</p>
            </div>

            <div className="aspect-video rounded-xl bg-secondary/50 flex items-center justify-center border border-border">
              <div className="text-center">
                <PlayCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">课程预览视频</p>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">课程概述</TabsTrigger>
                <TabsTrigger value="curriculum">课程大纲</TabsTrigger>
                <TabsTrigger value="instructor">讲师介绍</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>课程目标</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">掌握老年生理特点及常见疾病的识别与管理方法</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">学习健康评估工具的使用及个案分析技能</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">培养团队协作能力和专业沟通技巧</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">获得行业认可的专业技能认证</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>适合人群</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>医学、护理、康复等相关专业学生</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>养老机构从业人员及管理者</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>希望转型进入养老行业的专业人士</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                        <span>对老年健康管理感兴趣的学习者</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="curriculum" className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {courseModules.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`}>
                      <AccordionTrigger className="text-left">
                        <div className="flex items-center gap-3">
                          <BookOpen className="h-5 w-5 text-primary" />
                          <span className="font-medium">{module.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pl-8">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center justify-between py-2 border-b border-border last:border-0"
                            >
                              <div className="flex items-center gap-3">
                                {lesson.completed ? (
                                  <CheckCircle2 className="h-4 w-4 text-primary" />
                                ) : (
                                  <PlayCircle className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span className="text-sm text-foreground">{lesson.title}</span>
                              </div>
                              <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
              <TabsContent value="instructor" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-primary">{course.instructor[0]}</span>
                      </div>
                      <div>
                        <CardTitle>{course.instructor}</CardTitle>
                        <CardDescription>资深老年健康管理专家</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      拥有20年以上老年医学临床经验，曾在多家三甲医院担任老年科主任。主持国家级科研项目5项，发表SCI论文30余篇。致力于推动智慧养老技术在临床实践中的应用。
                    </p>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">15+</div>
                        <div className="text-xs text-muted-foreground mt-1">开设课程</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">8000+</div>
                        <div className="text-xs text-muted-foreground mt-1">培训学员</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">4.9</div>
                        <div className="text-xs text-muted-foreground mt-1">平均评分</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>课程信息</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">课程时长：</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">已报名：</span>
                    <span className="font-medium">{course.students.toLocaleString()} 人</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">证书：</span>
                    <span className="font-medium">完成后颁发</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">学习进度</span>
                    <span className="font-medium">22%</span>
                  </div>
                  <Progress value={22} />
                </div>

                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    继续学习
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    加入收藏
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold mb-3">课程包含</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>30+ 视频课程</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>实践案例分析</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>在线答疑与讨论</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>课程资料下载</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>专业技能认证</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
