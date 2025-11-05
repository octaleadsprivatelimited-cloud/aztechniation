# Deployment Guide - AZ technician

This guide will help you deploy the AZ technician website to various hosting platforms.

## 🚀 Quick Start

### Prerequisites
- Node.js 22.x installed
- Account on your chosen hosting platform

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📦 Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🌐 Deployment Options

### 1. Netlify

**Steps:**
1. Upload your code or connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Deploy

**Netlify Configuration:**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "22"
```

### 2. AWS Amplify

**Steps:**
1. Upload your code or connect your repository
2. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

### 3. DigitalOcean App Platform

**Steps:**
1. Upload your code or connect your repository
2. Select Node.js
3. Set build command: `npm run build`
4. Set run command: `npm start`
5. Deploy

### 4. Other Platforms

You can deploy to any platform that supports Node.js and Next.js. Common options include:
- Railway
- Render
- Heroku (with buildpacks)
- VPS servers (using PM2 or similar)

## 🔧 Environment Variables

Create these environment variables in your hosting platform:

```env
NEXT_PUBLIC_SITE_URL=https://appliancecares.in
NEXT_PUBLIC_EMAIL=mra760063@gmail.com
```

## 📱 Domain Configuration

### Custom Domain Setup
1. Purchase domain (if not already owned)
2. Configure DNS settings:
   - A record: Point to hosting platform IP
   - CNAME: www.appliancecares.in → appliancecares.in
3. Add SSL certificate (usually automatic)

### DNS Settings
```
Type: A
Name: @
Value: [Hosting Platform IP]

Type: CNAME
Name: www
Value: appliancecares.in
```

## 🔍 SEO Optimization

### Google Search Console
1. Verify domain ownership
2. Submit sitemap: `https://appliancecares.in/sitemap.xml`
3. Monitor search performance

### Local SEO
1. Create Google My Business listing
2. Add business information:
   - Name: AZ technician
   - Hours: 8 AM - 8 PM (Mon-Sun)

## 📊 Performance Optimization

### Image Optimization
- Use Next.js Image component
- Compress images before upload
- Use WebP format when possible

### Caching
- Enable CDN caching
- Set appropriate cache headers
- Use static generation where possible

### Monitoring
- Set up uptime monitoring
- Monitor Core Web Vitals
- Track page load speeds

## 🔒 Security

### SSL Certificate
- Enable HTTPS (usually automatic)
- Redirect HTTP to HTTPS
- Use HSTS headers

### Security Headers
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
]
```

## 📈 Analytics & Monitoring

### Search Console
1. Verify domain ownership
2. Submit sitemap
3. Monitor search performance
4. Fix any crawl errors

## 🚀 Launch Checklist

- [ ] Code uploaded or connected to repository
- [ ] Environment variables configured
- [ ] Domain DNS configured
- [ ] SSL certificate active
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Contact forms tested
- [ ] WhatsApp integration tested
- [ ] Mobile responsiveness verified
- [ ] Page load speed optimized
- [ ] SEO meta tags verified

## 📞 Support

For technical support:
- Email: mra760063@gmail.com

## 🔄 Updates & Maintenance

### Regular Updates
- Update dependencies monthly
- Monitor security vulnerabilities
- Update content regularly
- Check for broken links

### Backup Strategy
- Code in repository or version control
- Database backups (if applicable)
- Regular content backups

---

**Ready to launch!** 🚀

Your AZ technician website is now ready for deployment. Follow the steps above to get it live on the internet.
