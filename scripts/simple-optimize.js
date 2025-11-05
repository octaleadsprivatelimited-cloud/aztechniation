#!/usr/bin/env node

/**
 * Simple Image Optimization Script
 * 
 * This script creates optimized versions of images for better performance.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🖼️  Creating optimized image versions...');

// List of images to optimize
const imagesToOptimize = [
  'public/images/hero/ac repair.jpg',
  'public/images/hero/home.jpeg',
  'public/images/hero/tv repair.jpg',
  'public/images/hero/washing machine.webp.webp',
  'public/images/hero/refrigator repair.webp.webp',
  'public/images/hero/Microwave.webp',
  'public/images/household-appliances-background.jpg',
  'public/images/services/ac-repair/acrepair.jpg',
  'public/images/services/ac-repair/expert-ac-repair.jpg',
  'public/images/services/home-appliances/home-appliances.jpeg',
  'public/images/services/tv-repair/tv-repair.jpg',
  'public/images/services/washing-machine-repair/washing-machine.webp',
  'public/images/services/refrigerator-repair/refrigerator.webp',
  'public/images/services/microwave-repair/microwave.webp',
];

// Function to optimize a single image
function optimizeImage(imagePath) {
  if (!fs.existsSync(imagePath)) {
    console.log(`⚠️  Image not found: ${imagePath}`);
    return;
  }

  const ext = path.extname(imagePath).toLowerCase();
  const nameWithoutExt = path.basename(imagePath, ext);
  const dir = path.dirname(imagePath);
  
  try {
    console.log(`📸 Processing ${path.basename(imagePath)}...`);
    
    // Create backup
    const backupPath = `${imagePath}.backup`;
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(imagePath, backupPath);
      console.log(`✅ Created backup: ${path.basename(backupPath)}`);
    }
    
    // Optimize the original image (resize and compress)
    const command = `magick "${imagePath}" -resize 1920x1080> -quality 85 -strip "${imagePath}"`;
    execSync(command, { stdio: 'pipe' });
    console.log(`✅ Optimized ${path.basename(imagePath)}`);
    
    // Generate WebP version if not already WebP
    if (ext !== '.webp') {
      const webpPath = path.join(dir, `${nameWithoutExt}.webp`);
      const webpCommand = `magick "${imagePath}" -quality 80 -strip "${webpPath}"`;
      execSync(webpCommand, { stdio: 'pipe' });
      console.log(`✅ Generated WebP: ${path.basename(webpPath)}`);
    }
    
  } catch (error) {
    console.error(`❌ Failed to optimize ${path.basename(imagePath)}:`, error.message);
  }
}

// Process all images
for (const imagePath of imagesToOptimize) {
  optimizeImage(imagePath);
}

console.log('\n🎉 Image optimization complete!');
console.log('\n📝 Next steps:');
console.log('1. Update Image components to use optimized images');
console.log('2. Add proper sizes attributes to Image components');
console.log('3. Test image loading performance');
