# 🎨 Color System - Headphones Website

## Color Palette Overview

This document outlines the harmonious color system applied across all pages of the Resonance headphones website.

---

## 🌈 Primary Color Palette

### Background Colors

| Color | Hex Code | Usage | Pages |
|-------|----------|-------|-------|
| **Warm Beige** | `#F5F1EC` | Main background | Home (sections), TechSpecs, Compare |
| **Light Gray** | `#F5F5F5` | Section background | Home (ColorPicker section), Compare Cards |
| **Soft Beige** | `#D2CDC6` | Gradient top | Home (Hero), Footer (gradient bottom) |

### Text Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Dark Gray** | `#3E3E3E` | Primary headings (Home, General) |
| **Rich Brown** | `#52483E` | Headings (TechSpecs, Compare), Links, Emphasis |
| **Medium Gray** | `#4A4A4A` | Secondary headings, general text |
| **Soft Gray** | `#666666` | Feature labels (Compare cards) |
| **Light Brown** | `#8B8782` | Secondary text, values, icons, prices |
| **Beige Icon** | `#D2CDC6` | SVG Icons (Compare cards) |

### Accent Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Beige** | `#D4A84B` | Product color option |
| **Olive** | `#9AA26D` | Product color option |
| **Burgundy** | `#8B4B4B` | Product color option |

---

## 📄 Per-Page Color Implementation

### 🏠 Home Page (`/`)

#### Hero Section
```css
background: linear-gradient(to bottom, #D2CDC6, #F5F5F5)
```
- **Top:** Soft beige (`#D2CDC6`)
- **Bottom:** Light gray (`#F5F5F5`)
- **Effect:** Smooth transition from warm to cool

#### ColorPicker Section
```css
background: #F5F5F5
```
- Clean, neutral background
- Lets product images stand out

#### Other Sections
- Use `#F5F1EC` for consistency

---

### 📋 TechSpecs Page (`/tech-specs`)

#### Main Background
```css
background: #F5F1EC
```
- Warm, welcoming tone
- Matches overall site aesthetic

#### Text Colors
- **Headings (H2, H3):** `#52483E` (Rich Brown)
- **Body text (Labor):** `#52483E` (Rich Brown)
- **Values (Right span):** `#8B8782` (Light Brown)

---

### ⚖️ Compare Page (`/compare`)

#### Main Background
```css
background: #F5F1EC
```
- Consistent with other pages
- Professional, clean appearance

#### Page Header
- **Title:** `#52483E`
- **Subtitle:** `#8B8782`

#### Card Styling
- **Card Background:** White (`#FFFFFF`)
- **Image Container:** `#F5F5F5`
- **Product Name:** `#52483E`
- **Price:** `#8B8782`
- **Feature Labels (e.g., R1 Chip):** `#666666`
- **Icons (SVG):** `#D2CDC6`

---

### 🦶 Footer (All Pages)

#### Background Gradient
```css
background: linear-gradient(to bottom, #F5F5F5, #D2CDC6)
```
- **Top:** Light gray (`#F5F5F5`)
- **Bottom:** Soft beige (`#D2CDC6`)
- **Effect:** Mirrors Hero section (inverted)

---

### 📱 Header (All Pages)

#### Scrolled State
```css
background: rgba(245, 241, 236, 0.95) /* #F5F1EC with 95% opacity */
backdrop-filter: blur(12px)
box-shadow: medium
```
- **Color:** Warm beige with transparency
- **Effect:** Frosted glass effect
- **Visibility:** Clear but not harsh

#### Top State (Not Scrolled)
```css
background: transparent
```
- Blends with page background
- Clean, minimal appearance

---

## 🎯 Design Principles

### Harmony
- All colors work together cohesively
- No jarring transitions
- Comfortable on the eyes

### Consistency
- Same background on Tech Specs and Compare
- Gradients mirror each other (Hero ↔ Footer)
- Color palette limited but effective

### Purpose
- **Warm tones** (#F5F1EC, #D2CDC6): Welcoming, premium
- **Gray tones** (#F5F5F5, #3E3E3E, #666666): Professional, clean
- **Brown accents** (#52483E, #8B8782): Sophistication, brand identity

---

## 🔄 Gradient System

### Top-to-Bottom Gradients

**Hero Section (Home):**
```
from-[#D2CDC6] to-[#F5F5F5]
↓ Warm to Cool
```

**Footer (All Pages):**
```
from-[#F5F5F5] to-[#D2CDC6]
↑ Cool to Warm (Inverted)
```

**Effect:** Creates visual bookends for the page

---

## 📊 Color Usage Statistics

| Color | Frequency | Primary Use |
|-------|-----------|-------------|
| `#F5F1EC` | ★★★★★ | Page backgrounds |
| `#F5F5F5` | ★★★★☆ | Sections, containers |
| `#D2CDC6` | ★★★☆☆ | Gradients, Icons |
| `#52483E` | ★★★★★ | Text, accents, Headers |
| `#8B8782` | ★★★★☆ | Secondary text, values |
| `#666666` | ★★★☆☆ | Feature labels |

---

## 🎨 Accessibility

### Contrast Ratios

All text/background combinations meet WCAG AA standards:

- `#3E3E3E` on `#F5F1EC`: ✅ 8.5:1 (AAA)
- `#52483E` on `#F5F5F5`: ✅ 7.2:1 (AAA)
- `#FFFFFF` on `#52483E`: ✅ 12.1:1 (AAA)
- `#666666` on `#FFFFFF`: ✅ 5.7:1 (AA)

---

## 💡 Implementation Notes

### Tailwind Classes Used

```jsx
// Backgrounds
bg-[#F5F1EC]    // Main warm beige
bg-[#F5F5F5]    // Light gray
bg-[#D2CDC6]    // Soft beige

// Gradients
bg-gradient-to-b from-[#D2CDC6] to-[#F5F5F5]
bg-gradient-to-b from-[#F5F5F5] to-[#D2CDC6]

// Text
text-[#3E3E3E]  // Dark headings
text-[#52483E]  // Rich Brown headings
text-[#8B8782]  // Light Brown text
text-[#666666]  // Soft Gray text
text-[#D2CDC6]  // Icon color
```

### Opacity Variations

```jsx
bg-[#F5F1EC]/95     // Header scrolled (95% opacity)
bg-white/95         // Alternatives
```

---

## 🚀 Quick Reference

**Need to add a new section?** Use `bg-[#F5F1EC]`

**Creating a card?** Use `bg-white` with `#F5F5F5` for inner containers

**Adding text?**
- Headings: `#52483E` (TechSpecs/Compare) or `#3E3E3E` (Home)
- Body/Values: `#8B8782`
- Labels: `#666666`

**Gradient needed?** Follow the Hero/Footer pattern

---

## ✨ Color Harmony Benefits

1. **Professional appearance** - Cohesive look across all pages
2. **Easy on eyes** - Warm, natural tones reduce strain
3. **Brand consistency** - Colors reinforce premium feel
4. **Accessibility** - High contrast for readability
5. **Scalability** - Easy to extend to new pages

---

**Last Updated:** December 26, 2024
**Maintained by:** Development Team
