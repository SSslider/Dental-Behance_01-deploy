#!/bin/bash

# Function to download with retry
download_file() {
    local url="$1"
    local output="$2"
    echo "⬇️ Downloading $output..."
    curl -L -f --retry 3 --retry-delay 2 -o "$output" "$url"
    
    if [ $? -eq 0 ]; then
        echo "✅ Downloaded $output"
    else
        echo "❌ Failed to download $output"
        return 1
    fi
}

mkdir -p public/media
mkdir -p public/images/team
mkdir -p public/images/cases

# 1. New Hero Video (Real Model - High Quality - Young Woman Smiling)
# URL from Pixabay: https://cdn.pixabay.com/video/2020/07/03/43721-436797179_large.mp4 (Woman smiling close up)
echo "🎥 Downloading Hero Video..."
rm -f public/media/hero.mp4
download_file "https://cdn.pixabay.com/video/2020/07/03/43721-436797179_large.mp4" "public/media/hero.mp4"

# 2. Dental Chair (Dark/Premium)
echo "💺 Downloading Chair..."
download_file "https://images.unsplash.com/photo-1629909608135-ca2b403486e9?auto=format&fit=crop&q=80&w=1200" "temp_chair.jpg"
ffmpeg -i temp_chair.jpg -q:v 80 -y public/images/dental-chair-3d.webp 2>/dev/null && rm temp_chair.jpg

# 3. Gloves Hands (About Section)
echo "🧤 Downloading Gloves..."
download_file "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200" "temp_gloves.jpg"
ffmpeg -i temp_gloves.jpg -q:v 80 -y public/images/gloves-hands.webp 2>/dev/null && rm temp_gloves.jpg

# 4. CT Scanner
echo "🏥 Downloading CT Scanner..."
download_file "https://images.unsplash.com/photo-1516549655169-df83a253897f?auto=format&fit=crop&q=80&w=1200" "temp_ct.jpg"
ffmpeg -i temp_ct.jpg -q:v 80 -y public/images/ct-scanner.webp 2>/dev/null && rm temp_ct.jpg

# 5. Implant (Exploded View Fallback)
echo "🦷 Downloading Implant..."
download_file "https://images.unsplash.com/photo-1596704017254-9b1210620ed7?auto=format&fit=crop&q=80&w=1200" "temp_implant.jpg"
ffmpeg -i temp_implant.jpg -q:v 80 -y public/images/implant-exploded.webp 2>/dev/null && rm temp_implant.jpg

# 6. Hero Portrait (Extract high quality frame from new video)
if [ -f "public/media/hero.mp4" ]; then
    echo "📸 Extracting Hero Portrait from Video..."
    # Extract at 5 seconds where she is likely smiling perfectly
    ffmpeg -i public/media/hero.mp4 -ss 00:00:05 -vframes 1 -q:v 2 -y public/images/hero-portrait.webp 2>/dev/null
fi

# 7. Team
echo "👨‍⚕️ Downloading Team..."
download_file "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200" "temp_doc1.jpg"
ffmpeg -i temp_doc1.jpg -q:v 80 -y public/images/team/doctor-1.webp 2>/dev/null && rm temp_doc1.jpg

download_file "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=1200" "temp_doc2.jpg"
ffmpeg -i temp_doc2.jpg -q:v 80 -y public/images/team/doctor-2.webp 2>/dev/null && rm temp_doc2.jpg

download_file "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200" "temp_doc3.jpg"
ffmpeg -i temp_doc3.jpg -q:v 80 -y public/images/team/doctor-3.webp 2>/dev/null && rm temp_doc3.jpg


# 8. Cases (Reuse Real Assets)
echo "✨ Setting up Cases..."
cp public/images/team/doctor-2.webp public/images/cases/case-1-before.webp
cp public/images/hero-portrait.webp public/images/cases/case-1-after.webp
cp public/images/dental-chair-3d.webp public/images/cases/case-2-before.webp
cp public/images/implant-exploded.webp public/images/cases/case-2-after.webp

# 9. Implant Parts
echo "🔩 Generating Implant Parts..."
ffmpeg -i public/images/implant-exploded.webp -vf "crop=w=200:h=200:x=100:y=100" -y public/images/implant-screw.png 2>/dev/null
ffmpeg -i public/images/implant-exploded.webp -vf "crop=w=200:h=200:x=300:y=100" -y public/images/implant-abutment.png 2>/dev/null
ffmpeg -i public/images/implant-exploded.webp -vf "crop=w=200:h=200:x=500:y=100" -y public/images/implant-crown.png 2>/dev/null

echo "✅ Real assets update complete."
