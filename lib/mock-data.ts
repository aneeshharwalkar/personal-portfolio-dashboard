export const portfolioData = {
  totalValue: 284756.32,
  todayPL: 2341.56,
  todayPLPercent: 0.83,
  allTimePL: 48392.18,
  allTimePLPercent: 20.47,
  sparklineData: [
    { value: 270000 },
    { value: 268500 },
    { value: 272000 },
    { value: 275500 },
    { value: 273000 },
    { value: 278000 },
    { value: 276500 },
    { value: 280000 },
    { value: 282500 },
    { value: 284756 },
  ],
}

export const marketMovers = {
  gainers: [
    {
      ticker: "NVDA",
      name: "NVIDIA Corporation",
      price: 875.32,
      change: 8.45,
      volume: "52.3M",
      reason: "New AI chip announcement beat expectations",
    },
    {
      ticker: "TSLA",
      name: "Tesla Inc",
      price: 245.67,
      change: 6.23,
      volume: "98.7M",
      reason: "Record vehicle deliveries reported this quarter",
    },
    {
      ticker: "META",
      name: "Meta Platforms",
      price: 512.89,
      change: 5.12,
      volume: "23.4M",
      reason: "Strong ad revenue growth from Reels",
    },
    {
      ticker: "AMD",
      name: "Advanced Micro Devices",
      price: 178.45,
      change: 4.87,
      volume: "45.2M",
      reason: "Gained market share from Intel in data centers",
    },
    {
      ticker: "PLTR",
      name: "Palantir Technologies",
      price: 24.56,
      change: 4.32,
      volume: "67.8M",
      reason: "Won major government AI contract",
    },
  ],
  losers: [
    {
      ticker: "INTC",
      name: "Intel Corporation",
      price: 31.23,
      change: -5.67,
      volume: "78.9M",
      reason: "Lost market share to AMD and falling behind in AI",
    },
    {
      ticker: "BA",
      name: "Boeing Company",
      price: 178.9,
      change: -4.23,
      volume: "12.3M",
      reason: "New safety concerns and production delays",
    },
    {
      ticker: "DIS",
      name: "Walt Disney Co",
      price: 98.76,
      change: -3.89,
      volume: "15.6M",
      reason: "Streaming subscriber growth slowing down",
    },
    {
      ticker: "NKE",
      name: "Nike Inc",
      price: 87.34,
      change: -3.45,
      volume: "8.9M",
      reason: "Weak sales in China and inventory buildup",
    },
    {
      ticker: "PYPL",
      name: "PayPal Holdings",
      price: 62.45,
      change: -2.98,
      volume: "19.2M",
      reason: "Losing ground to Apple Pay and other competitors",
    },
  ],
}

export const personalMovers = [
  {
    ticker: "AAPL",
    name: "Apple Inc",
    price: 189.45,
    change: 2.34,
    dailyPL: 468.0,
    isBest: true,
    reason: "iPhone 16 pre-orders breaking records",
  },
  {
    ticker: "MSFT",
    name: "Microsoft Corp",
    price: 425.67,
    change: 1.89,
    dailyPL: 756.0,
    isBest: false,
    reason: "Copilot AI driving Office 365 subscriptions",
  },
  {
    ticker: "GOOGL",
    name: "Alphabet Inc",
    price: 141.23,
    change: 1.45,
    dailyPL: 290.0,
    isBest: false,
    reason: "YouTube ad revenue exceeded forecasts",
  },
  {
    ticker: "AMZN",
    name: "Amazon.com Inc",
    price: 185.9,
    change: -0.78,
    dailyPL: -156.0,
    isBest: false,
    reason: "AWS growth slowing as companies cut cloud spending",
  },
  {
    ticker: "JPM",
    name: "JPMorgan Chase",
    price: 198.45,
    change: -1.23,
    dailyPL: -492.0,
    isWorst: true,
    reason: "Interest rate concerns hurting bank profits",
  },
]

export const newsItems = [
  {
    id: 1,
    ticker: "AAPL",
    headline: "Apple Announces New AI Features Coming to iPhone 16",
    source: "Bloomberg",
    timeAgo: "2h ago",
    summary:
      "Apple revealed a suite of new AI-powered features that will be exclusive to the iPhone 16 lineup, including enhanced Siri capabilities.",
  },
  {
    id: 2,
    ticker: "MSFT",
    headline: "Microsoft Azure Revenue Surges 29% in Q4",
    source: "Reuters",
    timeAgo: "4h ago",
    summary:
      "Microsoft's cloud computing division continues its strong growth trajectory, beating analyst expectations for the quarter.",
  },
  {
    id: 3,
    ticker: "GOOGL",
    headline: "Google DeepMind Achieves Breakthrough in Protein Folding",
    source: "TechCrunch",
    timeAgo: "6h ago",
    summary:
      "The research division announced significant advances that could accelerate drug discovery and medical research.",
  },
  {
    id: 4,
    ticker: "AMZN",
    headline: "Amazon Expands Same-Day Delivery to 15 New Cities",
    source: "CNBC",
    timeAgo: "8h ago",
    summary:
      "The e-commerce giant continues to invest heavily in logistics infrastructure to maintain competitive advantage.",
  },
]

export const watchlist = [
  {
    ticker: "SMCI",
    name: "Super Micro Computer",
    price: 745.23,
    change: 3.45,
    tag: "Momentum",
    note: "Breaking out of consolidation range",
  },
  {
    ticker: "ARM",
    name: "ARM Holdings",
    price: 156.78,
    change: 2.12,
    tag: "Growth",
    note: "Strong AI chip demand catalyst",
  },
  {
    ticker: "CRWD",
    name: "CrowdStrike Holdings",
    price: 312.45,
    change: -1.23,
    tag: "Oversold",
    note: "Technical bounce opportunity",
  },
  {
    ticker: "SNOW",
    name: "Snowflake Inc",
    price: 178.9,
    change: -0.89,
    tag: "Value",
    note: "Trading below 52-week average",
  },
]

export const upcomingEarnings = [
  { ticker: "AAPL", name: "Apple Inc", date: "Jan 30, 2026", time: "After Hours", lastEPS: 2.18, estimate: 2.35 },
  { ticker: "MSFT", name: "Microsoft Corp", date: "Jan 30, 2026", time: "After Hours", lastEPS: 2.99, estimate: 3.12 },
  { ticker: "GOOGL", name: "Alphabet Inc", date: "Feb 4, 2026", time: "After Hours", lastEPS: 1.89, estimate: 2.05 },
  { ticker: "AMZN", name: "Amazon.com Inc", date: "Feb 6, 2026", time: "After Hours", lastEPS: 1.43, estimate: 1.52 },
  { ticker: "META", name: "Meta Platforms", date: "Feb 5, 2026", time: "After Hours", lastEPS: 5.16, estimate: 5.45 },
]

export const diversitySuggestions = [
  {
    ticker: "VZ",
    name: "Verizon Communications",
    price: 42.18,
    change: 0.45,
    sector: "Telecommunications",
    reason: "Your portfolio lacks telecom exposure. VZ offers 6.5% dividend yield for income diversification.",
    matchScore: 92,
  },
  {
    ticker: "JNJ",
    name: "Johnson & Johnson",
    price: 156.34,
    change: 0.23,
    sector: "Healthcare",
    reason: "Add defensive healthcare exposure. JNJ has 62 years of consecutive dividend increases.",
    matchScore: 88,
  },
  {
    ticker: "XOM",
    name: "Exxon Mobil",
    price: 104.56,
    change: 1.12,
    sector: "Energy",
    reason: "Energy sector underrepresented. XOM provides inflation hedge and strong cash flow.",
    matchScore: 85,
  },
  {
    ticker: "PG",
    name: "Procter & Gamble",
    price: 168.9,
    change: -0.34,
    sector: "Consumer Staples",
    reason: "Consumer staples missing from portfolio. PG offers stability during market volatility.",
    matchScore: 82,
  },
  {
    ticker: "NEE",
    name: "NextEra Energy",
    price: 72.45,
    change: 0.89,
    sector: "Utilities",
    reason: "Utilities provide portfolio ballast. NEE is a leader in renewable energy growth.",
    matchScore: 79,
  },
]

export const relatedSuggestions = [
  {
    ticker: "CRM",
    name: "Salesforce Inc",
    price: 312.45,
    change: 2.34,
    relatedTo: "MSFT",
    reason: "Enterprise software like MSFT. Strong AI integration and cloud growth trajectory.",
    matchScore: 94,
  },
  {
    ticker: "AVGO",
    name: "Broadcom Inc",
    price: 168.9,
    change: 3.12,
    relatedTo: "AAPL",
    reason: "Key Apple supplier. Benefits from iPhone demand and AI chip expansion.",
    matchScore: 91,
  },
  {
    ticker: "SHOP",
    name: "Shopify Inc",
    price: 89.23,
    change: 1.45,
    relatedTo: "AMZN",
    reason: "E-commerce exposure like AMZN. Enables small business digital transformation.",
    matchScore: 87,
  },
  {
    ticker: "UBER",
    name: "Uber Technologies",
    price: 78.56,
    change: 0.67,
    relatedTo: "GOOGL",
    reason: "Advertising and mapping synergies with GOOGL. Strong mobility network effects.",
    matchScore: 84,
  },
  {
    ticker: "V",
    name: "Visa Inc",
    price: 289.34,
    change: 0.98,
    relatedTo: "JPM",
    reason: "Payments exposure complementing JPM. Benefits from digital transaction growth.",
    matchScore: 81,
  },
]

export const aiMarketSummary = {
  summary: `Good news! Your investments are doing well today - you're up $2,341 (0.83%). This is better than the overall market. Your Apple and Microsoft stocks are the main reason for this gain. Tech companies are doing really well right now because everyone is excited about AI. However, your bank stock (JPMorgan) lost some money today because banks in general are having a tough time.`,
  keyInsights: [
    "Your money is mostly in tech companies (72%). That's like putting most of your eggs in one basket - risky if tech has a bad day.",
    "Big tech companies will share their earnings reports next week. This could make stock prices jump up or down.",
    "Interest rates are affecting bank stocks negatively right now.",
  ],
  portfolioActions: [
    "Think about selling some of your Apple or Microsoft shares to spread your money around more.",
    "Consider buying stocks in healthcare or utility companies - they tend to be more stable when markets get rocky.",
    "Wait until JPMorgan shares their earnings report before deciding whether to sell that stock.",
  ],
}

export const sellSignals = [
  {
    ticker: "JPM",
    name: "JPMorgan Chase",
    price: 198.45,
    change: -1.23,
    currentValue: 39690,
    gainLoss: -8.2,
    signal: "THINK ABOUT SELLING",
    urgency: "medium",
    reasons: [
      "This stock has lost 8.2% of its value since you bought it, and it keeps going down.",
      "Banks are struggling right now because of how interest rates are set up.",
      "Their earnings report is coming soon and might show disappointing results.",
    ],
    recommendation:
      "You might want to sell half of this stock now to limit your losses. Use that money to buy something safer.",
  },
  {
    ticker: "AMZN",
    name: "Amazon.com Inc",
    price: 185.9,
    change: -0.78,
    currentValue: 37180,
    gainLoss: 12.4,
    signal: "GOOD TIME TO TAKE SOME PROFIT",
    urgency: "low",
    reasons: [
      "You've made 12.4% profit on this stock - nice work!",
      "The stock price is near a point where it often stops going up.",
      "Amazon's cloud business is growing slower than before.",
    ],
    recommendation:
      "Consider selling about a quarter of your shares to lock in your profits. Keep the rest for long-term growth.",
  },
  {
    ticker: "GOOGL",
    name: "Alphabet Inc",
    price: 141.23,
    change: 1.45,
    currentValue: 28246,
    gainLoss: 18.7,
    signal: "KEEP AN EYE ON IT",
    urgency: "low",
    reasons: [
      "You're up 18.7% which is great, but there are some concerns ahead.",
      "The government is investigating Google which could affect the stock.",
      "New AI tools like ChatGPT are competing with Google Search.",
    ],
    recommendation:
      "Hold onto it for now, but set a mental note to sell if it drops below $130 to protect your profits.",
  },
]

export const buyRecommendations = [
  {
    ticker: "AVGO",
    name: "Broadcom Inc",
    price: 168.9,
    change: 3.12,
    targetPrice: 195.0,
    upside: 15.5,
    signal: "GREAT OPPORTUNITY",
    urgency: "high",
    reasons: [
      "This company makes chips for AI - one of the hottest areas in tech right now.",
      "They just bought another big company that makes them even stronger.",
      "They pay you money every year just for owning the stock (dividends) and keep increasing it.",
    ],
    recommendation:
      "This could be a good stock to buy. It works well with your Apple stock since Broadcom supplies parts to Apple.",
  },
  {
    ticker: "UNH",
    name: "UnitedHealth Group",
    price: 524.67,
    change: 0.89,
    targetPrice: 590.0,
    upside: 12.5,
    signal: "WORTH BUYING",
    urgency: "medium",
    reasons: [
      "Healthcare stocks help balance out your tech-heavy portfolio.",
      "More people are getting older and need healthcare - this company benefits from that.",
      "Their business has been growing steadily at 15% per year.",
    ],
    recommendation:
      "Adding this would give you protection when tech stocks have bad days. Healthcare tends to stay stable.",
  },
  {
    ticker: "LLY",
    name: "Eli Lilly",
    price: 782.34,
    change: 2.45,
    targetPrice: 900.0,
    upside: 15.0,
    signal: "WORTH BUYING",
    urgency: "medium",
    reasons: [
      "They make the popular weight loss drugs everyone is talking about (Mounjaro, Zepbound).",
      "Demand for their drugs is so high they can't make enough.",
      "They're working on Alzheimer's treatments that could be approved soon.",
    ],
    recommendation:
      "Start with a small amount and buy more if the price dips. This is a solid long-term bet on healthcare.",
  },
]

export const industryTrends = [
  {
    sector: "Artificial Intelligence",
    trend: "up",
    momentum: 94,
    weekChange: 8.7,
    topStocks: ["NVDA", "AMD", "AVGO"],
    analysis:
      "AI is the hottest thing in investing right now. Big tech companies are spending billions building AI systems, and they need special computer chips to do it. These chip companies are seeing huge demand. You have some AI exposure through Microsoft and Google, but no direct investment in the chip makers.",
    opportunity: "Consider buying NVIDIA or AMD to get direct exposure to the AI boom.",
  },
  {
    sector: "Healthcare & Biotech",
    trend: "up",
    momentum: 78,
    weekChange: 3.2,
    topStocks: ["LLY", "UNH", "ABBV"],
    analysis:
      "Weight loss drugs are creating a huge new market - everyone wants them. Healthcare stocks also tend to hold their value when the economy slows down. Right now, you have zero money in healthcare stocks, which is a gap worth filling.",
    opportunity: "UnitedHealth or Eli Lilly would add stability and growth to your portfolio.",
  },
  {
    sector: "Financials",
    trend: "down",
    momentum: 34,
    weekChange: -2.8,
    topStocks: ["JPM", "BAC", "GS"],
    analysis:
      "Banks are having a tough time right now. The way interest rates are set up makes it harder for them to make money on loans. This is why your JPMorgan stock has been struggling - it's not just that company, it's the whole banking industry.",
    opportunity: "Consider reducing your bank stock holdings until the situation improves.",
  },
  {
    sector: "Clean Energy",
    trend: "up",
    momentum: 72,
    weekChange: 4.5,
    topStocks: ["NEE", "ENPH", "FSLR"],
    analysis:
      "The government is giving big subsidies to solar and clean energy companies. This is helping these stocks grow. They're also seen as environmentally responsible investments.",
    opportunity: "NextEra Energy gives you clean energy exposure with the stability of a utility company.",
  },
  {
    sector: "Consumer Discretionary",
    trend: "neutral",
    momentum: 52,
    weekChange: 0.3,
    topStocks: ["AMZN", "TSLA", "HD"],
    analysis:
      "Spending is mixed - wealthy people are still buying, but average consumers are tightening their belts. Online shopping growth has slowed down since the pandemic rush. Your Amazon stock might face some pressure.",
    opportunity: "Keep what you have but don't add more to this area right now.",
  },
]

// Mock data for stock search
export const searchableStocks = [
  { ticker: "AAPL", name: "Apple Inc", sector: "Technology" },
  { ticker: "MSFT", name: "Microsoft Corp", sector: "Technology" },
  { ticker: "GOOGL", name: "Alphabet Inc", sector: "Technology" },
  { ticker: "AMZN", name: "Amazon.com Inc", sector: "Consumer Discretionary" },
  { ticker: "NVDA", name: "NVIDIA Corporation", sector: "Technology" },
  { ticker: "META", name: "Meta Platforms", sector: "Technology" },
  { ticker: "TSLA", name: "Tesla Inc", sector: "Consumer Discretionary" },
  { ticker: "JPM", name: "JPMorgan Chase", sector: "Financials" },
  { ticker: "JNJ", name: "Johnson & Johnson", sector: "Healthcare" },
  { ticker: "V", name: "Visa Inc", sector: "Financials" },
  { ticker: "WMT", name: "Walmart Inc", sector: "Consumer Staples" },
  { ticker: "PG", name: "Procter & Gamble", sector: "Consumer Staples" },
  { ticker: "MA", name: "Mastercard Inc", sector: "Financials" },
  { ticker: "UNH", name: "UnitedHealth Group", sector: "Healthcare" },
  { ticker: "HD", name: "Home Depot", sector: "Consumer Discretionary" },
  { ticker: "DIS", name: "Walt Disney Co", sector: "Communication Services" },
  { ticker: "BAC", name: "Bank of America", sector: "Financials" },
  { ticker: "ADBE", name: "Adobe Inc", sector: "Technology" },
  { ticker: "NFLX", name: "Netflix Inc", sector: "Communication Services" },
  { ticker: "CRM", name: "Salesforce Inc", sector: "Technology" },
]

// Function to get stock details (mock)
export function getStockDetails(ticker: string) {
  const stockData: Record<string, any> = {
    AAPL: {
      ticker: "AAPL",
      name: "Apple Inc",
      price: 189.45,
      change: 2.34,
      changePercent: 1.25,
      volume: "45.2M",
      marketCap: "2.9T",
      sector: "Technology",
      sparklineData: [
        { value: 185, date: "2024-01-01" },
        { value: 186, date: "2024-01-02" },
        { value: 184, date: "2024-01-03" },
        { value: 187, date: "2024-01-04" },
        { value: 188, date: "2024-01-05" },
        { value: 189, date: "2024-01-06" },
        { value: 190, date: "2024-01-07" },
        { value: 189, date: "2024-01-08" },
        { value: 188, date: "2024-01-09" },
        { value: 189.45, date: "2024-01-10" },
      ],
      aiSummary: "Apple is showing strong momentum driven by iPhone 16 pre-orders breaking records. The company's services revenue continues to grow, and their AI integration strategy is gaining investor confidence. However, there are concerns about slowing growth in China and potential regulatory challenges.",
      keyInsights: [
        "iPhone 16 pre-orders are exceeding expectations, driving revenue growth",
        "Services segment now represents over 25% of total revenue",
        "New AI features in iOS 18 are creating competitive advantages",
        "China market exposure remains a risk factor",
      ],
      news: [
        {
          id: 1,
          headline: "Apple Announces New AI Features Coming to iPhone 16",
          source: "Bloomberg",
          timeAgo: "2h ago",
          summary: "Apple revealed a suite of new AI-powered features that will be exclusive to the iPhone 16 lineup, including enhanced Siri capabilities.",
        },
        {
          id: 2,
          headline: "Apple Services Revenue Hits Record High",
          source: "Reuters",
          timeAgo: "5h ago",
          summary: "Apple's services division, including App Store and iCloud, reported record quarterly revenue of $23.1 billion.",
        },
        {
          id: 3,
          headline: "Analysts Raise Price Target on Strong iPhone Demand",
          source: "CNBC",
          timeAgo: "8h ago",
          summary: "Multiple analysts increased their price targets for Apple following stronger-than-expected iPhone 16 pre-order numbers.",
        },
      ],
    },
    MSFT: {
      ticker: "MSFT",
      name: "Microsoft Corp",
      price: 425.67,
      change: 1.89,
      changePercent: 0.45,
      volume: "28.5M",
      marketCap: "3.2T",
      sector: "Technology",
      sparklineData: [
        { value: 420, date: "2024-01-01" },
        { value: 422, date: "2024-01-02" },
        { value: 421, date: "2024-01-03" },
        { value: 423, date: "2024-01-04" },
        { value: 424, date: "2024-01-05" },
        { value: 425, date: "2024-01-06" },
        { value: 426, date: "2024-01-07" },
        { value: 425, date: "2024-01-08" },
        { value: 424, date: "2024-01-09" },
        { value: 425.67, date: "2024-01-10" },
      ],
      aiSummary: "Microsoft continues to benefit from strong Azure cloud growth and Copilot AI integration driving Office 365 subscriptions. The company's enterprise focus and AI investments position it well for long-term growth, though competition in cloud services remains intense.",
      keyInsights: [
        "Azure revenue surged 29% in Q4, beating expectations",
        "Copilot AI is driving increased Office 365 adoption",
        "Enterprise customers are accelerating cloud migration",
        "Gaming division showing strong performance",
      ],
      news: [
        {
          id: 1,
          headline: "Microsoft Azure Revenue Surges 29% in Q4",
          source: "Reuters",
          timeAgo: "4h ago",
          summary: "Microsoft's cloud computing division continues its strong growth trajectory, beating analyst expectations for the quarter.",
        },
        {
          id: 2,
          headline: "Microsoft Copilot Gains Enterprise Traction",
          source: "TechCrunch",
          timeAgo: "7h ago",
          summary: "Enterprise adoption of Microsoft Copilot AI assistant is accelerating, with over 1 million paid users added this quarter.",
        },
      ],
    },
    NVDA: {
      ticker: "NVDA",
      name: "NVIDIA Corporation",
      price: 875.32,
      change: 8.45,
      changePercent: 0.97,
      volume: "52.3M",
      marketCap: "2.1T",
      sector: "Technology",
      sparklineData: [
        { value: 850, date: "2024-01-01" },
        { value: 860, date: "2024-01-02" },
        { value: 855, date: "2024-01-03" },
        { value: 870, date: "2024-01-04" },
        { value: 865, date: "2024-01-05" },
        { value: 875, date: "2024-01-06" },
        { value: 880, date: "2024-01-07" },
        { value: 875, date: "2024-01-08" },
        { value: 870, date: "2024-01-09" },
        { value: 875.32, date: "2024-01-10" },
      ],
      aiSummary: "NVIDIA is riding the AI wave with unprecedented demand for its data center GPUs. New AI chip announcements have exceeded expectations, driving strong revenue growth. The company dominates the AI infrastructure market but faces supply constraints.",
      keyInsights: [
        "New AI chip announcement beat expectations, driving stock higher",
        "Data center revenue up 409% year-over-year",
        "Strong demand from cloud providers and enterprises",
        "Supply constraints limiting growth potential",
      ],
      news: [
        {
          id: 1,
          headline: "NVIDIA Unveils Next-Gen AI Chip Architecture",
          source: "Bloomberg",
          timeAgo: "1h ago",
          summary: "NVIDIA announced its latest AI chip architecture, promising 3x performance improvements for AI workloads.",
        },
        {
          id: 2,
          headline: "NVIDIA Data Center Revenue Soars on AI Demand",
          source: "Reuters",
          timeAgo: "3h ago",
          summary: "Data center revenue reached $47.5 billion, driven by insatiable demand for AI training infrastructure.",
        },
      ],
    },
  }

  // Default/fallback data
  const defaultData = {
    ticker: ticker.toUpperCase(),
    name: `${ticker.toUpperCase()} Corporation`,
    price: 100 + Math.random() * 200,
    change: (Math.random() - 0.5) * 10,
    changePercent: (Math.random() - 0.5) * 5,
    volume: `${(Math.random() * 50 + 10).toFixed(1)}M`,
    marketCap: `${(Math.random() * 500 + 100).toFixed(1)}B`,
    sector: "Technology",
    sparklineData: Array.from({ length: 10 }, (_, i) => ({
      value: 100 + Math.random() * 50,
      date: `2024-01-${String(i + 1).padStart(2, "0")}`,
    })),
    aiSummary: `${ticker.toUpperCase()} is showing mixed signals. The stock has been volatile recently, with investors weighing various factors including earnings expectations, market conditions, and sector trends.`,
    keyInsights: [
      "Recent trading activity shows increased volatility",
      "Analysts are monitoring upcoming earnings closely",
      "Sector trends may impact performance",
      "Market sentiment is mixed",
    ],
    news: [
      {
        id: 1,
        headline: `${ticker.toUpperCase()} Reports Strong Quarterly Results`,
        source: "Financial News",
        timeAgo: "2h ago",
        summary: `Recent developments in ${ticker.toUpperCase()} are being closely watched by investors and analysts.`,
      },
    ],
  }

  return stockData[ticker.toUpperCase()] || defaultData
}
