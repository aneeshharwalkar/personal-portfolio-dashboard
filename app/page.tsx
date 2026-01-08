import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { OverviewHeader } from "@/components/dashboard/overview-header"
import { DailyMoversSection } from "@/components/dashboard/daily-movers-section"
import { PersonalMoversSection } from "@/components/dashboard/personal-movers-section"
import { NewsSection } from "@/components/dashboard/news-section"
import { EarningsSection } from "@/components/dashboard/earnings-section"
import { AISummarySection } from "@/components/dashboard/ai-summary-section"
import { SellSignalsSection } from "@/components/dashboard/sell-signals-section"
import { BuyRecommendationsSection } from "@/components/dashboard/buy-recommendations-section"
import { IndustryTrendsSection } from "@/components/dashboard/industry-trends-section"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />

      <main className="lg:pl-72">
        <div className="max-w-5xl mx-auto px-6 py-8 lg:py-12">
          {/* Mobile Header Spacer */}
          <div className="h-14 lg:hidden" />

          {/* Overview Header - Hero section like Robinhood */}
          <section className="mb-12">
            <OverviewHeader />
          </section>

          <section className="mb-12">
            <AISummarySection />
          </section>

          {/* Personal Daily Movers */}
          <section className="mb-12">
            <PersonalMoversSection />
          </section>

          <section className="mb-12 space-y-6">
            <h2 className="text-xl font-semibold text-foreground">Trading Insights</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <SellSignalsSection />
              <BuyRecommendationsSection />
            </div>
          </section>

          <section className="mb-12">
            <IndustryTrendsSection />
          </section>

          {/* Two column layout with generous spacing */}
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Main Column - 3/5 width */}
            <div className="lg:col-span-3 space-y-12">
              <DailyMoversSection />
              <EarningsSection />
            </div>

            {/* Sidebar Column - 2/5 width */}
            <div className="lg:col-span-2 space-y-12">
              {/* Watchlist Quick Link */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-foreground">Watchlist</h2>
                  <Link href="/watchlist">
                    <Button variant="ghost" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View All
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Track stocks you're interested in. View your full watchlist to see all stocks you're monitoring.
                </p>
                <Link href="/watchlist">
                  <Button className="w-full">
                    Go to Watchlist
                  </Button>
                </Link>
              </div>
              <NewsSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
