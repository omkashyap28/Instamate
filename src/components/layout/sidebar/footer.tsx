"use client"

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarMenuItem,
} from "../../ui/sidebar"
import { ChevronsUpDown } from "lucide-react"
import { UserButton, useUser } from "@clerk/nextjs"
import { Upgrade } from "./subscription/upgrade"
import { UpgradeCard } from "./subscription/upgrade-card"

export const Footer = () => {
  const { user } = useUser()

  // WIP: fetch user current plan and render upgrade card if user is in free plan

  return (
    <SidebarFooter>
      <Upgrade planType="FREE">
        <UpgradeCard />
      </Upgrade>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="rounded-xl">
            <UserButton fallback />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user?.fullName}</span>
              <span className="truncate text-xs text-muted-foreground">
                {user?.primaryEmailAddress?.emailAddress}
              </span>
            </div>
            <SidebarMenuBadge>
              <ChevronsUpDown className="opacity-60" />
            </SidebarMenuBadge>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  )
}
