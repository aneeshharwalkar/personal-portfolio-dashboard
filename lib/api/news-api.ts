/**
 * News API Service
 * 
 * Fetches stock-related news from various sources
 */

const NEWS_API_KEY = process.env.NEWS_API_KEY || ""
const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY || ""
const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY || ""

const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 300000 // 5 minutes cache for news

/**
 * Get company news from Finnhub
 */
export async function getCompanyNews(ticker: string, days: number = 7) {
  const cacheKey = `news-${ticker}-${days}`
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  if (!FINNHUB_API_KEY) {
    console.warn("Finnhub API key not set, using mock data")
    return null
  }

  try {
    const to = new Date().toISOString().split("T")[0]
    const from = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

    const response = await fetch(
      `https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=${from}&to=${to}&token=${FINNHUB_API_KEY}`
    )
    const data = await response.json()
    
    if (data.error) {
      console.error("Finnhub API error:", data.error)
      return null
    }

    const formattedNews = (data || []).slice(0, 10).map((article: any) => ({
      id: article.id || Math.random(),
      headline: article.headline,
      source: article.source,
      summary: article.summary || article.headline,
      url: article.url,
      image: article.image,
      timeAgo: formatTimeAgo(article.datetime * 1000),
      publishedAt: new Date(article.datetime * 1000).toISOString(),
    }))

    cache.set(cacheKey, { data: formattedNews, timestamp: Date.now() })
    return formattedNews
  } catch (error) {
    console.error("Error fetching company news:", error)
    return null
  }
}

/**
 * Get general market news from NewsAPI
 */
export async function getMarketNews(query: string = "stock market") {
  const cacheKey = `market-news-${query}`
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  if (!NEWS_API_KEY) {
    return null
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&pageSize=10&apiKey=${NEWS_API_KEY}`
    )
    const data = await response.json()
    
    if (data.status !== "ok") {
      return null
    }

    const formattedNews = data.articles.map((article: any) => ({
      id: article.url,
      headline: article.title,
      source: article.source.name,
      summary: article.description,
      url: article.url,
      image: article.urlToImage,
      timeAgo: formatTimeAgo(new Date(article.publishedAt).getTime()),
      publishedAt: article.publishedAt,
    }))

    cache.set(cacheKey, { data: formattedNews, timestamp: Date.now() })
    return formattedNews
  } catch (error) {
    console.error("Error fetching market news:", error)
    return null
  }
}

/**
 * Get news sentiment from Alpha Vantage
 */
export async function getNewsSentiment(ticker: string) {
  if (!ALPHA_VANTAGE_API_KEY) {
    return null
  }

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${ALPHA_VANTAGE_API_KEY}`
    )
    const data = await response.json()
    
    if (data["Error Message"] || data["Note"]) {
      return null
    }

    return data.feed || []
  } catch (error) {
    console.error("Error fetching news sentiment:", error)
    return null
  }
}

function formatTimeAgo(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000)
  
  if (seconds < 60) return `${seconds}s ago`
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
  return `${Math.floor(seconds / 86400)}d ago`
}
