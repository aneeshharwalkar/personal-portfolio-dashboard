# Quick Start Guide

## 🚀 Get Running in 2 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Server
```bash
npm run dev
```

### 3. Open Browser
Go to: http://localhost:3000

**That's it!** The dashboard works with mock data.

---

## 🔌 Add Real APIs (Optional - 5 minutes)

### Step 1: Install OpenAI Package
```bash
npm install openai
```

### Step 2: Get Free API Keys

1. **Alpha Vantage**: https://www.alphavantage.co/support/#api-key
2. **Finnhub**: https://finnhub.io/register
3. **OpenAI**: https://platform.openai.com/api-keys (optional, ~$5-20/month)

### Step 3: Create `.env.local` File

Create a file named `.env.local` in the project root with:

```env
ALPHA_VANTAGE_API_KEY=your_key_here
FINNHUB_API_KEY=your_key_here
OPENAI_API_KEY=your_key_here
```

### Step 4: Restart Server
```bash
# Stop server (Ctrl+C), then:
npm run dev
```

### Step 5: Test
Go to http://localhost:3000/search and search for "AAPL"

---

## 📚 Full Documentation

- **Complete Setup**: [COMPLETE_SETUP.md](./COMPLETE_SETUP.md)
- **API Setup**: [SETUP_API.md](./SETUP_API.md)
- **API Details**: [API_INTEGRATION_GUIDE.md](./API_INTEGRATION_GUIDE.md)
- **Main README**: [README.md](./README.md)

---

## ✅ What's Included

- ✅ All dashboard pages (Home, Watchlist, Search)
- ✅ Stock detail pages with charts
- ✅ API integration code (ready to use)
- ✅ Mock data (works without APIs)
- ✅ AI insights integration
- ✅ News integration
- ✅ Complete documentation

## 🎯 Next Steps

1. **Test the dashboard** - It works with mock data now
2. **Add API keys** - Follow steps above for real data
3. **Customize** - Modify components, add features
4. **Deploy** - Use Vercel/Netlify when ready
