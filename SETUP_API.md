# Setting Up Real APIs - Step by Step Guide

## Quick Start (5 minutes)

### Step 1: Get Free API Keys

1. **Alpha Vantage** (Stock Data)
   - Go to: https://www.alphavantage.co/support/#api-key
   - Sign up (free)
   - Copy your API key

2. **Finnhub** (News & Company Data)
   - Go to: https://finnhub.io/register
   - Sign up (free)
   - Copy your API key

3. **OpenAI** (AI Insights) - Optional but recommended
   - Go to: https://platform.openai.com/api-keys
   - Sign up and add payment method (pay-as-you-go)
   - Copy your API key
   - **Note**: Costs ~$0.01-0.05 per stock analysis

4. **NewsAPI** (General News) - Optional
   - Go to: https://newsapi.org/register
   - Sign up (free tier: 100 requests/day)
   - Copy your API key

### Step 2: Install Required Packages

```bash
npm install openai
# or
pnpm add openai
```

### Step 3: Create Environment File

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your API keys:
   ```env
   ALPHA_VANTAGE_API_KEY=your_actual_key_here
   FINNHUB_API_KEY=your_actual_key_here
   OPENAI_API_KEY=your_actual_key_here
   NEWS_API_KEY=your_actual_key_here
   ```

### Step 4: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
# or
pnpm dev
```

### Step 5: Test It Out

1. Go to http://localhost:3000/search
2. Search for "AAPL" or "MSFT"
3. Click on a stock
4. You should see real data!

## What Each API Does

### Alpha Vantage
- ✅ Real-time stock prices
- ✅ Historical price data (for charts)
- ✅ Company information
- **Free Tier**: 5 calls/minute, 500/day

### Finnhub
- ✅ Company-specific news
- ✅ Company profiles
- ✅ Stock search
- **Free Tier**: 60 calls/minute

### OpenAI
- ✅ AI-generated stock summaries
- ✅ Key insights
- ✅ Market analysis
- **Cost**: ~$0.01-0.05 per analysis

### NewsAPI
- ✅ General market news
- ✅ News search
- **Free Tier**: 100 requests/day

## Cost Estimate

### Free Tier Setup:
- **Alpha Vantage**: Free
- **Finnhub**: Free
- **OpenAI**: ~$5-20/month (depending on usage)
- **NewsAPI**: Free (100 requests/day)

**Total**: ~$5-20/month for personal use

### If You Exceed Free Tiers:
- **Alpha Vantage**: $49.99/month (unlimited)
- **Finnhub**: $0/month (free tier is generous)
- **OpenAI**: Pay-as-you-go (~$0.01 per analysis)
- **NewsAPI**: $449/month (unlimited)

## Troubleshooting

### "API key not set" warnings
- Make sure `.env.local` exists in the project root
- Make sure you restarted the dev server after adding keys
- Check that keys don't have extra spaces or quotes

### Rate limit errors
- Free tiers have limits - the code includes caching to help
- Wait a minute and try again
- Consider upgrading if you need more

### OpenAI errors
- Make sure you added payment method to OpenAI account
- Check your OpenAI usage limits
- Try using `gpt-4o-mini` instead of `gpt-4` (cheaper)

### No data showing
- Check browser console for errors
- Verify API keys are correct
- Check API service status pages
- The app will fall back to mock data if APIs fail

## Next Steps

1. **Start with Alpha Vantage + Finnhub** (both free)
2. **Add OpenAI** for AI insights (small cost)
3. **Monitor usage** to stay within free tiers
4. **Upgrade APIs** as needed for production

## Production Considerations

For production deployment:

1. **Use Vercel/Netlify** environment variables
2. **Add Redis** for better caching
3. **Implement rate limiting** middleware
4. **Set up monitoring** for API usage
5. **Consider paid tiers** for reliability

## Support

- Check `API_INTEGRATION_GUIDE.md` for detailed API documentation
- Review API service status pages if issues occur
- Check Next.js logs for detailed error messages
