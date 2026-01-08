"use client"

import { useState, useMemo } from "react"
import { SidebarNav } from "@/components/dashboard/sidebar-nav"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search as SearchIcon, TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { searchableStocks } from "@/lib/mock-data"
import Link from "next/link"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStocks = useMemo(() => {
    if (!searchQuery.trim()) return []
    const query = searchQuery.toUpperCase()
    return searchableStocks.filter(
      (stock) =>
        stock.ticker.includes(query) ||
        stock.name.toUpperCase().includes(query.toUpperCase()) ||
        stock.sector.toUpperCase().includes(query.toUpperCase()),
    )
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />

      <main className="lg:pl-72">
        <div className="max-w-4xl mx-auto px-6 py-8 lg:py-12">
          {/* Mobile Header Spacer */}
          <div className="h-14 lg:hidden" />

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">Search Stocks</h1>
            <p className="text-muted-foreground">Look up any stock ticker or company name</p>
          </div>

          {/* Search Input */}
          <div className="mb-8">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by ticker (e.g., AAPL) or company name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg"
                autoFocus
              />
            </div>
          </div>

          {/* Search Results */}
          {searchQuery.trim() && (
            <div className="space-y-4">
              {filteredStocks.length > 0 ? (
                <>
                  <h2 className="text-lg font-semibold text-foreground">
                    Found {filteredStocks.length} {filteredStocks.length === 1 ? "stock" : "stocks"}
                  </h2>
                  <div className="space-y-2">
                    {filteredStocks.map((stock) => (
                      <Link key={stock.ticker} href={`/search/${stock.ticker}`}>
                        <Card className="hover:bg-secondary/50 transition-colors cursor-pointer">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                                  <span className="text-sm font-bold text-foreground">{stock.ticker.slice(0, 2)}</span>
                                </div>
                                <div>
                                  <p className="font-semibold text-foreground text-lg">{stock.ticker}</p>
                                  <p className="text-sm text-muted-foreground">{stock.name}</p>
                                  <p className="text-xs text-muted-foreground mt-1">{stock.sector}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-muted-foreground">View Details</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">No stocks found matching "{searchQuery}"</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Try searching by ticker symbol (e.g., AAPL, MSFT) or company name
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Popular Stocks */}
          {!searchQuery.trim() && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Popular Stocks</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {searchableStocks.slice(0, 9).map((stock) => (
                  <Link key={stock.ticker} href={`/search/${stock.ticker}`}>
                    <Card className="hover:bg-secondary/50 transition-colors cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                            <span className="text-xs font-bold text-foreground">{stock.ticker.slice(0, 2)}</span>
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">{stock.ticker}</p>
                            <p className="text-sm text-muted-foreground">{stock.name}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
