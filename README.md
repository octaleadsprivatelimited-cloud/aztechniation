# AZ technician - Electronics & Appliance Repair Website

A modern, responsive Next.js website for AZ technician, a professional electronics and appliance repair service in Hyderabad. Built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

### 🏠 Modern Design
- Clean, professional design similar to Urban Company
- Responsive layout for all devices
- Modern UI components with smooth animations
- Gradient backgrounds and modern typography

### 📱 Mobile-First
- Fully responsive design
- Mobile-friendly navigation with hamburger menu
- Touch-friendly interface
- Optimized for mobile performance

### 🔍 SEO Optimized
- Comprehensive meta tags and structured data
- SEO-friendly URLs
- Sitemap and robots.txt
- Open Graph and Twitter Card support
- Local business schema markup

### 📞 Contact Integration
- WhatsApp integration with floating button
- Contact form with validation
- Direct phone and email links
- Service area information

### 🛠️ Services
- TV Repair
- AC Repair
- Washing Machine Repair
- Refrigerator Repair
- Microwave Repair
- Laptop Repair
- Mobile Repair
- Home Appliances

### 📄 Legal Pages
- Privacy Policy
- Terms of Service
- Sitemap
- Robots.txt

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js 22.x 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── services/           # Services pages
│   ├── privacy-policy/     # Privacy policy
│   ├── terms-of-service/   # Terms of service
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # SEO sitemap
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with mega menu
│   ├── Hero.tsx            # Homepage hero section
│   ├── Services.tsx        # Services grid
│   ├── Stats.tsx           # Statistics section
│   ├── WhyChooseUs.tsx     # Why choose us section
│   ├── Testimonials.tsx    # Customer testimonials
│   ├── CTA.tsx             # Call-to-action section
│   ├── ContactForm.tsx     # Contact form
│   └── WhatsAppButton.tsx  # WhatsApp integration
├── public/                 # Static assets
├── tailwind.config.js     # Tailwind configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## Key Features

### 🎨 Design System
- Consistent color palette with primary blues
- Modern typography using Inter font
- Responsive grid system
- Smooth hover animations
- Professional iconography

### 📱 Mobile Experience
- Collapsible navigation menu
- Touch-optimized buttons
- Mobile-first responsive design
- Fast loading on mobile networks

### 🔍 SEO Features
- Meta tags for all pages
- Structured data for local business
- Sitemap for search engines
- Robots.txt for crawler guidance
- Open Graph for social sharing

### 📞 Contact Features
- WhatsApp floating button
- Contact form with validation
- Direct phone/email links
- Service area information
- Business hours display

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Content
- Update company information in `app/layout.tsx`
- Modify services in `components/Services.tsx`
- Edit contact details in footer and header components

### SEO
- Update meta tags in each page's metadata
- Modify structured data in `app/layout.tsx`
- Update sitemap.xml with new pages

## Deployment

### Deployment Platforms
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any platform supporting Next.js

## Performance

- Optimized images with Next.js Image component
- Lazy loading for better performance
- Minimal JavaScript bundle
- Fast loading with static generation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is proprietary software for AZ technician.

## Support

For technical support or questions about this website, contact:
- Email: mra760063@gmail.com

---

Built with ❤️ for AZ technician
