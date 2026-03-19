#!/bin/bash

# Ensure directories exist
mkdir -p public/images/team
mkdir -p public/images/cases
mkdir -p public/media

# Function to generate placeholder image with text
generate_image() {
    local text="$1"
    local filename="$2"
    local color="$3"
    
    # Check if file exists to avoid overwriting (optional, but good for speed)
    if [ ! -f "$filename" ]; then
        echo "Generating $filename..."
        # Use ffmpeg to generate a solid color image with text centered
        # size 1200x800, font size 60, white text
        ffmpeg -f lavfi -i color=c=$color:s=1200x800 -frames:v 1 \
        -vf "drawtext=text='$text':fontcolor=white:fontsize=60:x=(w-text_w)/2:y=(h-text_h)/2" \
        -y "$filename" > /dev/null 2>&1
    else
        echo "$filename already exists. Skipping."
    fi
}

# Function to generate video
generate_video() {
    local text="$1"
    local filename="$2"
    
    if [ ! -f "$filename" ]; then
        echo "Generating $filename..."
        # Generate 5 seconds of video
        ffmpeg -f lavfi -i color=c=black:s=1920x1080:r=30 -t 5 \
        -vf "drawtext=text='$text':fontcolor=white:fontsize=120:x=(w-text_w)/2:y=(h-text_h)/2" \
        -c:v libx264 -pix_fmt yuv420p -y "$filename" > /dev/null 2>&1
    fi
}

# Hero
generate_video "HERO VIDEO LOC" "public/media/hero.mp4"
generate_image "HERO PORTRAIT" "public/images/hero-portrait.webp" "black"

# About
generate_image "GLOVES HANDS" "public/images/gloves-hands.webp" "0x1a1a1a"

# Trust
generate_image "DENTAL CHAIR 3D" "public/images/dental-chair-3d.webp" "0x101010"
generate_image "CT SCANNER" "public/images/ct-scanner.webp" "0x202020"

# Exploded View
generate_image "IMPLANT EXPLODED" "public/images/implant-exploded.webp" "black"
generate_image "IMPLANT SCREW" "public/images/implant-screw.png" "black"
generate_image "IMPLANT ABUTMENT" "public/images/implant-abutment.png" "black"
generate_image "IMPLANT CROWN" "public/images/implant-crown.png" "black"

# Team
generate_image "DOCTOR 1" "public/images/team/doctor-1.webp" "0x333333"
generate_image "DOCTOR 2" "public/images/team/doctor-2.webp" "0x333333"
generate_image "DOCTOR 3" "public/images/team/doctor-3.webp" "0x333333"

# Cases
generate_image "CASE 1 BEFORE" "public/images/cases/case-1-before.webp" "0x442222"
generate_image "CASE 1 AFTER" "public/images/cases/case-1-after.webp" "0x224422"
generate_image "CASE 2 BEFORE" "public/images/cases/case-2-before.webp" "0x442222"
generate_image "CASE 2 AFTER" "public/images/cases/case-2-after.webp" "0x224422"

echo "Asset generation complete."
