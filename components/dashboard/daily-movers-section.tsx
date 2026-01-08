"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { marketMovers } from "@/lib/mock-data"

export function DailyMoversSection() {
  const [activeTab, setActiveTab] = useState<"gainers" | "losers">("gainers")
  const data = activeTab === "gainers" ? marketMovers.gainers : marketMovers.losers

  return (
    <div>
      {/* Header with tabs */}
      <div className="flex items-center gap-6 mb-4">
        <h2 className="text-lg font-semibold text-foreground">Market Movers</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("gainers")}
            className={cn(
              "text-sm font-medium transition-colors",
              activeTab === "gainers" ? "text-gain" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Gainers
          </button>
          <button
            onClick={() => setActiveTab("losers")}
            className={cn(
              "text-sm font-medium transition-colors",
              activeTab === "losers" ? "text-loss" : "text-muted-foreground hover:text-foreground",
            )}
          >
            Losers
          </button>
        </div>
      </div>

      {/* Stock list */}
      <div className="divide-y divide-border">
        {data.map((stock) => (
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
    </div>
  )
}
