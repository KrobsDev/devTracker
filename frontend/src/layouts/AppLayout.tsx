import AppSidebar from "@/components/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router"

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-4">
        <div className="w-full">
          <SidebarTrigger />
        </div>

        <Outlet />
      </main>
    </SidebarProvider>
  )
}
