"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
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
  ChevronRight,
  CreditCard,
  FolderKanban,
  Home,
  Inbox,
  LaptopMinimal,
  MonitorCog,
  MoonStar,
  Palette,
  Settings,
  ShieldCheck,
  Sparkles,
  SunMedium,
  UserRound,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

const navItems = [
  { title: "Overview", icon: Home, active: true, color: "text-blue-500" },
  { title: "Projects", icon: FolderKanban, color: "text-violet-500" },
  { title: "Inbox", icon: Inbox, color: "text-emerald-500" },
  { title: "Team", icon: Users, color: "text-amber-500" },
]

const secondaryItems = [
  { title: "Settings", icon: Settings, color: "text-sky-500" },
  { title: "Alerts", icon: Bell, color: "text-rose-500" },
]

const settingsNav = [
  {
    id: "profile",
    title: "Profile",
    description: "Personal details",
    icon: UserRound,
  },
  {
    id: "appearance",
    title: "Appearance",
    description: "Theme & layout",
    icon: Palette,
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Alerts & updates",
    icon: Bell,
  },
  {
    id: "security",
    title: "Security",
    description: "Login & access",
    icon: ShieldCheck,
  },
  {
    id: "billing",
    title: "Billing",
    description: "Plans & invoices",
    icon: CreditCard,
  },
] as const

export default function Page() {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [activeSetting, setActiveSetting] = useState<(typeof settingsNav)[number]["id"]>(
    "profile"
  )
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeTab = settingsNav.find((item) => item.id === activeSetting) ?? settingsNav[0]
  const themeOptions = [
    { id: "light", label: "Light", description: "Clear interface", icon: SunMedium },
    { id: "dark", label: "Dark", description: "Best for low-light", icon: MoonStar },
    { id: "system", label: "System", description: "Follow device theme", icon: LaptopMinimal },
  ] as const

  const isDark = mounted ? resolvedTheme === "dark" : false
  const currentTheme = mounted ? (theme ?? resolvedTheme ?? "system") : "light"

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
            <SidebarGroupContent className="w-full">
              <SidebarMenu className="flex w-full flex-col gap-1">
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.title} className="w-full">
                    <SidebarMenuButton isActive={item.active} className="w-full">
                      <item.icon className={`h-4 w-4 ${item.color}`} />
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
            <SidebarGroupContent className="w-full">
              <SidebarMenu className="flex w-full flex-col gap-1">
                {secondaryItems.map((item) => (
                  <SidebarMenuItem key={item.title} className="w-full">
                    <SidebarMenuButton
                      onClick={() => item.title === "Settings" && setSettingsOpen(true)}
                      className="w-full"
                    >
                      <item.icon className={`h-4 w-4 ${item.color}`} />
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
        <header className="border-b px-4 py-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <span>Overview</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="font-semibold text-foreground">Overview</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                aria-label="Toggle theme"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="rounded-full"
              >
                {isDark ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 space-y-6 p-6">
          <div className="flex items-center justify-between gap-3 border-b pb-4">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
              <p className="text-sm text-muted-foreground">Dashboard overview and workspace summary</p>
            </div>

            <Button size="sm">Add project</Button>
          </div>

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

      <Sheet open={settingsOpen} onOpenChange={setSettingsOpen}>
        <SheetContent
          side="right"
          className="!inset-auto !left-1/2 !top-1/2 !right-auto !h-[80vh] !w-[min(960px,92vw)] !-translate-x-1/2 !-translate-y-1/2 !rounded-2xl !border !p-0 !shadow-2xl sm:!max-w-5xl"
        >
          <div className="flex h-full min-h-[80vh]">
            <aside className="w-full max-w-[260px] border-r bg-muted/20 p-4">
              <div className="mb-6">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Settings
                </p>
                <h2 className="mt-2 text-xl font-semibold">Workspace</h2>
              </div>

              <nav className="space-y-1">
                {settingsNav.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSetting === item.id

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveSetting(item.id)}
                      className={[
                        "flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors",
                        isActive
                          ? "border-primary/30 bg-primary/5 text-primary"
                          : "border-transparent bg-transparent text-foreground hover:bg-muted",
                      ].join(" ")}
                    >
                      <Icon className="h-4 w-4" />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </button>
                  )
                })}
              </nav>
            </aside>

            <div className="flex-1 overflow-y-auto p-6">
              <SheetHeader className="mb-6 px-0">
                <SheetTitle className="text-2xl">{activeTab.title}</SheetTitle>
                <SheetDescription>{activeTab.description}</SheetDescription>
              </SheetHeader>

              {activeSetting === "profile" && (
                <div className="space-y-6">
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
                        FP
                      </div>
                      <div>
                        <p className="text-lg font-semibold">Fuzzy Potato</p>
                        <p className="text-sm text-muted-foreground">Admin account</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium">Display name</span>
                      <input
                        defaultValue="Fuzzy Potato"
                        className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 focus:border-ring"
                      />
                    </label>
                    <label className="space-y-2">
                      <span className="text-sm font-medium">Email</span>
                      <input
                        defaultValue="hello@fuzzypotato.app"
                        className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm outline-none ring-0 focus:border-ring"
                      />
                    </label>
                  </div>
                </div>
              )}

              {activeSetting === "appearance" && (
                <div className="space-y-6">
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Theme</p>
                        <p className="text-sm text-muted-foreground">Dark mode by default</p>
                      </div>
                      <div className="rounded-full border border-border bg-muted px-3 py-1 text-sm">
                        Dark
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    {themeOptions.map((option) => {
                      const Icon = option.icon
                      const selected = currentTheme === option.id

                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setTheme(option.id)}
                          className={[
                            "rounded-xl border p-4 text-left transition-colors",
                            selected
                              ? "border-primary bg-primary/5"
                              : "border-border bg-card hover:bg-muted/50",
                          ].join(" ")}
                        >
                          <div className="flex items-center justify-between">
                            <p className="font-medium">{option.label}</p>
                            {selected && <MonitorCog className="h-4 w-4 text-primary" />}
                          </div>
                          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon className="h-4 w-4" />
                            <span>{option.description}</span>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )}

              {activeSetting === "notifications" && (
                <div className="space-y-4">
                  {[
                    ["Email reports", "Receive weekly summaries"],
                    ["Product updates", "New feature announcements"],
                    ["Security alerts", "Critical account notifications"],
                  ].map(([label, description]) => (
                    <label
                      key={label}
                      className="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm"
                    >
                      <div>
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-muted-foreground">{description}</p>
                      </div>
                      <input type="checkbox" defaultChecked className="h-4 w-4 accent-primary" />
                    </label>
                  ))}
                </div>
              )}

              {activeSetting === "security" && (
                <div className="space-y-4">
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <p className="font-medium">Two-factor authentication</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Recommended for your workspace admin account.
                    </p>
                  </div>
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <p className="font-medium">Session timeout</p>
                    <p className="mt-1 text-sm text-muted-foreground">30 minutes</p>
                  </div>
                </div>
              )}

              {activeSetting === "billing" && (
                <div className="space-y-4">
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <p className="text-sm text-muted-foreground">Current plan</p>
                    <p className="mt-2 text-2xl font-semibold">Pro</p>
                    <p className="mt-1 text-sm text-muted-foreground">$29/month</p>
                  </div>
                  <div className="rounded-xl border bg-card p-4 shadow-sm">
                    <p className="font-medium">Payment method</p>
                    <p className="mt-1 text-sm text-muted-foreground">Visa ending in 4242</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </SidebarProvider>
  )
}
