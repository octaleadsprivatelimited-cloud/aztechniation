#!/usr/bin/env node

/**
 * Favicon Generation Script for AZ technician
 * 
 * This script generates proper favicon files from the logo image.
 * Run with: node scripts/generate-favicons.js
 * 
 * Requirements:
 * - ImageMagick installed (brew install imagemagick on macOS)
 * - Logo image at public/images/logo.png
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const logoPath = 'public/images/logo.png';
const outputDir = 'public';
const magickCommand = process.env.MAGICK_PATH || 'magick';

// Favicon sizes and names
const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon-48x48.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

console.log('🎨 Generating favicon files from logo...');

// Check if logo exists
if (!fs.existsSync(logoPath)) {
  console.error(`❌ Logo not found at ${logoPath}`);
  console.log('Please ensure the logo file exists at the specified path.');
  process.exit(1);
}

// Check if ImageMagick is installed
try {
  execSync(`"${magickCommand}" -version`, { stdio: 'ignore' });
} catch (error) {
  console.error('❌ ImageMagick not found. Please install ImageMagick or set MAGICK_PATH to the magick executable:');
  console.log('macOS: brew install imagemagick');
  console.log('Ubuntu: sudo apt-get install imagemagick');
  console.log('Windows: Download from https://imagemagick.org/script/download.php');
  console.log('Example: set MAGICK_PATH="C:\\\\Program Files\\\\ImageMagick-7.1.2-Q16-HDRI\\\\magick.exe"');
  process.exit(1);
}

// Generate base square logo (512x512) at public/logo.png
try {
  console.log('🖼️ Generating base logo (512x512)...');
  const outputPath = path.join(outputDir, 'logo.png');
  const command = `"${magickCommand}" "${logoPath}" -resize 512x512 -background transparent -gravity center -extent 512x512 "${outputPath}"`;
  execSync(command, { stdio: 'inherit' });
  console.log('✅ Generated logo.png');
} catch (error) {
  console.error('❌ Failed to generate logo.png:', error.message);
}

// Generate favicon files
faviconSizes.forEach(({ size, name }) => {
  const outputPath = path.join(outputDir, name);
  
  try {
    console.log(`📱 Generating ${name} (${size}x${size})...`);
    
    // Use ImageMagick to resize and optimize the logo
    const command = `"${magickCommand}" "${logoPath}" -resize ${size}x${size} -background transparent -gravity center -extent ${size}x${size} "${outputPath}"`;
    
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Generated ${name}`);
  } catch (error) {
    console.error(`❌ Failed to generate ${name}:`, error.message);
  }
});

// Generate favicon.ico (16x16, 32x32, 48x48)
try {
  console.log('📱 Generating favicon.ico...');
  const command = `"${magickCommand}" "${logoPath}" -resize 32x32 -background transparent -gravity center -extent 32x32 "public/favicon.ico"`;
  execSync(command, { stdio: 'inherit' });
  console.log('✅ Generated favicon.ico');
} catch (error) {
  console.error('❌ Failed to generate favicon.ico:', error.message);
}

// Update site.webmanifest
const manifestPath = 'public/site.webmanifest';
const manifest = {
  "name": "AZ technician",
  "short_name": "ApplianceCares",
  "icons": [
    {
      "src": "/android-chrome-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "theme_color": "#0ea5e9",
  "background_color": "#ffffff",
  "display": "standalone"
};

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('✅ Updated site.webmanifest');

console.log('\n🎉 Favicon generation complete!');
console.log('\n📋 Generated files:');
faviconSizes.forEach(({ name }) => {
  console.log(`- ${name}`);
});
console.log('- favicon.ico');
console.log('- site.webmanifest (updated)');

console.log('\n📝 Next steps:');
console.log('1. Update your HTML head tags to reference the new favicon files');
console.log('2. Test the favicons in different browsers');
console.log('3. Verify the manifest file works for PWA functionality');
