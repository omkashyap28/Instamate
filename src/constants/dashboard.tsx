import {
  Unplug,
  Settings,
  User2,
  HelpCircle,
  LayoutDashboard,
  Bot,
} from "lucide-react"

type FieldProps = {
  label: string
  id: number
  href: string
}

type SidebarMenuProps = {
  icon: React.ReactNode
} & FieldProps

export const DASHBOARD_SIDEBAR_MENU_MAIN: SidebarMenuProps[] = [
  {
    id: 1,
    label: "Dashboard",
    icon: <LayoutDashboard />,
    href: "/",
  },
  {
    id: 2,
    label: "Automation",
    icon: <Bot />,
    href: "/automation",
  },
  {
    id: 3,
    label: "Integration",
    icon: <Unplug />,
    href: "/integration",
  },
  {
    id: 4,
    label: "Profile",
    icon: <User2 />,
    href: "/profile",
  },
]

export const DASHBOARD_SIDEBAR_MENU_SECONDRY: SidebarMenuProps[] = [
  {
    id: 1,
    label: "Help",
    icon: <HelpCircle />,
    href: "/help",
  },
  {
    id: 2,
    label: "Settings",
    icon: <Settings />,
    href: "/settings",
  },
]
