import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  Bell,
  FolderKanban,
  Home,
  Inbox,
  Settings,
  Sparkles,
  Users,
} from "lucide-react"

const navItems = [
  { title: "Overview", icon: Home, active: true },
  { title: "Projects", icon: FolderKanban },
  { title: "Inbox", icon: Inbox },
  { title: "Team", icon: Users },
]

const secondaryItems = [
  { title: "Settings", icon: Settings },
  { title: "Alerts", icon: Bell },
]

export default function Page() {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar>
        <SidebarHeader className="border-b px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold">Fuzzy Potato</p>
              <p className="text-xs text-muted-foreground">Workspace</p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.active}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarSeparator />

          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {secondaryItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t p-3">
          <div className="flex items-center gap-3 rounded-md bg-muted/50 p-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background text-xs font-medium">
              FP
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">Fuzzy Potato</p>
              <p className="truncate text-xs text-muted-foreground">Admin</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Dashboard</p>
              <h1 className="text-lg font-semibold">Overview</h1>
            </div>
          </div>

          <button className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground">
            New report
          </button>
        </header>

        <main className="flex-1 space-y-6 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Total projects", "24"],
              ["Active tasks", "18"],
              ["Team health", "92%"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border bg-card p-4 shadow-sm">
                <p className="text-sm text-muted-foreground">{label}</p>
                <p className="mt-3 text-3xl font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Recent activity</h2>
              <div className="mt-4 space-y-4">
                {[
                  "Design systems update shipped",
                  "Marketing sprint review scheduled",
                  "Client feedback incorporated",
                ].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-lg border p-3">
                    <div>
                      <p className="font-medium">{item}</p>
                      <p className="text-sm text-muted-foreground">2{index} min ago</p>
                    </div>
                    <span className="rounded-full bg-muted px-2 py-1 text-xs">Live</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="text-lg font-semibold">Quick notes</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>• Launch checklist is 80% complete.</li>
                <li>• Review user onboarding before Friday.</li>
                <li>• Sync with product on pricing update.</li>
              </ul>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
