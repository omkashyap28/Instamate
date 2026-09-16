import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar"
import Link from "next/link"
import { Footer } from "./footer"
import { MenuItem } from "./menu-item"
import {
  DASHBOARD_SIDEBAR_MENU_MAIN,
  DASHBOARD_SIDEBAR_MENU_SECONDRY,
} from "@/src/constants"
import { Separator } from "../../ui/separator"

type Props = {
  slug: string
}

export const DashboardSidebar = ({ slug }: Props) => {
  console.log(slug)

  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="text-2xl! hover:bg-transparent active:bg-transparent data-[slot=sidebar-menu-button]:p-1.5!"
              render={<Link href="/" />}
            >
              {/* WIP: add new logo */}
              Logo
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {DASHBOARD_SIDEBAR_MENU_MAIN.map(({ icon, id, label, href }) => (
              <MenuItem key={id} label={label} icon={icon} href={href} />
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="mx-auto w-[90%]! bg-border/30" />
        <SidebarGroup>
          <SidebarGroupContent>
            {DASHBOARD_SIDEBAR_MENU_SECONDRY.map(
              ({ icon, id, label, href }) => (
                <MenuItem key={id} label={label} icon={icon} href={href} />
              )
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <Footer />
    </Sidebar>
  )
}
