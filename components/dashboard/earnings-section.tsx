import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { upcomingEarnings } from "@/lib/mock-data"

export function EarningsSection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-muted-foreground" />
          <CardTitle className="text-lg font-semibold text-foreground">Upcoming Earnings</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="divide-y divide-border">
          {upcomingEarnings.map((earning) => (
            <div
              key={earning.ticker}
              className="flex items-center justify-between py-4 hover:bg-secondary/30 -mx-3 px-3 rounded-lg transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-xs font-bold text-foreground">{earning.ticker.slice(0, 2)}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{earning.ticker}</p>
                  <p className="text-sm text-muted-foreground">{earning.name}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-medium text-foreground">{earning.date}</p>
                <p className="text-sm text-muted-foreground">{earning.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
