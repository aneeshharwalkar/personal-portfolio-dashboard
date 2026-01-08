# API Integration Guide for Portfolio Dashboard

## Overview
This guide covers how to integrate real APIs for stock data, news, and AI market insights into your portfolio dashboard.

## Recommended APIs

### 1. Stock Market Data APIs

#### **Alpha Vantage** (Free Tier Available)
- **Website**: https://www.alphavantage.co/
- **Free Tier**: 5 API calls/minute, 500 calls/day
- **Features**: Real-time quotes, historical data, technical indicators
- **Best For**: Stock prices, historical data, basic technical analysis

#### **Yahoo Finance API** (Free, Unofficial)
- **Package**: `yahoo-finance2` (npm)
- **Features**: Real-time quotes, historical data, company info
- **Best For**: Quick implementation, comprehensive data
- **Note**: Unofficial API, may have rate limits

#### **Polygon.io** (Paid, Free Trial)
- **Website**: https://polygon.io/
- **Free Trial**: Available
- **Features**: Real-time and historical market data, news, options
- **Best For**: Professional-grade data, real-time updates

#### **Finnhub** (Free Tier Available)
- **Website**: https://finnhub.io/
- **Free Tier**: 60 API calls/minute
- **Features**: Real-time quotes, company profiles, news, financials
- **Best For**: News integration, company data

#### **Twelve Data** (Free Tier Available)
- **Website**: https://twelvedata.com/
- **Free Tier**: 800 API calls/day
- **Features**: Real-time quotes, historical data, technical indicators
- **Best For**: Technical analysis, real-time data

### 2. News APIs

#### **NewsAPI** (Free Tier Available)
- **Website**: https://newsapi.org/
- **Free Tier**: 100 requests/day
- **Features**: News articles from various sources, search by keywords
- **Best For**: General news aggregation

#### **Alpha Vantage News & Sentiment**
- **Part of**: Alpha Vantage API
- **Features**: News articles, sentiment analysis
- **Best For**: Stock-specific news with sentiment

#### **Finnhub News**
- **Part of**: Finnhub API
- **Features**: Company-specific news, market news
- **Best For**: Stock-related news

#### **Polygon.io News**
- **Part of**: Polygon.io API
- **Features**: Market news, company-specific news
- **Best For**: Real-time financial news

### 3. AI Market Insights APIs

#### **OpenAI GPT-4** (Paid)
- **Website**: https://openai.com/
- **Features**: Generate AI summaries, insights, analysis
- **Best For**: Custom AI summaries and insights
- **Cost**: Pay-per-use

#### **Anthropic Claude** (Paid)
- **Website**: https://www.anthropic.com/
- **Features**: AI-powered analysis and summaries
- **Best For**: High-quality financial analysis

#### **Alpha Vantage News Sentiment**
- **Part of**: Alpha Vantage API
- **Features**: Built-in sentiment analysis
- **Best For**: Quick sentiment insights

#### **Custom Solution**: Build your own using:
- **OpenAI API** + **Stock Data** = Custom AI insights
- **LangChain** + **Stock APIs** = Advanced analysis pipeline

## Implementation Steps

### Step 1: Set Up Environment Variables

Create a `.env.local` file in your project root:

```env
# Alpha Vantage
ALPHA_VANTAGE_API_KEY=your_key_here

# Finnhub
FINNHUB_API_KEY=your_key_here

# OpenAI (for AI insights)
OPENAI_API_KEY=your_key_here

# NewsAPI
NEWS_API_KEY=your_key_here

# Polygon.io
POLYGON_API_KEY=your_key_here
```

**Important**: Add `.env.local` to your `.gitignore` file!

### Step 2: Install Required Packages

```bash
npm install axios
# or
pnpm add axios

# For Yahoo Finance (unofficial but free)
npm install yahoo-finance2

# For OpenAI
npm install openai

# For caching (recommended)
npm install node-cache
```

### Step 3: Create API Service Layer

Create `lib/api/` directory with service files for each API.

### Step 4: Implement Rate Limiting & Caching

- Cache API responses to reduce calls
- Implement rate limiting to stay within free tiers
- Use Next.js API routes as a proxy to hide API keys

## Recommended Architecture

```
Frontend (React Components)
    ↓
Next.js API Routes (/api/*)
    ↓
API Service Layer (lib/api/)
    ↓
External APIs (Alpha Vantage, OpenAI, etc.)
```

This architecture:
- Keeps API keys secure (server-side only)
- Allows caching and rate limiting
- Provides a single interface for components

## Cost Considerations

### Free Tier Options:
1. **Alpha Vantage** + **NewsAPI** + **OpenAI** (small usage)
   - Cost: ~$0-20/month for moderate usage
   - Good for: Personal projects, demos

2. **Finnhub** + **OpenAI**
   - Cost: ~$0-20/month
   - Good for: Stock data + news

### Paid Options:
1. **Polygon.io** ($29-199/month)
   - Professional-grade data
   - Real-time updates
   - Best for: Production apps

2. **Twelve Data** ($8-99/month)
   - Good balance of features and cost
   - Real-time data

## Security Best Practices

1. **Never expose API keys in client-side code**
2. **Use Next.js API routes as a proxy**
3. **Implement rate limiting**
4. **Cache responses to reduce API calls**
5. **Use environment variables for all keys**

## Next Steps Priority

1. **Start with Alpha Vantage** (easiest, free tier)
2. **Add NewsAPI** for general news
3. **Integrate OpenAI** for AI insights (start with small usage)
4. **Add caching** to optimize costs
5. **Upgrade to paid APIs** as needed
