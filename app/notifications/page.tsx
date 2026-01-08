import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { Card, CardContent } from "@/components/ui/card"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />

      <main className="lg:pl-72">
        <div className="max-w-4xl mx-auto px-6 py-8 lg:py-12">
          {/* Mobile Header Spacer */}
          <div className="h-14 lg:hidden" />

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Notifications</h1>
            <p className="text-muted-foreground">Stay updated on your portfolio and market activity</p>
          </div>

          {/* Placeholder */}
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">No notifications yet</p>
              <p className="text-sm text-muted-foreground mt-2">
                You'll see alerts about your portfolio, watchlist, and market updates here
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
