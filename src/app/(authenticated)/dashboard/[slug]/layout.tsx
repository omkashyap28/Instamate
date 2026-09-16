import { SidebarInset, SidebarProvider } from "@/src/components/ui/sidebar"
import { DashboardSidebar } from "@/src/components/layout/sidebar"
import { CSSProperties } from "react"
import { SidebarHeader } from "@/src/components/layout/sidebar/sidebar-header"

type Props = {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

const Layout = async ({ children, params }: Props) => {
  const { slug } = await params

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
          "--header-height": "calc(var(--spacing) * 14)",
        } as CSSProperties
      }
    >
      <DashboardSidebar slug={slug} />
      <SidebarInset>
        <SidebarHeader />
        <div className="py-4 px-4 md:px-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default Layout
