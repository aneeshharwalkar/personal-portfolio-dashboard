/**
 * Next.js API Route for Stock Data
 * 
 * This route acts as a proxy to fetch stock data server-side,
 * keeping API keys secure and allowing caching.
 */

import { NextRequest, NextResponse } from "next/server"
import { getStockQuote, getStockHistory, getCompanyProfile } from "@/lib/api/stock-api"
import { getCompanyNews } from "@/lib/api/news-api"
import { generateStockSummary } from "@/lib/api/ai-insights"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ ticker: string }> }
) {
  const { ticker } = await params
  
  if (!ticker) {
    return NextResponse.json({ error: "Ticker is required" }, { status: 400 })
  }

  try {
    // Fetch all data in parallel
    const [quote, history, profile, news] = await Promise.all([
      getStockQuote(ticker),
      getStockHistory(ticker),
      getCompanyProfile(ticker),
      getCompanyNews(ticker),
    ])

    // Generate AI summary if we have data
    let aiSummary = null
    if (quote && news) {
      aiSummary = await generateStockSummary(ticker, quote, news)
    }

    // Return data in structure expected by frontend
    return NextResponse.json({
      data: {
        ticker: ticker.toUpperCase(),
        quote,
        history,
        profile,
        news: news || [],
        aiSummary: aiSummary || null,
      },
      message: (!quote && !history) ? "API keys not configured. Using mock data." : undefined,
    })
  } catch (error) {
    console.error("Error fetching stock data:", error)
    return NextResponse.json(
      { error: "Failed to fetch stock data" },
      { status: 500 }
    )
  }
}
