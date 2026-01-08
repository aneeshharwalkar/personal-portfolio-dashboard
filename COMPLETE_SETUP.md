# Complete Dashboard Setup Checklist

This is your complete checklist to get the portfolio dashboard fully functional with real APIs.

## ✅ Step 1: Basic Setup (Already Done)

- [x] Project structure created
- [x] All components implemented
- [x] Mock data in place
- [x] Navigation working
- [x] All pages functional

## 📦 Step 2: Install Required Packages

Run this command to install the OpenAI package (needed for AI insights):

```bash
npm install openai
# or
pnpm add openai
```

**Note**: The dashboard works without this, but you won't get AI insights.

## 🔑 Step 3: Get API Keys

### Required for Stock Data & News (Free):

1. **Alpha Vantage** (Stock Prices)
   - Visit: https://www.alphavantage.co/support/#api-key
   - Click "Get Free API Key"
   - Sign up (free, no credit card)
   - Copy your API key

2. **Finnhub** (News & Company Data)
   - Visit: https://finnhub.io/register
   - Sign up (free, no credit card)
   - Go to your dashboard
   - Copy your API key

### Optional but Recommended:

3. **OpenAI** (AI Insights)
   - Visit: https://platform.openai.com/api-keys
   - Sign up (requires payment method)
   - Create API key
   - **Cost**: ~$0.01-0.05 per stock analysis
   - **Estimated monthly**: $5-20 for personal use

4. **NewsAPI** (General News - Optional)
   - Visit: https://newsapi.org/register
   - Sign up (free tier: 100 requests/day)
   - Copy your API key

## 📝 Step 4: Create Environment File

1. **Create `.env.local` file** in the project root directory:
   ```bash
   # In your terminal, from project root:
   touch .env.local
   ```

2. **Add your API keys** to `.env.local`:
   ```env
   # Stock Data
   ALPHA_VANTAGE_API_KEY=your_alpha_vantage_key_here
   FINNHUB_API_KEY=your_finnhub_key_here

   # AI Insights (Optional)
   OPENAI_API_KEY=your_openai_key_here

   # News (Optional)
   NEWS_API_KEY=your_newsapi_key_here
   ```

3. **Important**: 
   - Replace `your_*_key_here` with your actual keys
   - Don't add quotes around the keys
   - Don't commit this file to git (it's already in .gitignore)

## 🔄 Step 5: Restart Development Server

1. **Stop your current server** (Ctrl+C or Cmd+C)
2. **Restart it**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

**Important**: Environment variables are only loaded when the server starts, so you must restart!

## ✅ Step 6: Verify It's Working

1. **Go to**: http://localhost:3000/search
2. **Search for a stock**: Type "AAPL" or "MSFT"
3. **Click on the stock** to view details
4. **Check for**:
   - Real stock price (should match current market)
   - Price chart with real data
   - Recent news articles
   - AI summary (if OpenAI key is set)

### What to Expect:

- **With API keys**: Real data, live prices, actual news
- **Without API keys**: Mock data (still works, but not real-time)
- **Partial keys**: Works with what you have, falls back to mock for missing data

## 🐛 Troubleshooting

### "API key not set" in console
- ✅ Check `.env.local` exists in project root
- ✅ Verify keys don't have extra spaces
- ✅ Make sure you restarted the server
- ✅ Check file is named exactly `.env.local` (not `.env`)

### No data showing / Still seeing mock data
- ✅ Check browser console for errors
- ✅ Verify API keys are correct (no typos)
- ✅ Check API service status (Alpha Vantage, Finnhub)
- ✅ Try a different stock ticker
- ✅ Wait a minute (free tiers have rate limits)

### OpenAI errors
- ✅ Make sure you added payment method to OpenAI
- ✅ Check OpenAI usage dashboard
- ✅ Verify API key is active
- ✅ Try using `gpt-4o-mini` (cheaper) - already set in code

### Rate limit errors
- ✅ Free tiers have limits (5 calls/min for Alpha Vantage)
- ✅ Wait a minute and try again
- ✅ The code includes caching to help
- ✅ Consider upgrading to paid tier if needed

## 📊 What Each API Provides

| API | What It Does | Free Tier Limits |
|-----|-------------|------------------|
| **Alpha Vantage** | Stock prices, historical data | 5 calls/min, 500/day |
| **Finnhub** | Company news, profiles, search | 60 calls/min |
| **OpenAI** | AI summaries and insights | Pay-as-you-go |
| **NewsAPI** | General market news | 100 requests/day |

## 💰 Cost Breakdown

### Free Setup:
- Alpha Vantage: **$0** (free tier)
- Finnhub: **$0** (free tier)
- NewsAPI: **$0** (free tier)
- **Total: $0/month**

### With AI Insights:
- Everything above: **$0**
- OpenAI: **~$5-20/month** (depending on usage)
- **Total: ~$5-20/month**

### Production (Paid Tiers):
- Alpha Vantage Pro: **$49.99/month**
- Finnhub: **$0** (free tier is generous)
- OpenAI: **Pay-as-you-go**
- **Total: ~$50-100/month**

## 🎯 Next Steps After Setup

1. **Test all features**:
   - Search for different stocks
   - Check watchlist functionality
   - View AI insights
   - Read news articles

2. **Monitor API usage**:
   - Check API dashboards regularly
   - Stay within free tier limits
   - Upgrade if needed

3. **Customize**:
   - Add more stocks to watchlist
   - Customize AI prompts (in `lib/api/ai-insights.ts`)
   - Add more API integrations

4. **Deploy** (when ready):
   - Use Vercel/Netlify
   - Add environment variables in deployment settings
   - Set up monitoring

## 📚 Additional Resources

- **Setup Guide**: [SETUP_API.md](./SETUP_API.md)
- **API Details**: [API_INTEGRATION_GUIDE.md](./API_INTEGRATION_GUIDE.md)
- **Main README**: [README.md](./README.md)

## ✅ Completion Checklist

- [ ] Installed `openai` package (`npm install openai`)
- [ ] Got Alpha Vantage API key
- [ ] Got Finnhub API key
- [ ] Got OpenAI API key (optional)
- [ ] Created `.env.local` file
- [ ] Added all API keys to `.env.local`
- [ ] Restarted development server
- [ ] Tested stock search with real data
- [ ] Verified news is loading
- [ ] Checked AI insights are working (if OpenAI key added)

Once all checked, your dashboard is fully integrated with real APIs! 🎉
