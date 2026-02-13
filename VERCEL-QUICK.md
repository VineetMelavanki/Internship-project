# Vercel Deployment Quick Reference

## ⚡ Quick Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy from project root
cd d:\MY PROJECTS\InternshipPROJECT
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel list

# View logs
vercel logs
```

## 📋 Pre-Deployment Checklist

- [ ] Create GitHub repository
- [ ] Push all code to GitHub
- [ ] Add environment variables to Vercel dashboard
  - `OPENAI_API_KEY`
- [ ] Verify `vercel.json` exists
- [ ] Test local build: `npm run build`
- [ ] Check backend health endpoint: `http://localhost:8000/api/health`

## 🔑 Required Environment Variables

| Variable | Value | Where |
|----------|-------|-------|
| `OPENAI_API_KEY` | Your OpenAI API key | Vercel Dashboard |
| `FRONTEND_URL` | Your Vercel domain | Backend .env (auto) |
| `NODE_ENV` | `production` | Auto on Vercel |

## 🌐 Access Your App

After deployment:
- **Frontend**: `https://your-project-name.vercel.app`
- **API Health**: `https://your-project-name.vercel.app/api/health`
- **Dashboard**: `https://your-project-name.vercel.app`

## 📚 Full Guide

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🆘 Need Help?

1. Check [vercel.com/docs](https://vercel.com/docs)
2. Review deployment logs: `vercel logs --tail`
3. Verify environment variables: `vercel env ls`
4. Test API endpoint: Open `/api/health` in browser
