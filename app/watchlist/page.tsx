import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { WatchlistSection } from "@/components/dashboard/watchlist-section"
import { NewsSection } from "@/components/dashboard/news-section"
import Link from "next/link"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WatchlistPage() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />

      <main className="lg:pl-72">
        <div className="max-w-5xl mx-auto px-6 py-8 lg:py-12">
          {/* Mobile Header Spacer */}
          <div className="h-14 lg:hidden" />

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">Watchlist</h1>
              <p className="text-muted-foreground mt-2">Track stocks you're interested in</p>
            </div>
            <Link href="/search">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Stock
              </Button>
            </Link>
          </div>

          {/* Two column layout */}
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Main Column - 3/5 width */}
            <div className="lg:col-span-3 space-y-12">
              <WatchlistSection />
            </div>

            {/* Sidebar Column - 2/5 width */}
            <div className="lg:col-span-2 space-y-12">
              <NewsSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
