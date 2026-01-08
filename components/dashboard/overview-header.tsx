"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { portfolioData } from "@/lib/mock-data"
import { Area, AreaChart, ResponsiveContainer } from "recharts"

const timeRanges = ["1D", "1W", "1M", "3M", "1Y", "ALL"]

export function OverviewHeader() {
  const [selectedRange, setSelectedRange] = useState("1M")
  const isPositive = portfolioData.todayPL >= 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          ${portfolioData.totalValue.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </h1>

        <p className={cn("text-lg font-medium mt-2", isPositive ? "text-gain" : "text-loss")}>
          {isPositive ? "+" : ""}$
          {Math.abs(portfolioData.todayPL).toLocaleString("en-US", { minimumFractionDigits: 2 })} (
          {isPositive ? "+" : ""}
          {portfolioData.todayPLPercent.toFixed(2)}%)
          <span className="text-muted-foreground font-normal ml-2">Today</span>
        </p>
      </div>

      <div className="h-64 -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={portfolioData.sparklineData}>
            <defs>
              <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
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
              fill="url(#chartGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-6 border-b border-border">
        {timeRanges.map((range) => (
          <button
            key={range}
            onClick={() => setSelectedRange(range)}
            className={cn(
              "pb-3 text-sm font-medium transition-colors relative",
              selectedRange === range ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {range}
            {selectedRange === range && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gain" />}
          </button>
        ))}
      </div>
    </div>
  )
}
