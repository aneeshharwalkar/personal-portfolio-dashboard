"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { industryTrends } from "@/lib/mock-data"
import { ChevronDown, ChevronUp, BarChart3, TrendingUp, TrendingDown, Minus } from "lucide-react"

export function IndustryTrendsSection() {
  const [expanded, setExpanded] = useState(false)

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-gain" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-loss" />
      default:
        return <Minus className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getTrendLabel = (trend: string) => {
    switch (trend) {
      case "up":
        return "Going Up"
      case "down":
        return "Going Down"
      default:
        return "Staying Flat"
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-gain"
      case "down":
        return "text-loss"
      default:
        return "text-muted-foreground"
    }
  }

  const getMomentumColor = (momentum: number) => {
    if (momentum >= 70) return "bg-gain"
    if (momentum >= 40) return "bg-yellow-500"
    return "bg-loss"
  }

  const getMomentumLabel = (momentum: number) => {
    if (momentum >= 70) return "Strong"
    if (momentum >= 40) return "Mixed"
    return "Weak"
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-foreground" />
            </div>
            <div className="text-left">
              <CardTitle className="text-lg font-semibold text-foreground">What's Hot & What's Not</CardTitle>
              <p className="text-sm text-muted-foreground">See which types of businesses are doing well right now</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{industryTrends.length} industries</span>
            {expanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
            )}
          </div>
        </button>
      </CardHeader>
      {expanded && (
        <CardContent className="pt-0">
          <div className="divide-y divide-border">
            {industryTrends.map((industry) => (
              <div key={industry.sector} className="py-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getTrendIcon(industry.trend)}
                    <div>
                      <p className="font-semibold text-foreground">{industry.sector}</p>
                      <div className="flex items-center gap-2">
                        <span className={cn("text-sm font-medium", getTrendColor(industry.trend))}>
                          {getTrendLabel(industry.trend)} ({industry.weekChange >= 0 ? "+" : ""}
                          {industry.weekChange}% this week)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-1">Strength</p>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-16 bg-secondary rounded-full overflow-hidden">
                          <div
                            className={cn("h-full rounded-full", getMomentumColor(industry.momentum))}
                            style={{ width: `${industry.momentum}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">
                          {getMomentumLabel(industry.momentum)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-2">Top stocks in this industry:</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {industry.topStocks.map((ticker) => (
                    <span key={ticker} className="text-xs px-2 py-1 rounded bg-secondary text-foreground font-medium">
                      {ticker}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">What's happening</p>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{industry.analysis}</p>

                <div className="bg-secondary/50 rounded-lg p-3">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">What this means for you:</span> {industry.opportunity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  )
}
