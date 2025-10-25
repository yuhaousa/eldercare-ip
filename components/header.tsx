"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">智</span>
              </div>
              <span className="text-lg font-semibold text-foreground">新中智慧健康养老平台</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/#platform"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                平台介绍
              </Link>
              <Link
                href="/courses"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                课程中心
              </Link>
              <Link
                href="/news"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                平台动态
              </Link>
              <Link
                href="/learning-dashboard"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                学习中心
              </Link>
              <Link
                href="/rehabilitation"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                康复训练
              </Link>
              <Link
                href="/research"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                科研管理
              </Link>
              <Link
                href="/achievements"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                成果展示
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              登录
            </Button>
            <Button size="sm" asChild>
              <Link href="/health-monitoring">我的健康</Link>
            </Button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                href="/#platform"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                平台介绍
              </Link>
              <Link
                href="/courses"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                课程中心
              </Link>
              <Link
                href="/news"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                平台动态
              </Link>
              <Link
                href="/learning-dashboard"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                学习中心
              </Link>
              <Link
                href="/rehabilitation"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                康复训练
              </Link>
              <Link
                href="/research"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                科研管理
              </Link>
              <Link
                href="/achievements"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                成果展示
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" size="sm">
                  登录
                </Button>
                <Button size="sm" asChild>
                  <Link href="/health-monitoring">我的健康</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
