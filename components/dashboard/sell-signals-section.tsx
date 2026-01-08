"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { sellSignals } from "@/lib/mock-data"
import { ChevronDown, ChevronUp, TrendingDown, AlertTriangle } from "lucide-react"

export function SellSignalsSection() {
  const [expanded, setExpanded] = useState(false)

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-loss/20 text-loss"
      case "medium":
        return "bg-yellow-500/20 text-yellow-500"
      default:
        return "bg-secondary text-muted-foreground"
    }
  }

  const getUrgencyLabel = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "Act Soon"
      case "medium":
        return "Worth Considering"
      default:
        return "No Rush"
    }
  }

  const getSignalColor = (signal: string) => {
    if (signal.includes("SELLING")) return "text-loss"
    if (signal.includes("PROFIT")) return "text-yellow-500"
    return "text-muted-foreground"
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-loss/20 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-loss" />
            </div>
            <div className="text-left">
              <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                Stocks to Think About Selling
                <AlertTriangle className="w-4 h-4 text-loss" />
              </CardTitle>
              <p className="text-sm text-muted-foreground">These stocks might be worth selling or reducing</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm px-2 py-1 rounded-full bg-loss/20 text-loss font-medium">
              {sellSignals.length} stocks
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
            {sellSignals.map((stock) => (
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
                    <p className={cn("text-sm font-medium", stock.gainLoss >= 0 ? "text-gain" : "text-loss")}>
                      {stock.gainLoss >= 0 ? "Up " : "Down "}
                      {Math.abs(stock.gainLoss).toFixed(1)}%
                    </p>
                  </div>
                </div>

                <div className={cn("text-sm font-semibold mb-3", getSignalColor(stock.signal))}>{stock.signal}</div>

                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Why?</p>
                <ul className="space-y-1.5 mb-4">
                  {stock.reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 shrink-0" />
                      {reason}
                    </li>
                  ))}
                </ul>

                <div className="bg-secondary/50 rounded-lg p-3">
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
