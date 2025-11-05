#!/usr/bin/env node

/**
 * Image Optimization Script for AZ technician
 * 
 * This script optimizes and compresses images for better performance.
 * Run with: node scripts/optimize-images.js
 * 
 * Requirements:
 * - ImageMagick installed
 * - Images in public/images/ directory
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const imageDir = 'public/images';
const supportedFormats = ['.jpg', '.jpeg', '.png', '.webp'];

// Image optimization settings
const optimizationSettings = {
  quality: 85,
  maxWidth: 1920,
  maxHeight: 1080,
  webpQuality: 80,
};

console.log('🖼️  Optimizing images for better performance...');

// Check if ImageMagick is installed
try {
  execSync('magick -version', { stdio: 'ignore' });
} catch (error) {
  console.error('❌ ImageMagick not found. Please install ImageMagick:');
  console.log('macOS: brew install imagemagick');
  console.log('Ubuntu: sudo apt-get install imagemagick');
  console.log('Windows: Download from https://imagemagick.org/script/download.php');
  process.exit(1);
}

// Function to get all image files recursively
function getAllImageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (supportedFormats.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Function to optimize a single image
function optimizeImage(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  const nameWithoutExt = path.basename(imagePath, ext);
  const dir = path.dirname(imagePath);
  
  try {
    console.log(`📸 Optimizing ${path.basename(imagePath)}...`);
    
    // Create backup
    const backupPath = `${imagePath}.backup`;
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(imagePath, backupPath);
    }
    
    // Optimize the original image
    const command = `magick "${imagePath}" -resize ${optimizationSettings.maxWidth}x${optimizationSettings.maxHeight}> -quality ${optimizationSettings.quality} -strip "${imagePath}"`;
    execSync(command, { stdio: 'inherit' });
    
    // Generate WebP version if not already WebP
    if (ext !== '.webp') {
      const webpPath = path.join(dir, `${nameWithoutExt}.webp`);
      const webpCommand = `magick "${imagePath}" -quality ${optimizationSettings.webpQuality} -strip "${webpPath}"`;
      execSync(webpCommand, { stdio: 'inherit' });
      console.log(`✅ Generated WebP: ${path.basename(webpPath)}`);
    }
    
    console.log(`✅ Optimized ${path.basename(imagePath)}`);
    
  } catch (error) {
    console.error(`❌ Failed to optimize ${path.basename(imagePath)}:`, error.message);
  }
}

// Function to generate responsive image sizes
function generateResponsiveSizes(imagePath) {
  const ext = path.extname(imagePath).toLowerCase();
  const nameWithoutExt = path.basename(imagePath, ext);
  const dir = path.dirname(imagePath);
  
  const sizes = [
    { width: 320, suffix: '-sm' },
    { width: 640, suffix: '-md' },
    { width: 1024, suffix: '-lg' },
    { width: 1920, suffix: '-xl' },
  ];
  
  try {
    console.log(`📱 Generating responsive sizes for ${path.basename(imagePath)}...`);
    
    for (const size of sizes) {
      const outputPath = path.join(dir, `${nameWithoutExt}${size.suffix}${ext}`);
      const command = `magick "${imagePath}" -resize ${size.width}x> -quality ${optimizationSettings.quality} -strip "${outputPath}"`;
      execSync(command, { stdio: 'inherit' });
      
      // Also generate WebP version
      const webpOutputPath = path.join(dir, `${nameWithoutExt}${size.suffix}.webp`);
      const webpCommand = `magick "${imagePath}" -resize ${size.width}x> -quality ${optimizationSettings.webpQuality} -strip "${webpOutputPath}"`;
      execSync(webpCommand, { stdio: 'inherit' });
    }
    
    console.log(`✅ Generated responsive sizes for ${path.basename(imagePath)}`);
    
  } catch (error) {
    console.error(`❌ Failed to generate responsive sizes for ${path.basename(imagePath)}:`, error.message);
  }
}

// Main optimization process
try {
  const imageFiles = getAllImageFiles(imageDir);
  
  if (imageFiles.length === 0) {
    console.log('ℹ️  No images found to optimize.');
    process.exit(0);
  }
  
  console.log(`📊 Found ${imageFiles.length} images to optimize`);
  
  // Optimize each image
  for (const imagePath of imageFiles) {
    optimizeImage(imagePath);
  }
  
  // Generate responsive sizes for hero images
  const heroImages = imageFiles.filter(file => file.includes('/hero/'));
  for (const heroImage of heroImages) {
    generateResponsiveSizes(heroImage);
  }
  
  console.log('\n🎉 Image optimization complete!');
  console.log('\n📋 Optimization summary:');
  console.log(`- Optimized ${imageFiles.length} images`);
  console.log(`- Generated WebP versions for better compression`);
  console.log(`- Created responsive sizes for hero images`);
  console.log(`- Original files backed up with .backup extension`);
  
  console.log('\n📝 Next steps:');
  console.log('1. Update your Next.js Image components to use the optimized images');
  console.log('2. Add proper sizes attributes to Image components');
  console.log('3. Test image loading performance');
  console.log('4. Consider using WebP format for better compression');
  
} catch (error) {
  console.error('❌ Image optimization failed:', error.message);
  process.exit(1);
}
