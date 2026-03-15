import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  ClipboardIcon,
  FolderIcon,
  LayoutDashboardIcon,
  SettingsIcon,
  type LucideIcon,
} from "lucide-react"

import { NavLink } from "react-router"

const navItems: { icon: LucideIcon; name: string; path: string }[] = [
  { icon: LayoutDashboardIcon, name: "Dashboard", path: "/" },
  { icon: FolderIcon, name: "Projects", path: "/projects" },
  { icon: ClipboardIcon, name: "Tasks", path: "/tasks" },
  { icon: SettingsIcon, name: "Settings", path: "#" },
]

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LayoutDashboardIcon />
              <span>DevTracker</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {navItems.map((navItem) => (
              <SidebarMenuItem key={navItem.path}>
                <NavLink to={navItem.path}>
                  {({ isActive }) => (
                    <SidebarMenuButton data-active={isActive}>
                      {<navItem.icon />}
                      <span>{navItem.name}</span>
                    </SidebarMenuButton>
                  )}
                </NavLink>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
