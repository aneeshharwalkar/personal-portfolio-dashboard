"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { personalMovers, diversitySuggestions, relatedSuggestions } from "@/lib/mock-data"
import { ChevronDown, ChevronUp, Sparkles, TrendingUp, PieChart } from "lucide-react"

export function PersonalMoversSection() {
  const [diversityExpanded, setDiversityExpanded] = useState(false)
  const [relatedExpanded, setRelatedExpanded] = useState(false)

  return (
    <div className="space-y-8">
      {/* Personal Daily Movers */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-foreground">Today&apos;s Movers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="divide-y divide-border">
            {personalMovers.map((stock) => (
              <div
                key={stock.ticker}
                className="py-4 hover:bg-secondary/30 -mx-3 px-3 rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-xs font-bold text-foreground">{stock.ticker.slice(0, 2)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{stock.ticker}</p>
                      <p className="text-sm text-muted-foreground">{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">${stock.price.toFixed(2)}</p>
                    <p className={cn("text-sm font-medium", stock.change >= 0 ? "text-gain" : "text-loss")}>
                      {stock.change >= 0 ? "+" : ""}
                      {stock.change.toFixed(2)}%
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 pl-14">{stock.reason}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Diversity Suggestions */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <button
            onClick={() => setDiversityExpanded(!diversityExpanded)}
            className="w-full flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <PieChart className="w-4 h-4 text-foreground" />
              </div>
              <div className="text-left">
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  Diversify Your Portfolio
                  <Sparkles className="w-4 h-4 text-muted-foreground" />
                </CardTitle>
                <p className="text-sm text-muted-foreground">AI-suggested stocks to balance sector exposure</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{diversitySuggestions.length} suggestions</span>
              {diversityExpanded ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
            </div>
          </button>
        </CardHeader>
        {diversityExpanded && (
          <CardContent className="pt-0">
            <div className="divide-y divide-border">
              {diversitySuggestions.map((stock) => (
                <div
                  key={stock.ticker}
                  className="py-4 hover:bg-secondary/30 -mx-3 px-3 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-xs font-bold text-foreground">{stock.ticker.slice(0, 2)}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-foreground">{stock.ticker}</p>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                            {stock.sector}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{stock.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">${stock.price.toFixed(2)}</p>
                      <p className={cn("text-sm font-medium", stock.change >= 0 ? "text-gain" : "text-loss")}>
                        {stock.change >= 0 ? "+" : ""}
                        {stock.change.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pl-14">{stock.reason}</p>
                  <div className="flex items-center gap-2 mt-2 pl-14">
                    <div className="h-1.5 w-24 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-foreground rounded-full" style={{ width: `${stock.matchScore}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground">{stock.matchScore}% match</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>

      {/* AI Related Suggestions */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-3">
          <button
            onClick={() => setRelatedExpanded(!relatedExpanded)}
            className="w-full flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-foreground" />
              </div>
              <div className="text-left">
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  Related to Your Holdings
                  <Sparkles className="w-4 h-4 text-muted-foreground" />
                </CardTitle>
                <p className="text-sm text-muted-foreground">Stocks similar to what you already own</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">{relatedSuggestions.length} suggestions</span>
              {relatedExpanded ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              )}
            </div>
          </button>
        </CardHeader>
        {relatedExpanded && (
          <CardContent className="pt-0">
            <div className="divide-y divide-border">
              {relatedSuggestions.map((stock) => (
                <div
                  key={stock.ticker}
                  className="py-4 hover:bg-secondary/30 -mx-3 px-3 rounded-lg transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                        <span className="text-xs font-bold text-foreground">{stock.ticker.slice(0, 2)}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-foreground">{stock.ticker}</p>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                            Like {stock.relatedTo}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{stock.name}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">${stock.price.toFixed(2)}</p>
                      <p className={cn("text-sm font-medium", stock.change >= 0 ? "text-gain" : "text-loss")}>
                        {stock.change >= 0 ? "+" : ""}
                        {stock.change.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pl-14">{stock.reason}</p>
                  <div className="flex items-center gap-2 mt-2 pl-14">
                    <div className="h-1.5 w-24 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-foreground rounded-full" style={{ width: `${stock.matchScore}%` }} />
                    </div>
                    <span className="text-xs text-muted-foreground">{stock.matchScore}% match</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
