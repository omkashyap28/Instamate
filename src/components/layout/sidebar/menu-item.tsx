"use client"

import Link from "next/link"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../../ui/sidebar"
import { useActivePath } from "@/src/hooks/use-active-path"

type Props = {
  label: string
  href: string
  icon: React.ReactNode
}

export const MenuItem = ({ label, icon, href }: Props) => {
  const { isMobile, setOpenMobile } = useSidebar()

  const { isActive } = useActivePath(label.toLowerCase())

  const handleClick = () => {
    if (isMobile) setOpenMobile(false)
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          tooltip={label}
          className="rounded-xl h-9! mb-px"
          render={<Link href={href} />}
          onClick={handleClick}
          isActive={isActive}
        >
          {icon}
          {label}
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
