"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Eye, Search, Bell, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: LayoutDashboard, label: "Home", href: "/" },
  { icon: Eye, label: "Watchlist", href: "/watchlist" },
  { icon: Search, label: "Search", href: "/search" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
]

export function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar - Clean minimal design */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-72 bg-background border-r border-border transition-transform duration-300",
          "lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo - Simple text like Robinhood */}
          <div className="px-6 py-6">
            <span className="text-xl font-bold text-foreground tracking-tight">Portfolio</span>
          </div>

          {/* Nav Items - Clean simple links */}
          <nav className="flex-1 px-4 py-2">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.href === "/" && pathname === "/")
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center gap-4 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50",
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Footer - Minimal */}
          <div className="px-6 py-6 border-t border-border">
            <p className="text-xs text-muted-foreground">Market hours: 9:30 AM - 4:00 PM ET</p>
          </div>
        </div>
      </aside>
    </>
  )
}
