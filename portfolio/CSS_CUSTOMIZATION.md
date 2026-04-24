# 🎨 CSS Customization Guide

This guide shows you how to customize colors, fonts, spacing, and other visual elements of your portfolio.

## Quick Color Changes

### Primary Color Palette

Open `style.css` and find the `:root` section at the top (lines 13-25):

```css
:root {
    --primary-color: #7C3AED;       /* Purple - Main color */
    --secondary-color: #22D3EE;     /* Cyan - Accent color */
    --bg-dark: #0B0F19;             /* Very dark blue - Main background */
    --bg-darker: #050709;           /* Almost black - Darker background */
    --glass-bg: rgba(255, 255, 255, 0.05);    /* Glass effect background */
    --glow-purple: #7C3AED;         /* Purple glow effect */
    --glow-cyan: #22D3EE;           /* Cyan glow effect */
    --text-light: #E5E7EB;          /* Light text color */
    --text-muted: #9CA3AF;          /* Muted gray text */
}
```

### Change Color Scheme

**Example 1: Green & Blue Theme**
```css
:root {
    --primary-color: #10B981;       /* Green */
    --secondary-color: #0EA5E9;     /* Blue */
    --glow-purple: #10B981;         /* Green glow */
    --glow-cyan: #0EA5E9;           /* Blue glow */
}
```

**Example 2: Orange & Pink Theme**
```css
:root {
    --primary-color: #F97316;       /* Orange */
    --secondary-color: #EC4899;     /* Pink */
    --glow-purple: #F97316;         /* Orange glow */
    --glow-cyan: #EC4899;           /* Pink glow */
}
```

**Example 3: Red & Yellow Theme**
```css
:root {
    --primary-color: #EF4444;       /* Red */
    --secondary-color: #FBBF24;     /* Yellow */
    --glow-purple: #EF4444;         /* Red glow */
    --glow-cyan: #FBBF24;           /* Yellow glow */
}
```

### Useful Color Codes

```
Blues:    #0EA5E9, #0284C7, #1D4ED8, #3B82F6, #60A5FA
Greens:   #10B981, #059669, #047857, #34D399, #6EE7B7
Purples:  #8B5CF6, #7C3AED, #6D28D9, #A78BFA, #C4B5FD
Pinks:    #EC4899, #DB2777, #F43F5E, #FB7185, #FBCFE8
Reds:     #EF4444, #DC2626, #B91C1C, #FCA5A5, #FECACA
Yellows:  #FBBF24, #F59E0B, #FBBF24, #FCD34D, #FDE68A
Oranges:  #F97316, #EA580C, #DC2626, #FB923C, #FDBA74
Teals:    #14B8A6, #0D9488, #06B6D4, #22D3EE, #67E8F9
```

**Find more colors:**
- [Tailwind Color Palette](https://tailwindcss.com/docs/customizing-colors)
- [Coolors.co](https://coolors.co)
- [Color Palette Generator](https://www.huemint.com/)

---

## Font & Typography

### Change Main Font

Open `index.html` and modify Google Fonts import (lines 8-9):

```html
<!-- Current fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Alternative: Roboto -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

<!-- Alternative: Open Sans -->
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">

<!-- Alternative: Montserrat -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

Then update `style.css` (line 36):

```css
/* Current */
body {
    font-family: 'Poppins', sans-serif;
}

/* Change to Roboto */
body {
    font-family: 'Roboto', sans-serif;
}
```

### Popular Google Fonts for Portfolios

- **Poppins** - Modern, friendly, rounded
- **Inter** - Clean, professional, minimal
- **Roboto** - Versatile, geometric, neutral
- **Montserrat** - Bold, geometric, used in modern design
- **Playfair Display** - Elegant, classic, serif
- **Raleway** - Thin, elegant, professional
- **Nunito** - Rounded, friendly, modern

---

## Spacing & Sizes

### Padding (Space Inside)

```css
/* Sections padding */
.about, .skills, .services, .projects, .contact {
    padding: 6rem 2rem;  /* Current: 6rem top/bottom, 2rem left/right */
}

/* Change to less spacing */
.about, .skills {
    padding: 3rem 2rem;  /* Smaller: 3rem */
}

/* Change to more spacing */
.about, .skills {
    padding: 8rem 2rem;  /* Larger: 8rem */
}
```

### Margin (Space Outside)

```css
/* Card margins */
.skill-card {
    gap: 1rem;  /* Current: 1rem space between icon and text */
}

/* Change spacing */
.skill-card {
    gap: 1.5rem;  /* More space (1.5rem) */
    gap: 0.5rem;  /* Less space (0.5rem) */
}
```

### Border Radius (Roundness)

```css
/* Current roundness */
.glass-card {
    border-radius: 20px;  /* Current: 20px rounded corners */
}

/* Make more rounded */
.glass-card {
    border-radius: 30px;  /* More rounded: 30px */
}

/* Make less rounded */
.glass-card {
    border-radius: 10px;  /* Less rounded: 10px */
}
```

---

## Hover Effects

### Button Hover Effects

```css
/* Current hover effect */
.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.5);
}

/* Change to scale effect */
.btn-primary:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.5);
}

/* Change to glow only (no movement) */
.btn-primary:hover {
    transform: none;
    box-shadow: 0 0 40px rgba(124, 58, 237, 0.6);
}

/* Increase glow intensity */
.btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 50px rgba(124, 58, 237, 0.8);  /* More intense */
}
```

### Card Hover Effects

```css
/* Current card hover */
.glass-card:hover {
    transform: translateY(-5px);  /* Move up 5px */
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.2);
}

/* Change to spin effect */
.glass-card:hover {
    transform: rotateY(5deg);  /* Slight 3D rotation */
}

/* Change to scale effect */
.glass-card:hover {
    transform: scale(1.05);  /* Grow by 5% */
}

/* Combine effects */
.glass-card:hover {
    transform: translateY(-5px) scale(1.02);  /* Move up AND grow */
}
```

---

## Animation Speed

### Transition Duration

```css
/* Current speed (all transitions) */
:root {
    --transition: all 0.3s ease;  /* 0.3 seconds */
}

/* Faster animations */
:root {
    --transition: all 0.15s ease;  /* 0.15 seconds - snappy */
}

/* Slower animations */
:root {
    --transition: all 0.5s ease;  /* 0.5 seconds - smooth */
}

/* Very slow animations */
:root {
    --transition: all 1s ease;  /* 1 second - dramatic */
}
```

### Individual Animation Speeds

```css
/* Button transition */
.btn-primary {
    transition: all 0.2s ease;  /* Fast button response */
}

/* Smooth scroll animation */
html {
    scroll-behavior: smooth;  /* Already smooth */
}

/* Hover animations */
.skill-card:hover {
    transition: all 0.4s ease;  /* Slower hover effect */
}
```

---

## Shadow Effects

### Box Shadows (Glow)

```css
/* Subtle glow */
.glass-card {
    box-shadow: 0 0 15px rgba(124, 58, 237, 0.1);
}

/* Medium glow */
.glass-card {
    box-shadow: 0 0 30px rgba(124, 58, 237, 0.3);
}

/* Strong glow */
.glass-card {
    box-shadow: 0 0 50px rgba(124, 58, 237, 0.5);
}

/* Dual-color glow */
.glass-card {
    box-shadow: 
        0 0 20px rgba(124, 58, 237, 0.3),
        0 0 40px rgba(34, 211, 238, 0.2);
}
```

### Text Shadow

```css
/* Add text glow */
.hero-name {
    text-shadow: 0 0 20px rgba(124, 58, 237, 0.5);
}

/* Remove text shadow */
.hero-name {
    text-shadow: none;
}
```

---

## Glassmorphism Effects

### Glass Background Opacity

```css
/* Current glass effect */
.glass-card {
    background: var(--glass-bg);  /* rgba(255, 255, 255, 0.05) */
    backdrop-filter: blur(10px);
}

/* More transparent glass */
.glass-card {
    background: rgba(255, 255, 255, 0.02);  /* More subtle */
    backdrop-filter: blur(10px);
}

/* More opaque glass */
.glass-card {
    background: rgba(255, 255, 255, 0.1);  /* More visible */
    backdrop-filter: blur(10px);
}

/* Stronger blur effect */
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);  /* Stronger blur */
}

/* Weaker blur effect */
.glass-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);  /* Subtle blur */
}
```

---

## Hero Section Customization

### Hero Name Font Size

```css
/* Current size */
.hero-name {
    font-size: 4rem;  /* Extra large */
}

/* Smaller for mobile */
.hero-name {
    font-size: 3rem;
}

/* Larger for impact */
.hero-name {
    font-size: 5rem;
}
```

### Hero Description

```css
/* Change description styling */
.hero-description {
    font-size: 1.1rem;  /* Current size */
    line-height: 1.8;   /* Space between lines */
    color: var(--text-muted);
}

/* Make larger */
.hero-description {
    font-size: 1.2rem;
    line-height: 1.9;
}

/* Make smaller */
.hero-description {
    font-size: 1rem;
    line-height: 1.7;
}
```

---

## Section Title Customization

### Title Style

```css
/* Current title */
.section-title {
    font-size: 3rem;
    font-weight: 800;
}

/* Change font size */
.section-title {
    font-size: 2.5rem;  /* Smaller */
}

/* Change font weight */
.section-title {
    font-weight: 700;  /* Lighter (700 vs 800) */
}
```

---

## Profile Image Customization

### Image Size

```css
/* Current size */
.image-wrapper {
    width: 350px;
    height: 350px;
}

/* Larger image */
.image-wrapper {
    width: 450px;
    height: 450px;
}

/* Smaller image */
.image-wrapper {
    width: 280px;
    height: 280px;
}
```

### Image Border Effect

```css
/* Current glow ring */
.glow-ring {
    border: 3px solid;
    animation: spin 4s linear infinite;
}

/* Stronger border */
.glow-ring {
    border: 5px solid;
}

/* Subtle border */
.glow-ring {
    border: 1px solid;
}

/* Stop spinning */
.glow-ring {
    animation: none;
}
```

---

## Background Customization

### Blur Effects

```css
/* Current blur intensity */
.blur-1 {
    filter: blur(100px);
}

/* Stronger blur */
.blur-1 {
    filter: blur(150px);
}

/* Subtle blur */
.blur-1 {
    filter: blur(50px);
}
```

### Background Opacity

```css
/* Current opacity */
.blur-1 {
    opacity: 0.15;
}

/* More visible */
.blur-1 {
    opacity: 0.3;
}

/* Subtle */
.blur-1 {
    opacity: 0.08;
}
```

---

## Button Customization

### Button Padding

```css
/* Current padding */
.btn {
    padding: 0.9rem 2rem;
}

/* Larger button */
.btn {
    padding: 1.2rem 2.5rem;
}

/* Smaller button */
.btn {
    padding: 0.7rem 1.5rem;
}
```

### Button Border Radius

```css
/* Current rounded */
.btn {
    border-radius: 15px;
}

/* More rounded (pill-shaped) */
.btn {
    border-radius: 50px;
}

/* Less rounded (sharp) */
.btn {
    border-radius: 8px;
}
```

### Button Font Size

```css
/* Current size */
.btn {
    font-size: 1rem;
}

/* Larger button text */
.btn {
    font-size: 1.1rem;
}

/* Smaller button text */
.btn {
    font-size: 0.9rem;
}
```

---

## Navbar Customization

### Navbar Height & Padding

```css
/* Current padding */
.nav-container {
    padding: 0 2rem;
}

/* More padding (more space) */
.nav-container {
    padding: 0 4rem;
}

/* Less padding (compact) */
.nav-container {
    padding: 0 1rem;
}
```

### Navbar Background

```css
/* Current background */
.navbar {
    background: rgba(11, 15, 25, 0.7);
}

/* More opaque */
.navbar {
    background: rgba(11, 15, 25, 0.95);
}

/* More transparent */
.navbar {
    background: rgba(11, 15, 25, 0.5);
}
```

---

## Section Spacing

### Gap Between Cards

```css
/* Current gap */
.skills-grid {
    gap: 2rem;  /* 2rem space between cards */
}

/* More spacing */
.skills-grid {
    gap: 3rem;  /* Larger gaps */
}

/* Less spacing */
.skills-grid {
    gap: 1rem;  /* Tighter layout */
}
```

---

## Dark Mode Toggle (Advanced)

If you want to add a light mode, you can duplicate all CSS variables:

```css
/* Light mode */
body.light-mode {
    --bg-dark: #FFFFFF;
    --text-light: #1F2937;
    --text-muted: #6B7280;
    --glass-bg: rgba(0, 0, 0, 0.05);
}

/* Toggle script in JavaScript */
function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
}
```

---

## Common Customization Combinations

### Modern Minimal Style
```css
:root {
    --primary-color: #000000;
    --secondary-color: #666666;
    --transition: all 0.2s ease;
}
.glass-card { backdrop-filter: blur(5px); }
.btn { border-radius: 5px; }
```

### Colorful & Bold
```css
:root {
    --primary-color: #FF006E;
    --secondary-color: #00D9FF;
    --glow-purple: #FF006E;
    --glow-cyan: #00D9FF;
}
.glass-card:hover { box-shadow: 0 0 50px; }
.btn { font-size: 1.1rem; }
```

### Soft & Elegant
```css
:root {
    --primary-color: #9D84B7;
    --secondary-color: #8B7899;
}
.glass-card { backdrop-filter: blur(20px); }
.btn { border-radius: 50px; }
.btn { transition: all 0.5s ease; }
```

---

## Tools to Help with Customization

- **Color Picker**: [Colordot.it](https://color.hailpixel.com/)
- **Gradient Generator**: [Gradient.io](https://gradient.io)
- **Shadow Generator**: [Neumorphism.io](https://neumorphism.io/)
- **Font Pairing**: [FontPair.co](https://fontpair.co)
- **Animation Easing**: [Easings.net](https://easings.net)

---

## Testing Your Changes

1. **Save CSS file** (Ctrl+S)
2. **Refresh browser** (F5 or Ctrl+Shift+R for hard refresh)
3. **Check results** in browser
4. **Test on mobile** to ensure responsive
5. **Test in different browsers** for compatibility

---

## Tips for Better Customization

✅ **Start small** - Change one color at a time
✅ **Test changes** - See how they look before moving on
✅ **Keep backup** - Save original colors before major changes
✅ **Use browser DevTools** - Right-click → Inspect to test changes
✅ **Mobile first** - Always test on mobile after changes
✅ **Consistency** - Keep similar elements with same styling
✅ **Contrast** - Ensure text is readable on backgrounds

---

**Need help?** Check the main README.md or the code comments in style.css!

Happy customizing! 🎨
