# Images Directory Structure

This directory contains all static images used throughout the application.

## Directory Structure

```
public/
├── images/
│   ├── services/          # Service-specific images
│   │   ├── tv-repair/
│   │   ├── ac-repair/
│   │   ├── washing-machine-repair/
│   │   ├── refrigerator-repair/
│   │   ├── microwave-repair/
│   │   └── home-appliances/
│   ├── hero/              # Hero section images
│   │   ├── hero-bg.jpg
│   │   ├── hero-appliances.jpg
│   │   └── hero-technicians.jpg
│   ├── logos/             # Brand logos and company logos
│   │   ├── appliancecares-logo.png
│   │   ├── favicon.ico
│   │   └── apple-touch-icon.png
│   ├── testimonials/      # Customer photos and testimonials
│   │   ├── customer-1.jpg
│   │   ├── customer-2.jpg
│   │   └── customer-3.jpg
│   ├── icons/             # Service icons and UI icons
│   │   ├── tv-icon.svg
│   │   ├── ac-icon.svg
│   │   ├── washing-machine-icon.svg
│   │   └── refrigerator-icon.svg
│   └── og-image.jpg       # Open Graph image for social sharing
```

## Image Usage in Components

### 1. Hero Section Images
```tsx
// In components/Hero.tsx
import Image from 'next/image'

<Image
  src="/images/hero/hero-bg.jpg"
  alt="Professional appliance repair service"
  width={800}
  height={600}
  className="w-full h-auto"
/>
```

### 2. Service Images
```tsx
// In components/Services.tsx or ServiceImages.tsx
<Image
  src="/images/services/tv-repair/samsung-tv.jpg"
  alt="Samsung TV repair service"
  width={400}
  height={300}
  className="rounded-lg"
/>
```

### 3. Brand Logos
```tsx
// In components/Header.tsx or Footer.tsx
<Image
  src="/images/logos/appliancecares-logo.png"
  alt="AZ technician Logo"
  width={120}
  height={40}
  className="h-8 w-auto"
/>
```

### 4. Testimonial Images
```tsx
// In components/Testimonials.tsx
<Image
  src="/images/testimonials/customer-1.jpg"
  alt="Happy customer"
  width={60}
  height={60}
  className="rounded-full"
/>
```

## Image Optimization Guidelines

1. **Format**: Use WebP for better compression, fallback to JPG/PNG
2. **Sizing**: Provide multiple sizes for responsive images
3. **Alt Text**: Always include descriptive alt text for accessibility
4. **Lazy Loading**: Next.js Image component handles this automatically
5. **Compression**: Optimize images before adding to reduce file size

## Local Development

When adding new images:
1. Place them in the appropriate subdirectory
2. Use descriptive filenames (e.g., `samsung-tv-repair.jpg`)
3. Update this README if adding new directories
4. Test image loading in the browser

## Production Deployment

- Images are served statically from the `/public` directory
- Next.js automatically optimizes images in production
- Consider using a CDN for better performance in production
