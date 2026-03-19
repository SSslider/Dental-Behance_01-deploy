const fs = require('fs');
const path = require('path');

const requiredAssets = [
  'public/media/hero.mp4',
  'public/images/hero-portrait.webp',
  'public/images/gloves-hands.webp',
  'public/images/dental-chair-3d.webp',
  'public/images/implant-exploded.webp',
  'public/images/implant-screw.png',
  'public/images/implant-abutment.png',
  'public/images/implant-crown.png',
  'public/images/cases/case-1-before.webp',
  'public/images/cases/case-1-after.webp',
  'public/images/team/doctor-1.webp'
];

let missing = [];

console.log("🔍 Checking for required assets...");

requiredAssets.forEach(file => {
  if (!fs.existsSync(path.join(process.cwd(), file))) {
    missing.push(file);
  }
});

if (missing.length > 0) {
  console.error("❌ Build Failed! Missing required assets:");
  missing.forEach(f => console.error(`   - ${f}`));
  console.error("\nPlease run 'sh scripts/generate-assets.sh' or provide the assets manually.");
  process.exit(1);
} else {
  console.log("✅ All assets present. Proceeding to build.");
  process.exit(0);
}
