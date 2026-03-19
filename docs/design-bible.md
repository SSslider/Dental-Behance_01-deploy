# Design Bible - White Dental UX/UI

## Colors
- **Background**: `#040404` (Rich Black)
- **Surface**: `#0A0A0A` (Slightly lighter black for cards/panels)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#8F8F8F` (Grey)
- **Accent**: `#FFFFFF` (Used sparingly for borders/icons)
- **Border**: `rgba(255, 255, 255, 0.1)` (Subtle 1px borders)

## Typography
- **Font Family**: `Poppins` (Google Fonts)
- **H1 (Desktop)**: `180px` / `154px` line-height, `-0.02em` tracking, Font-weight 600.
- **H2**: `80px` / `1.1`, weight 500.
- **Body**: `16px` or `18px`, weight 400.
- **Micro-copy**: `12px`, uppercase, wide tracking.

## Layout & Grid
- **Container**: Max width `1920px`, padding `40px` (desktop), `20px` (mobile).
- **Grid**: 12-column grid capability, but often using 2-column split (50/50) or 1/3 - 2/3.
- **Spacing**: Generous whitespace. Section padding `120px` minimum.

## Components

### Buttons
- **Pill Shape**: Full rounded corners (`rounded-full`).
- **Primary**: White Background, Black Text.
- **Secondary**: Transparent Background, White Border (1px).
- **Icon**: Small circle with arrow inside, placed on the right (RTL: left).

### Cards
- **Style**: Minimalist, often just text and a thin border or separator line.
- **Hover**: Subtle lift or glow, mostly handled by scale or opacity change.

## Animation (GSAP)
- **Text Reveal**: Words slide up from masked container (`y: 100%` -> `y: 0`).
- **Scroll**: Parallax on images (`yPercent: -20`), Smooth scroll wrapper (Lenis).
- **Reduced Motion**: Fade-in only for users with preference.
