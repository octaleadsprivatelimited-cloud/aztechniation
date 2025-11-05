# AC Repair Image Integration Guide

## 📁 Image Location
Place your `acrepair.jpg` image in:
```
public/images/services/ac-repair/acrepair.jpg
```

## 🚀 How to Add the Image

### Step 1: Add the Image File
1. Copy your `acrepair.jpg` file
2. Navigate to: `public/images/services/ac-repair/`
3. Paste the file as: `acrepair.jpg`

### Step 2: Verify the Path
The image will be accessible at:
```
http://localhost:3000/images/services/ac-repair/acrepair.jpg
```

## 🎯 Where the Image is Used

### 1. Hero Section (Home Page)
- **Component**: `components/Hero.tsx`
- **Usage**: ServiceImages component shows AC repair with your image
- **Location**: Right side of hero section, in the service grid

### 2. Services Section (Home Page)
- **Component**: `components/Services.tsx`
- **Usage**: AC repair service card
- **Location**: Main services grid on home page

### 3. AC Repair Service Page
- **Component**: `app/services/ac-repair/page.tsx`
- **Usage**: ServiceImages component with serviceType="ac"
- **Location**: AC repair dedicated page

### 4. ServiceImages Component
- **Component**: `components/ServiceImages.tsx`
- **Usage**: Shows AC repair image in service grids
- **Location**: Used in multiple places throughout the site

## 🔧 Technical Implementation

### Image Component Usage
```tsx
import Image from 'next/image'

<Image
  src="/images/services/ac-repair/acrepair.jpg"
  alt="AC Repair Service"
  width={400}
  height={300}
  className="rounded-lg object-cover"
/>
```

### ServiceImages Integration
The component automatically detects if an image exists:
- ✅ **If image exists**: Shows your `acrepair.jpg` image
- ❌ **If image missing**: Falls back to Wind icon

## 📱 Responsive Behavior

### Mobile & Tablet (< 1024px)
- Service grid shows only images (no text descriptions)
- AC repair image appears in the hero section

### Desktop (≥ 1024px)
- Full service grid with images and descriptions
- AC repair image appears in multiple locations

## 🎨 Image Specifications

### Recommended Dimensions
- **Minimum**: 400x300 pixels
- **Optimal**: 800x600 pixels
- **Format**: JPG, PNG, or WebP
- **File Size**: Under 500KB for best performance

### Image Content Suggestions
- AC unit being repaired
- Technician working on AC
- Before/after repair shots
- Different types of AC units (Split, Window, etc.)

## 🔄 Fallback System

If `acrepair.jpg` is not found:
1. Component shows Wind icon (❄️)
2. No errors are thrown
3. Site continues to work normally

## 🚀 Testing

### Local Testing
1. Add `acrepair.jpg` to the correct directory
2. Start development server: `npm run dev`
3. Visit: `http://localhost:3000`
4. Check hero section for your AC repair image

### Production Deployment
1. Image will be automatically included in build
2. Next.js optimizes the image automatically
3. Image is served from CDN in production

## 📂 Complete Directory Structure
```
public/
├── images/
│   ├── services/
│   │   ├── ac-repair/
│   │   │   ├── acrepair.jpg          ← YOUR IMAGE GOES HERE
│   │   │   └── PLACE_YOUR_ACREPAIR_JPG_HERE.txt
│   │   ├── tv-repair/
│   │   ├── washing-machine-repair/
│   │   ├── refrigerator-repair/
│   │   ├── microwave-repair/
│   │   └── home-appliances/
│   ├── hero/
│   ├── logos/
│   ├── testimonials/
│   └── icons/
```

## ✅ Quick Checklist

- [ ] Add `acrepair.jpg` to `public/images/services/ac-repair/`
- [ ] Verify image loads at `http://localhost:3000/images/services/ac-repair/acrepair.jpg`
- [ ] Check hero section shows your image
- [ ] Test on mobile and desktop
- [ ] Verify AC repair service page shows your image

## 🆘 Troubleshooting

### Image Not Showing?
1. Check file path is exactly: `public/images/services/ac-repair/acrepair.jpg`
2. Verify filename is exactly: `acrepair.jpg` (case-sensitive)
3. Restart development server: `npm run dev`
4. Clear browser cache

### Image Too Large/Small?
1. Resize image to 400x300 or 800x600 pixels
2. Optimize file size to under 500KB
3. Use image editing software to adjust dimensions

### Still Not Working?
1. Check browser console for errors
2. Verify image file is not corrupted
3. Try a different image format (PNG instead of JPG)
