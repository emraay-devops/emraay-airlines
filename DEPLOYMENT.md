# Emraay Airlines - NextJS Deployment Guide

This guide covers deploying the Emraay Airlines NextJS application to various platforms for production use.

## 🚀 Quick Deployment Options

### **1. Vercel (Recommended)**

Vercel is the easiest way to deploy NextJS applications:

#### **Steps:**
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial Emraay Airlines app"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

3. **Custom Domain (Optional)**
   - Add custom domain in Vercel dashboard
   - Update DNS settings
   - SSL certificate auto-generated

#### **Benefits:**
- ✅ Zero configuration
- ✅ Automatic deployments
- ✅ Global CDN
- ✅ Serverless functions
- ✅ Analytics included

---

### **2. Netlify**

For static site deployment:

#### **Steps:**
1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect GitHub repository

3. **Configure build settings**
   ```bash
   Build command: npm run build
   Publish directory: out
   ```

#### **Benefits:**
- ✅ Easy static hosting
- ✅ Form handling
- ✅ Edge functions
- ✅ Branch previews

---

### **3. AWS Amplify**

For full-stack deployment:

#### **Steps:**
1. **Connect repository**
   - Go to AWS Amplify console
   - Connect GitHub repository
   - Select branch

2. **Configure build settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: out
       files:
         - '**/*'
   ```

3. **Deploy**
   - Review settings
   - Deploy application

#### **Benefits:**
- ✅ AWS integration
- ✅ Scalable hosting
- ✅ CI/CD pipeline
- ✅ Custom domains

---

## 🐳 Docker Deployment

### **Dockerfile**
```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### **Docker Compose**
```yaml
version: '3.8'
services:
  emraay-airlines:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

### **Build and Run**
```bash
# Build Docker image
docker build -t emraay-airlines .

# Run container
docker run -p 3000:3000 emraay-airlines

# Or use Docker Compose
docker-compose up -d
```

---

## 🔧 Environment Configuration

### **Environment Variables**
Create `.env.local` for local development:
```bash
NEXT_PUBLIC_APP_NAME=Emraay Airlines
NEXT_PUBLIC_CONTACT_EMAIL=info@emraayairlines.com
NEXT_PUBLIC_CONTACT_PHONE=+1 (555) 123-4567
```

### **Production Environment**
Set these in your deployment platform:
- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_NAME=Emraay Airlines`
- `NEXT_PUBLIC_CONTACT_EMAIL=info@emraayairlines.com`

---

## 📊 Performance Optimization

### **Image Optimization**
- All images use Next.js Image component
- Automatic WebP conversion
- Responsive image sizing
- Lazy loading enabled

### **Code Splitting**
- Automatic route-based splitting
- Dynamic imports for heavy components
- Bundle analysis available

### **Caching**
- Static assets cached by CDN
- API routes cached appropriately
- Browser caching headers set

---

## 🔍 Monitoring & Analytics

### **Vercel Analytics**
```bash
npm install @vercel/analytics
```

Add to `layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### **Error Monitoring**
```bash
npm install @sentry/nextjs
```

---

## 🚨 Troubleshooting

### **Common Issues**

1. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **Image Loading Issues**
   - Check image paths in `/public/images/`
   - Verify image formats (JPG, PNG, SVG)
   - Ensure proper Next.js Image usage

3. **Styling Issues**
   - Verify Tailwind CSS configuration
   - Check for conflicting styles
   - Ensure proper class names

4. **Deployment Issues**
   - Check build logs in deployment platform
   - Verify environment variables
   - Ensure all dependencies are installed

### **Performance Issues**
- Use Next.js built-in performance monitoring
- Check Core Web Vitals
- Optimize images and assets
- Enable compression

---

## 📋 Pre-Deployment Checklist

- [ ] All images optimized and properly referenced
- [ ] Environment variables configured
- [ ] Build process tested locally
- [ ] Responsive design verified
- [ ] Performance metrics checked
- [ ] SEO metadata updated
- [ ] Analytics configured
- [ ] Error monitoring set up
- [ ] SSL certificate configured
- [ ] Custom domain configured (if needed)

---

## 🎯 Learning Objectives

This deployment guide teaches:
- **Platform Selection**: Choosing the right deployment platform
- **Docker Containerization**: Containerizing NextJS applications
- **Environment Management**: Handling different environments
- **Performance Optimization**: Optimizing for production
- **Monitoring**: Setting up analytics and error tracking
- **Troubleshooting**: Common deployment issues and solutions

---

**Ready to deploy your luxury aviation platform! ✈️**

