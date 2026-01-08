"use client"

import { cn } from "@/lib/utils"
import { watchlist } from "@/lib/mock-data"
import Link from "next/link"

export function WatchlistSection() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground mb-4">Watchlist</h2>

      <div className="divide-y divide-border">
        {watchlist.map((stock) => (
          <Link key={stock.ticker} href={`/search/${stock.ticker}`}>
            <div className="py-4 hover:bg-secondary/30 -mx-3 px-3 rounded-lg transition-colors cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground">{stock.ticker.slice(0, 2)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{stock.ticker}</p>
                    <p className="text-sm text-muted-foreground">{stock.name}</p>
                    {stock.tag && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground mt-1 inline-block">
                        {stock.tag}
                      </span>
                    )}
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
              {stock.note && (
                <p className="text-sm text-muted-foreground mt-2 pl-14">{stock.note}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
