"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { buyRecommendations } from "@/lib/mock-data"
import { ChevronDown, ChevronUp, TrendingUp, Sparkles } from "lucide-react"

export function BuyRecommendationsSection() {
  const [expanded, setExpanded] = useState(false)

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-gain/20 text-gain"
      case "medium":
        return "bg-secondary text-foreground"
      default:
        return "bg-secondary text-muted-foreground"
    }
  }

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "Good Timing"
      case "medium":
        return "Worth Looking At"
      default:
        return "No Rush"
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gain/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-gain" />
            </div>
            <div className="text-left">
              <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                Stocks Worth Buying
                <Sparkles className="w-4 h-4 text-gain" />
              </CardTitle>
              <p className="text-sm text-muted-foreground">These stocks could be good additions to your portfolio</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm px-2 py-1 rounded-full bg-gain/20 text-gain font-medium">
              {buyRecommendations.length} picks
            </span>
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
            {buyRecommendations.map((stock) => (
              <div key={stock.ticker} className="py-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-sm font-bold text-foreground">{stock.ticker.slice(0, 2)}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-foreground text-lg">{stock.ticker}</p>
                        <span
                          className={cn("text-xs px-2 py-0.5 rounded-full font-medium", getUrgencyColor(stock.urgency))}
                        >
                          {getUrgencyLabel(stock.urgency)}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{stock.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">${stock.price.toFixed(2)}</p>
                    <p className="text-sm text-gain">
                      Could reach ${stock.targetPrice.toFixed(0)} (+{stock.upside}%)
                    </p>
                  </div>
                </div>

                <div className="text-sm font-semibold mb-3 text-gain">{stock.signal}</div>

                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Why it's good</p>
                <ul className="space-y-1.5 mb-4">
                  {stock.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-gain mt-2 shrink-0" />
                      {reason}
                    </li>
                  ))}
                </ul>

                <div className="bg-gain/10 rounded-lg p-3">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">What to do:</span> {stock.recommendation}
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
