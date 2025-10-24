import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">智</span>
              </div>
              <span className="text-lg font-semibold text-foreground">智慧健康养老平台</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              构建融合教育、科研与实践的智慧养老创新平台， 促进高校与养老机构协同育人，打造健康老龄化创新示范基地。
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#platform"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  平台介绍
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  课程体系
                </Link>
              </li>
              <li>
                <Link
                  href="#research"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  科研创新
                </Link>
              </li>
              <li>
                <Link
                  href="#partners"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  合作单位
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>邮箱: info@healthplatform.edu</li>
              <li>电话: +86 123 4567 8900</li>
              <li>地址: 中国·新加坡</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">© 2025 中新智慧健康与养老融合平台. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}
