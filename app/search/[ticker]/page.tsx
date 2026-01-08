"use client"

import { useState, useEffect } from "react"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Area, AreaChart, ResponsiveContainer } from "recharts"
import { getStockDetails } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import { ArrowLeft, Brain, Lightbulb, Loader2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { use } from "react"

export default function StockDetailPage({ params }: { params: Promise<{ ticker: string }> }) {
  const { ticker } = use(params)
  const [stock, setStock] = useState(getStockDetails(ticker))
  const [loading, setLoading] = useState(true)
  const [usingAPI, setUsingAPI] = useState(false)

  useEffect(() => {
    // Try to fetch real data from API
    async function fetchStockData() {
      try {
        const response = await fetch(`/api/stock/${ticker}`)
        const data = await response.json()
        
        if (data.data && data.data.quote) {
          // Use real API data
          setStock({
            ticker: data.data.ticker,
            name: data.data.profile?.name || stock.name,
            price: data.data.quote.price,
            change: data.data.quote.change,
            changePercent: data.data.quote.changePercent,
            volume: data.data.quote.volume,
            marketCap: data.data.profile?.marketCapitalization 
              ? `${(data.data.profile.marketCapitalization / 1e9).toFixed(1)}B`
              : stock.marketCap,
            sector: data.data.profile?.finnhubIndustry || stock.sector,
            sparklineData: data.data.history?.map((h: any) => ({
              value: h.close,
              date: h.date,
            })) || stock.sparklineData,
            aiSummary: data.data.aiSummary?.summary || stock.aiSummary,
            keyInsights: data.data.aiSummary?.insights || stock.keyInsights,
            news: data.data.news?.map((n: any) => ({
              id: n.id,
              headline: n.headline,
              source: n.source,
              timeAgo: n.timeAgo,
              summary: n.summary,
            })) || stock.news,
          })
          setUsingAPI(true)
        }
      } catch (error) {
        console.error("Error fetching stock data:", error)
        // Fall back to mock data
      } finally {
        setLoading(false)
      }
    }

    fetchStockData()
  }, [ticker])
  const isPositive = stock.change >= 0

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <SidebarNav />
        <main className="lg:pl-72">
          <div className="max-w-5xl mx-auto px-6 py-8 lg:py-12">
            <div className="h-14 lg:hidden" />
            <div className="flex items-center justify-center h-64">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />

      <main className="lg:pl-72">
        <div className="max-w-5xl mx-auto px-6 py-8 lg:py-12">
          {/* Mobile Header Spacer */}
          <div className="h-14 lg:hidden" />

          {/* Back Button */}
          <div className="flex items-center justify-between mb-6">
            <Link href="/search">
              <Button variant="ghost">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Search
              </Button>
            </Link>
            {usingAPI && (
              <span className="text-xs text-muted-foreground">Using live data</span>
            )}
          </div>

          {/* Stock Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-foreground">{stock.ticker.slice(0, 2)}</span>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground">{stock.ticker}</h1>
                <p className="text-lg text-muted-foreground">{stock.name}</p>
                <p className="text-sm text-muted-foreground">{stock.sector}</p>
              </div>
            </div>

            <div className="flex items-baseline gap-4">
              <p className="text-3xl font-bold text-foreground">${stock.price.toFixed(2)}</p>
              <p className={cn("text-xl font-medium", isPositive ? "text-gain" : "text-loss")}>
                {isPositive ? "+" : ""}
                {stock.change.toFixed(2)} ({isPositive ? "+" : ""}
                {stock.changePercent.toFixed(2)}%)
              </p>
            </div>
            <div className="flex gap-6 mt-2 text-sm text-muted-foreground">
              <span>Volume: {stock.volume}</span>
              <span>Market Cap: {stock.marketCap}</span>
            </div>
          </div>

          {/* Stock Chart */}
          <Card className="mb-8 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">Price Movement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 -mx-2">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={stock.sparklineData}>
                    <defs>
                      <linearGradient id={`chartGradient-${stock.ticker}`} x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor={isPositive ? "var(--color-gain)" : "var(--color-loss)"}
                          stopOpacity={0.1}
                        />
                        <stop
                          offset="100%"
                          stopColor={isPositive ? "var(--color-gain)" : "var(--color-loss)"}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={isPositive ? "var(--color-gain)" : "var(--color-loss)"}
                      strokeWidth={2}
                      fill={`url(#chartGradient-${stock.ticker})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* AI Summary */}
          <Card className="mb-8 bg-card border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Brain className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <CardTitle className="text-xl font-semibold text-foreground">AI Market Analysis</CardTitle>
                  <p className="text-sm text-muted-foreground">Latest insights and key information</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Main Summary */}
              <p className="text-foreground leading-relaxed text-base">{stock.aiSummary}</p>

              {/* Key Insights */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-muted-foreground" />
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Key Insights</h4>
                </div>
                <ul className="space-y-2">
                  {stock.keyInsights.map((insight, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* News Section */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-foreground">Recent News</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {stock.news.map((article) => (
                  <article key={article.id} className="group cursor-pointer pb-6 border-b border-border last:border-0 last:pb-0">
                    <div className="flex items-start gap-3 mb-1">
                      <span className="text-xs font-medium text-muted-foreground">{article.source}</span>
                      <span className="text-xs text-muted-foreground">{article.timeAgo}</span>
                    </div>
                    <h3 className="font-medium text-foreground leading-snug group-hover:underline mb-2">
                      {article.headline}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{article.summary}</p>
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
