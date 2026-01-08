import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { newsItems } from "@/lib/mock-data"

export function NewsSection() {
  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground">News on Owned Stocks</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Clean minimal news cards */}
        <div className="space-y-6">
          {newsItems.map((news) => (
            <article key={news.id} className="group cursor-pointer">
              <div className="flex items-start gap-3 mb-1">
                <span className="text-xs font-medium text-muted-foreground">{news.source}</span>
                <span className="text-xs text-muted-foreground">{news.timeAgo}</span>
              </div>
              <h3 className="font-medium text-foreground leading-snug group-hover:underline">{news.headline}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{news.summary}</p>
            </article>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
