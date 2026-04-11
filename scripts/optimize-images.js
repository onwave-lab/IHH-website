#!/usr/bin/env node
/**
 * Image Optimization Pipeline
 * Generates responsive WebP variants from source images.
 *
 * Usage:
 *   node scripts/optimize-images.js <input-image> [--sizes 900,500,400,300] [--quality 90]
 *   node scripts/optimize-images.js images/photos/D08A6867.jpg
 *   node scripts/optimize-images.js images/about/alicia-professional.jpg --sizes 600,400,200
 *
 * Output: Creates WebP variants in the same directory as the input:
 *   filename.webp          (largest size, or original width if smaller)
 *   filename-small.webp    (2nd size)
 *   filename-small-xs.webp (3rd size)
 *   filename-mobile.webp   (smallest size)
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const DEFAULT_SIZES = [900, 500, 400, 300];
const DEFAULT_QUALITY = 90;
const SUFFIX_MAP = ['', '-small', '-small-xs', '-mobile'];

async function optimizeImage(inputPath, sizes = DEFAULT_SIZES, quality = DEFAULT_QUALITY) {
  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
  }

  const dir = path.dirname(inputPath);
  const ext = path.extname(inputPath);
  const basename = path.basename(inputPath, ext);

  const image = sharp(inputPath);
  const metadata = await image.metadata();

  console.log(`Source: ${inputPath}`);
  console.log(`  Dimensions: ${metadata.width}x${metadata.height}`);
  console.log(`  Format: ${metadata.format}`);
  console.log(`  Size: ${(fs.statSync(inputPath).size / 1024).toFixed(1)} KB`);
  console.log('');

  for (let i = 0; i < sizes.length; i++) {
    const targetWidth = sizes[i];
    const suffix = i < SUFFIX_MAP.length ? SUFFIX_MAP[i] : `-${targetWidth}w`;
    const outputName = `${basename}${suffix}.webp`;
    const outputPath = path.join(dir, outputName);

    // Skip if target is wider than source
    if (targetWidth > metadata.width) {
      console.log(`  Skipping ${outputName} (${targetWidth}w > source ${metadata.width}w)`);
      continue;
    }

    // If output would overwrite input, use a temp file
    if (path.resolve(outputPath) === path.resolve(inputPath)) {
      const tmpPath = outputPath + '.tmp';
      await sharp(inputPath).resize(targetWidth).webp({ quality }).toFile(tmpPath);
      fs.renameSync(tmpPath, outputPath);
    } else {
      await sharp(inputPath).resize(targetWidth).webp({ quality }).toFile(outputPath);
    }

    const outputSize = (fs.statSync(outputPath).size / 1024).toFixed(1);
    console.log(`  Created: ${outputName} (${targetWidth}w, ${outputSize} KB)`);
  }

  console.log('\nDone.');
}

// Parse CLI args
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node scripts/optimize-images.js <input-image> [--sizes 900,500,400,300] [--quality 90]');
  process.exit(0);
}

const inputPath = args[0];
let sizes = DEFAULT_SIZES;
let quality = DEFAULT_QUALITY;

for (let i = 1; i < args.length; i++) {
  if (args[i] === '--sizes' && args[i + 1]) {
    sizes = args[i + 1].split(',').map(Number);
    i++;
  } else if (args[i] === '--quality' && args[i + 1]) {
    quality = parseInt(args[i + 1]);
    i++;
  }
}

optimizeImage(inputPath, sizes, quality).catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
