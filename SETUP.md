# Portfolio Dashboard Setup Instructions

## The Problem
You're getting `ERR_CONNECTION_REFUSED` because the development server isn't running. This happens when dependencies aren't installed.

## Solution: Install Dependencies

### Step 1: Open Terminal
Open your terminal and navigate to the project directory:
```bash
cd "/Users/aneeshharwalkar/Desktop/Portfolio Dashboard/portfolio-dashboard"
```

### Step 2: Install Dependencies

**Option A: Using npm (if you have Node.js installed)**
```bash
npm install
```

**Option B: Using pnpm (recommended - there's a pnpm-lock.yaml file)**
```bash
# First install pnpm if you don't have it:
npm install -g pnpm

# Then install dependencies:
pnpm install
```

**Option C: Using yarn**
```bash
yarn install
```

### Step 3: Start the Development Server

After dependencies are installed, start the server:
```bash
npm run dev
# OR
pnpm dev
# OR
yarn dev
```

### Step 4: Open in Browser

Once you see:
```
▲ Next.js 16.0.10
- Local:        http://localhost:3000
```

Open `http://localhost:3000` in your browser.

## If You Don't Have Node.js Installed

1. **Install Node.js:**
   - Visit [nodejs.org](https://nodejs.org/)
   - Download and install the LTS version
   - This includes npm automatically

2. **Verify Installation:**
   ```bash
   node --version
   npm --version
   ```

3. **Then follow Step 2 above**

## Troubleshooting

### Port 3000 Already in Use
If port 3000 is busy, Next.js will automatically use the next available port (3001, 3002, etc.). Check the terminal output for the actual URL.

### Still Getting Errors?
1. Make sure you're in the correct directory
2. Delete `node_modules` and `package-lock.json` (or `pnpm-lock.yaml`) and reinstall
3. Check for any error messages in the terminal

## Quick One-Liner
```bash
cd "/Users/aneeshharwalkar/Desktop/Portfolio Dashboard/portfolio-dashboard" && npm install && npm run dev
```
