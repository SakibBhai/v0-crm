"use client"

import type React from "react"

import { Sidebar } from "@/components/sidebar"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Search, Plus, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NotificationDropdown } from "@/components/notification-dropdown"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const checkSidebar = () => {
      const sidebar = document.querySelector("aside")
      if (sidebar) {
        setSidebarCollapsed(sidebar.classList.contains("w-[70px]"))
      }
    }

    const observer = new MutationObserver(checkSidebar)
    const sidebar = document.querySelector("aside")
    if (sidebar) {
      observer.observe(sidebar, { attributes: true, attributeFilter: ["class"] })
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in-up"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-50 w-[280px] transform transition-transform duration-300 ease-out lg:hidden",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <Sidebar />
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <main className={cn(
        "transition-all duration-300 ease-out min-h-screen",
        !isMobile && (sidebarCollapsed ? "lg:ml-[70px]" : "lg:ml-[240px]")
      )}>
        {/* Top Header */}
        <header className="sticky top-0 z-30 h-14 sm:h-16 border-b border-border bg-background/90 backdrop-blur-lg">
          <div className="flex items-center justify-between h-full px-4 sm:px-6 lg:px-8">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors lg:hidden"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search - Hidden on mobile, visible on larger screens */}
            <div className="hidden sm:block relative w-full max-w-xs lg:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search anything..."
                className="pl-10 bg-secondary border-0 focus-visible:ring-1 focus-visible:ring-primary h-9 lg:h-10"
              />
            </div>

            {/* Mobile Search Icon */}
            <button className="p-2 rounded-lg hover:bg-secondary transition-colors sm:hidden">
              <Search className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Button size="sm" className="gap-1.5 sm:gap-2 h-8 sm:h-9 px-2.5 sm:px-4 text-xs sm:text-sm">
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">New Project</span>
                <span className="sm:hidden">New</span>
              </Button>
              <NotificationDropdown />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="p-4 sm:p-6 lg:p-8 animate-fade-in-up">
          {children}
        </div>
      </main>
    </div>
  )
}

