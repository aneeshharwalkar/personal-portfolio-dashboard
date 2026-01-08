/**
 * AI Insights Service
 * 
 * Generates AI-powered market insights and summaries using OpenAI
 * 
 * To use: Install openai package: npm install openai
 */

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || ""

const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 3600000 // 1 hour cache for AI insights

// Dynamic import to avoid errors if package not installed
let OpenAIClient: any = null
try {
  const OpenAI = require("openai")
  OpenAIClient = OpenAI.default || OpenAI
} catch (e) {
  // Package not installed, will use fallback
}

/**
 * Initialize OpenAI client
 */
function getOpenAIClient() {
  if (!OPENAI_API_KEY || !OpenAIClient) {
    return null
  }
  return new OpenAIClient({ apiKey: OPENAI_API_KEY })
}

/**
 * Generate AI summary for a stock
 */
export async function generateStockSummary(
  ticker: string,
  stockData: {
    price: number
    change: number
    changePercent: number
    volume: string
  },
  news: any[] = []
) {
  const cacheKey = `ai-summary-${ticker}`
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  const client = getOpenAIClient()
  if (!client) {
    console.warn("OpenAI API key not set, using mock data")
    return null
  }

  try {
    const newsSummary = news
      .slice(0, 5)
      .map((n) => `- ${n.headline}`)
      .join("\n")

    const prompt = `You are a financial analyst. Provide a concise, easy-to-understand summary about ${ticker} stock.

Current Price: $${stockData.price.toFixed(2)}
Change: ${stockData.change >= 0 ? "+" : ""}${stockData.change.toFixed(2)} (${stockData.changePercent >= 0 ? "+" : ""}${stockData.changePercent.toFixed(2)}%)
Volume: ${stockData.volume}

Recent News:
${newsSummary || "No recent news available"}

Provide:
1. A 2-3 sentence summary of the stock's current situation
2. 3-4 key insights (bullet points)
3. Keep it simple and avoid jargon
4. Focus on what matters to investors

Format as JSON:
{
  "summary": "brief summary here",
  "insights": ["insight 1", "insight 2", "insight 3"]
}`

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini", // Use gpt-4o-mini for cost efficiency, or gpt-4 for better quality
      messages: [
        {
          role: "system",
          content:
            "You are a helpful financial analyst. Provide clear, concise, and accurate market insights. Always respond in valid JSON format.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    const content = completion.choices[0]?.message?.content
    if (!content) {
      return null
    }

    // Parse JSON response
    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const result = JSON.parse(jsonMatch[0])
      cache.set(cacheKey, { data: result, timestamp: Date.now() })
      return result
    }

    return null
  } catch (error) {
    console.error("Error generating AI summary:", error)
    return null
  }
}

/**
 * Generate portfolio-level AI insights
 */
export async function generatePortfolioInsights(
  portfolioData: {
    totalValue: number
    todayPL: number
    todayPLPercent: number
  },
  holdings: any[]
) {
  const cacheKey = `portfolio-insights-${portfolioData.totalValue}`
  const cached = cache.get(cacheKey)
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data
  }

  const client = getOpenAIClient()
  if (!client) {
    return null
  }

  try {
    const holdingsSummary = holdings
      .slice(0, 5)
      .map((h) => `${h.ticker}: ${h.change >= 0 ? "+" : ""}${h.change.toFixed(2)}%`)
      .join(", ")

    const prompt = `Analyze this portfolio performance:

Total Value: $${portfolioData.totalValue.toLocaleString()}
Today's P/L: ${portfolioData.todayPL >= 0 ? "+" : ""}$${Math.abs(portfolioData.todayPL).toLocaleString()} (${portfolioData.todayPLPercent >= 0 ? "+" : ""}${portfolioData.todayPLPercent.toFixed(2)}%)

Top Holdings Performance:
${holdingsSummary}

Provide:
1. A brief summary of today's performance
2. 3-4 key insights about the portfolio
3. Any recommendations or things to watch

Format as JSON:
{
  "summary": "brief summary",
  "insights": ["insight 1", "insight 2", "insight 3"],
  "recommendations": ["recommendation 1", "recommendation 2"]
}`

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful financial advisor. Provide clear, actionable insights. Always respond in valid JSON format.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 600,
    })

    const content = completion.choices[0]?.message?.content
    if (!content) {
      return null
    }

    const jsonMatch = content.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const result = JSON.parse(jsonMatch[0])
      cache.set(cacheKey, { data: result, timestamp: Date.now() })
      return result
    }

    return null
  } catch (error) {
    console.error("Error generating portfolio insights:", error)
    return null
  }
}
