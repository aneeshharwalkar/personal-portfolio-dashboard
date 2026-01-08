"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { aiMarketSummary } from "@/lib/mock-data"
import { Brain, Lightbulb, Target, HelpCircle } from "lucide-react"

export function AISummarySection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <Brain className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <CardTitle className="text-xl font-semibold text-foreground">Your Daily Market Summary</CardTitle>
            <p className="text-sm text-muted-foreground">Here's what's happening with your money today</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Summary */}
        <p className="text-foreground leading-relaxed text-base">{aiMarketSummary.summary}</p>

        {/* Key Insights */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-muted-foreground" />
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Things to Know</h4>
          </div>
          <ul className="space-y-2">
            {aiMarketSummary.keyInsights.map((insight, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-2 shrink-0" />
                {insight}
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Actions */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-muted-foreground" />
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">What You Could Do</h4>
          </div>
          <ul className="space-y-2">
            {aiMarketSummary.portfolioActions.map((action, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-medium">{index + 1}.</span>
                {action}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-start gap-2 pt-2 border-t border-border">
          <HelpCircle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
          <p className="text-xs text-muted-foreground">
            This is AI-generated advice based on market data. Always do your own research or talk to a financial advisor
            before making big decisions.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
