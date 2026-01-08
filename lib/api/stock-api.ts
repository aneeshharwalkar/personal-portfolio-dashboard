/**
 * Stock API Service
 * 
 * This file provides functions to fetch real stock data from various APIs.
 * Start with Alpha Vantage (free tier) and expand as needed.
 */

const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY || ""
const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY || ""

// Cache for API responses (in-memory, consider Redis for production)
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 60000 // 1 minute cache

/**
 * Get stock quote from Alpha Vantage
 */
export async function getStockQuote(ticker: string) {
  const cacheKey = `quote-${ticker}`
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  if (!ALPHA_VANTAGE_API_KEY) {
    console.warn("Alpha Vantage API key not set, using mock data")
    return null
  }

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`
    )
    const data = await response.json()
    
    if (data["Error Message"] || data["Note"]) {
      console.error("Alpha Vantage API error:", data)
      return null
    }

    const quote = data["Global Quote"]
    const result = {
      ticker: quote["01. symbol"],
      price: parseFloat(quote["05. price"]),
      change: parseFloat(quote["09. change"]),
      changePercent: parseFloat(quote["10. change percent"].replace("%", "")),
      volume: quote["06. volume"],
      lastUpdate: quote["07. latest trading day"],
    }

    cache.set(cacheKey, { data: result, timestamp: Date.now() })
    return result
  } catch (error) {
    console.error("Error fetching stock quote:", error)
    return null
  }
}

/**
 * Get stock historical data from Alpha Vantage
 */
export async function getStockHistory(ticker: string, interval: "daily" | "weekly" | "monthly" = "daily") {
  const cacheKey = `history-${ticker}-${interval}`
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION * 5) {
    return cached.data
  }

  if (!ALPHA_VANTAGE_API_KEY) {
    return null
  }

  try {
    const functionMap = {
      daily: "TIME_SERIES_DAILY",
      weekly: "TIME_SERIES_WEEKLY",
      monthly: "TIME_SERIES_MONTHLY",
    }

    const response = await fetch(
      `https://www.alphavantage.co/query?function=${functionMap[interval]}&symbol=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`
    )
    const data = await response.json()
    
    if (data["Error Message"] || data["Note"]) {
      return null
    }

    const timeSeries = data[`Time Series (${interval === "daily" ? "Daily" : interval === "weekly" ? "Weekly" : "Monthly"})`]
    const result = Object.entries(timeSeries)
      .slice(0, 30) // Last 30 data points
      .map(([date, values]: [string, any]) => ({
        date,
        value: parseFloat(values["4. close"]),
        open: parseFloat(values["1. open"]),
        high: parseFloat(values["2. high"]),
        low: parseFloat(values["3. low"]),
        close: parseFloat(values["4. close"]),
        volume: parseInt(values["5. volume"]),
      }))
      .reverse()

    cache.set(cacheKey, { data: result, timestamp: Date.now() })
    return result
  } catch (error) {
    console.error("Error fetching stock history:", error)
    return null
  }
}

/**
 * Search for stocks using Finnhub
 */
export async function searchStocks(query: string) {
  if (!FINNHUB_API_KEY) {
    return null
  }

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/search?q=${encodeURIComponent(query)}&token=${FINNHUB_API_KEY}`
    )
    const data = await response.json()
    return data.result || []
  } catch (error) {
    console.error("Error searching stocks:", error)
    return null
  }
}

/**
 * Get company profile from Finnhub
 */
export async function getCompanyProfile(ticker: string) {
  const cacheKey = `profile-${ticker}`
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION * 60) {
    return cached.data
  }

  if (!FINNHUB_API_KEY) {
    return null
  }

  try {
    const response = await fetch(
      `https://finnhub.io/api/v1/stock/profile2?symbol=${ticker}&token=${FINNHUB_API_KEY}`
    )
    const data = await response.json()
    
    cache.set(cacheKey, { data, timestamp: Date.now() })
    return data
  } catch (error) {
    console.error("Error fetching company profile:", error)
    return null
  }
}
