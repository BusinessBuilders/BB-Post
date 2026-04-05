---
name: websitedev
description: >
  Build production-grade landing pages and marketing websites using Next.js 16,
  Tailwind CSS, and Framer Motion. Use this skill whenever asked to create a
  landing page, marketing site, SaaS homepage, product page, or any website
  that needs sections like Hero, Features, Pricing, Testimonials, How It Works,
  Comparison table, CTA, or Footer. Also use for adding new sections to existing
  landing pages. Derived from the BB Post landing page — the company standard for
  all website builds. Written for small models: every step is explicit, every value
  is exact, copy-paste ready.
---

# WebsiteDev Skill

Build landing pages using the BB Post pattern:
**Next.js 16 + Tailwind CSS 3 + Framer Motion 12 + shadcn/ui + Plus Jakarta Sans**

This is the company standard. Follow it exactly. Do not invent new patterns.

---

## 1. Tech Stack Setup

### Required packages — run these commands exactly:

```bash
pnpm add framer-motion@^12.0.0
pnpm add next@16 react@19 react-dom@19
pnpm add tailwindcss@3.4.17 postcss autoprefixer
pnpm add @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### Install shadcn/ui CLI:

```bash
pnpm dlx shadcn@latest init
# Choose: TypeScript=Yes, Tailwind=Yes, CSS variables=Yes, dark mode=class
```

### Add Google Font (Plus Jakarta Sans) — copy-paste into layout.tsx:

```typescript
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({
  weight: 'variable',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
```

### tailwind.config.cjs — minimum required config:

```javascript
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx,html}'],
  theme: { extend: {} },
  plugins: [],
};
```

### postcss.config.mjs:

```javascript
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} },
};
```

---

## 2. Page Structure Template

### Directory layout (create exactly this):

```
src/app/(landing)/
├── layout.tsx          ← HTML root, font, metadata, viewport
├── page.tsx            ← imports and renders all sections in order
├── landing.css         ← marquee keyframe animation
├── data/
│   └── landing.ts      ← ALL static content arrays (no content in components)
└── components/
    ├── nav.tsx
    ├── hero.tsx
    ├── trust-bar.tsx
    ├── features.tsx
    ├── how-it-works.tsx
    ├── testimonials.tsx
    ├── comparison.tsx
    ├── cta-mid.tsx
    ├── pricing-teaser.tsx
    ├── cta-final.tsx
    └── footer.tsx
```

### page.tsx — section order is fixed:

```typescript
export const dynamic = 'force-dynamic'; // required for framer-motion v12

import { Nav } from './components/nav';
import { Hero } from './components/hero';
import { TrustBar } from './components/trust-bar';
import { Features } from './components/features';
import { HowItWorks } from './components/how-it-works';
import { Testimonials } from './components/testimonials';
import { Comparison } from './components/comparison';
import { CtaMid } from './components/cta-mid';
import { PricingTeaser } from './components/pricing-teaser';
import { CtaFinal } from './components/cta-final';
import { Footer } from './components/footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0E0E0E]">
      <Nav />
      <Hero />
      <TrustBar />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Comparison />
      <CtaMid />
      <PricingTeaser />
      <CtaFinal />
      <Footer />
    </main>
  );
}
```

### layout.tsx — copy-paste this exactly:

```typescript
import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { ReactNode } from 'react';
import './landing.css';

const jakartaSans = Plus_Jakarta_Sans({
  weight: 'variable',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'YOUR PRODUCT — YOUR TAGLINE',
  description: 'YOUR DESCRIPTION',
  openGraph: {
    title: 'YOUR PRODUCT — YOUR TAGLINE',
    description: 'YOUR DESCRIPTION',
    url: 'https://YOUR-DOMAIN.com',
    siteName: 'YOUR PRODUCT',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YOUR PRODUCT — YOUR TAGLINE',
    description: 'YOUR DESCRIPTION',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://YOUR-DOMAIN.com' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0E0E0E',
};

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakartaSans.className} dark`}>
      <body className="bg-[#0E0E0E] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
```

---

## 3. Design Tokens

**Use these exact values. Do not invent new colors or spacing.**

### Colors:

| Token | Hex | Use for |
|---|---|---|
| Background primary | `#0E0E0E` | Page background, hero, footer |
| Background secondary | `#1A1919` | Alternating sections, cards |
| Accent primary | `#8B5CF6` | Buttons, highlights, borders, icons |
| Accent hover | `#7C3AED` | Button hover state |
| Accent light | `#A78BFA` | Badge text, secondary accent |
| Accent bg | `#8B5CF6/10` | Badge backgrounds, card hover tints |
| Accent border | `#8B5CF6/30` | Badge borders, card hover borders |
| Text primary | `white` | Headlines, bold text |
| Text secondary | `white/60` | Body text, descriptions |
| Text muted | `white/40` | Labels, secondary info |
| Text faint | `white/30` | Footer notes, micro-copy |
| Border default | `white/[0.08]` | Card borders, section dividers |
| Border hover | `white/[0.15]` | Card hover borders |
| Glow shadow | `rgba(139,92,246,0.4)` | Button hover glow |

### Typography:

| Style | Class |
|---|---|
| Display headline | `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]` |
| Section headline | `text-3xl sm:text-4xl font-bold tracking-tight` |
| Card headline | `text-lg font-bold` |
| Section eyebrow | `text-[10px] font-semibold tracking-widest uppercase text-[#8B5CF6]` |
| Body text | `text-sm leading-relaxed text-white/55` |
| Subheadline | `text-lg md:text-xl text-white/60 leading-relaxed` |
| Micro-copy | `text-xs text-white/40` |

### Spacing — section padding:

```
py-24 px-4 sm:px-6 lg:px-8   ← standard section
py-20 px-4 sm:px-6 lg:px-8   ← CTA sections
py-16                          ← trust bar
```

### Container width:

```
max-w-7xl mx-auto   ← full-width sections (nav, features, footer)
max-w-5xl mx-auto   ← medium sections (comparison, how-it-works, pricing)
max-w-4xl mx-auto   ← hero, narrow content
max-w-3xl mx-auto   ← CTA sections
```

### Border radius:

```
rounded-2xl   ← cards, feature boxes, pricing cards
rounded-xl    ← primary CTA buttons
rounded-lg    ← secondary buttons, small badges
rounded-full  ← pill badges, avatar circles
```

---

## 4. Animation Cookbook

**Copy-paste these patterns. Do not invent new animation patterns.**

### Pattern A — Hero entrance (staggered fade up):

```typescript
'use client';
import { motion, useReducedMotion, type Transition } from 'framer-motion';

const EASE: Transition = { duration: 0.6, ease: 'easeOut' };
const visible = { opacity: 1, y: 0 };
const hidden = { opacity: 0, y: 24 };

// In component:
const reduced = useReducedMotion();

<motion.div
  initial={reduced ? false : hidden}
  animate={visible}
  transition={{ ...EASE, delay: 0 }}    // delay 0, 0.1, 0.2, 0.3... for stagger
>
  {/* content */}
</motion.div>
```

### Pattern B — Scroll reveal (single element):

```typescript
'use client';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

// In component:
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: '-80px' });
const reduced = useReducedMotion();

<motion.div
  ref={ref}
  initial={reduced ? false : { opacity: 0, y: 24 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.55, ease: 'easeOut' }}
>
  {/* content */}
</motion.div>
```

### Pattern C — Scroll reveal grid (staggered cards):

```typescript
// Attach ref to the parent section, animate each card with index-based delay:
const ref = useRef(null);
const inView = useInView(ref, { once: true, margin: '-80px' });

// Each card (inside .map):
<motion.div
  ref={ref}  // on section, not card
  initial={reduced ? false : { opacity: 0, y: 32 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
>
```

### Pattern D — Mobile drawer (AnimatePresence):

```typescript
import { AnimatePresence, motion } from 'framer-motion';

<AnimatePresence>
  {open && (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.15 }}
    >
      {/* mobile menu content */}
    </motion.div>
  )}
</AnimatePresence>
```

### Pattern E — CSS marquee (trust bar, no JS):

In `landing.css`:

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  @keyframes marquee {
    0%, 100% { transform: translateX(0); }
  }
}
```

In component (duplicate array for seamless loop):

```typescript
<div style={{ animation: 'marquee 40s linear infinite' }} className="flex gap-8 w-max">
  {[...ITEMS, ...ITEMS].map((item, i) => (
    <div key={`${item}-${i}`}>...</div>
  ))}
</div>
```

### Rules for all animations:

1. Always check `useReducedMotion()` — set `initial={reduced ? false : hiddenState}`
2. Always use `once: true` in `useInView` — don't replay on scroll-up
3. Never animate layout properties (width, height) — only opacity and transform
4. Keep duration between 0.45–0.65s. Never exceed 0.8s
5. Always use `ease: 'easeOut'` unless you have a specific reason

---

## 5. shadcn/ui Component Checklist

### Install these components (run commands exactly):

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add badge
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add separator
```

### When to use each:

| Component | Use for |
|---|---|
| `<Button>` | CTA buttons (wrap in `<Link>` for navigation) |
| `<Badge>` | Pre-headline labels, tags |
| `<Card>` | Feature cards, testimonial cards, pricing cards |
| `<Separator>` | Footer dividers |

### Note: The `dark` class on `<html>` is required for shadcn dark mode tokens.

In layout.tsx body:
```typescript
<html lang="en" className={`${jakartaSans.className} dark`}>
```

---

## 6. Responsive Rules

**Use these breakpoints. Do not add custom breakpoints.**

| Breakpoint | Tailwind prefix | Viewport |
|---|---|---|
| Mobile | (none) | 0–639px |
| Tablet | `sm:` | 640px+ |
| Small desktop | `md:` | 768px+ |
| Large desktop | `lg:` | 1024px+ |
| Wide | `xl:` | 1280px+ |
| Max-width | `2xl:` | 1536px+ |

### Grid patterns — copy-paste:

```
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5   ← feature cards (3-col)
grid grid-cols-1 md:grid-cols-3 gap-10                  ← steps (3-col)
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5   ← testimonials (4-col)
grid grid-cols-1 md:grid-cols-3 gap-5                   ← pricing tiers
grid grid-cols-2 md:grid-cols-4 gap-4                   ← stats bar
```

### Nav responsive pattern:

```
hidden md:flex   ← desktop nav links
md:hidden        ← mobile hamburger button
```

### Button responsive pattern:

```
flex flex-col sm:flex-row items-center gap-4   ← stacked on mobile, row on desktop
w-full sm:w-auto                               ← full-width on mobile, auto on desktop
```

### Text responsive pattern:

```
text-5xl md:text-6xl lg:text-7xl   ← hero headline
text-3xl sm:text-4xl               ← section headline
text-sm md:text-base               ← body text (if needed)
```

---

## 7. Performance Checklist

Check every item before marking the page done:

- [ ] **Images**: Use `next/image` for ALL images. Never use `<img>` tags.
  ```typescript
  import Image from 'next/image';
  <Image src="/logo.png" alt="..." width={32} height={32} priority />
  // Add `priority` only for above-the-fold images (logo, hero image)
  ```

- [ ] **Font**: Use `next/font/google` with `display: 'swap'`. Never load fonts via CSS `@import`.

- [ ] **Dynamic import for heavy components** (if adding charts, maps, etc.):
  ```typescript
  import dynamic from 'next/dynamic';
  const HeavyChart = dynamic(() => import('./HeavyChart'), { ssr: false });
  ```

- [ ] **Framer Motion**: Never import all of framer-motion. Import only what you use:
  ```typescript
  import { motion, useInView, useReducedMotion } from 'framer-motion';
  // NOT: import * as motion from 'framer-motion'
  ```

- [ ] **Static data**: Put all content arrays in `data/landing.ts`, not inside components. This enables tree-shaking and server-side rendering.

- [ ] **Server vs client components**:
  - Add `'use client'` only to components that use hooks or browser APIs
  - `TrustBar`, `Footer` should be server components (no `'use client'`)
  - `Nav`, `Hero`, `Features`, `HowItWorks`, `Comparison`, `Testimonials`, `CtaMid`, `CtaFinal`, `PricingTeaser` need `'use client'`

- [ ] **`force-dynamic`**: Add to `page.tsx` when using framer-motion v12:
  ```typescript
  export const dynamic = 'force-dynamic';
  ```

- [ ] **Overflow**: Add `overflow-x-hidden` to `<body>` to prevent horizontal scroll from glow effects.

---

## 8. Accessibility Checklist

Check every item before marking the page done:

- [ ] **Nav**: Mobile button must have `aria-label` and `aria-expanded`:
  ```typescript
  <button aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
  ```

- [ ] **Images**: Every `<Image>` must have a meaningful `alt` attribute. Never use empty string unless purely decorative.

- [ ] **Decorative elements**: Add `aria-hidden="true"` to background glows and decorative shapes:
  ```typescript
  <div aria-hidden="true" className="absolute ... blur-3xl" />
  ```

- [ ] **Stars/ratings**: Wrap star icons in a container with `aria-label`:
  ```typescript
  <div className="flex gap-1" aria-label="5 stars">
    {[...Array(5)].map((_, i) => <span key={i}>&#9733;</span>)}
  </div>
  ```

- [ ] **External links**: All links opening in new tab must have `rel="noopener noreferrer"`:
  ```typescript
  <Link href="https://..." target="_blank" rel="noopener noreferrer">
  ```

- [ ] **Semantic HTML**: Use correct elements:
  - `<header>` for nav
  - `<main>` wrapper in page.tsx
  - `<section>` for each page section
  - `<footer>` for footer
  - `<nav>` inside header for nav links
  - `<h1>` only once (in hero)
  - `<h2>` for section headlines
  - `<h3>` for card headlines
  - `<blockquote>` for testimonial quotes

- [ ] **Contrast**: All text must pass WCAG AA:
  - `white` on `#0E0E0E` ✓
  - `white/60` on `#0E0E0E` ✓
  - Do NOT use `white/20` or lower for readable text

- [ ] **Skip nav**: Add to layout if needed for keyboard users:
  ```typescript
  <a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>
  ```

---

## 9. SEO Template

### layout.tsx metadata (replace ALL_CAPS placeholders):

```typescript
export const metadata: Metadata = {
  title: 'PRODUCT_NAME — TAGLINE',
  description: 'DESCRIPTION_150_CHARS_MAX',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'PRODUCT_NAME — TAGLINE',
    description: 'DESCRIPTION_150_CHARS_MAX',
    url: 'https://YOUR_DOMAIN',
    siteName: 'PRODUCT_NAME',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://YOUR_DOMAIN/og-image.png',  // 1200x630px
        width: 1200,
        height: 630,
        alt: 'PRODUCT_NAME',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PRODUCT_NAME — TAGLINE',
    description: 'DESCRIPTION_150_CHARS_MAX',
    images: ['https://YOUR_DOMAIN/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://YOUR_DOMAIN' },
};
```

### JSON-LD structured data for SaaS products

JSON-LD uses a React `<script>` tag with serialized static JSON. This is the
standard Next.js pattern and is **safe** because the content is a hardcoded
object literal — never user-supplied data. Do not pass any dynamic or
user-controlled values into this object.

Place inside `LandingLayout`, after the `<body>` opening tag:

```typescript
{/* Safe: content is a static object literal, never user-supplied data */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'PRODUCT_NAME',
      description: 'DESCRIPTION',
      url: 'https://YOUR_DOMAIN',
      applicationCategory: 'BusinessApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free plan available',
      },
    }),
  }}
/>
```

**Security rule**: Never interpolate request data, user input, or env vars into
this JSON object. All values must be string or boolean literals you wrote.
If you need dynamic values, fetch them server-side and validate they contain
only alphanumeric characters before including them.

### OG image requirements:
- Size: 1200 × 630px
- Format: PNG
- File location: `public/og-image.png`
- Must show: product name, tagline, and brand colors

### Canonical URL: Always set. Must match the production domain exactly.

---

## 10. Visual QA Checklist

Before marking done, check the page at these breakpoints using browser dev tools:

| Breakpoint | Width | Check |
|---|---|---|
| Mobile S | 375px | Nav hamburger visible, hero text readable, buttons full-width |
| Mobile L | 428px | No horizontal scroll, text wraps cleanly |
| Tablet | 768px | Grid starts switching to 2-col, adequate padding |
| Desktop | 1280px | 3-col feature grid, full nav visible, max-width respected |
| Wide | 1440px | Content centered, no stretching, margins visible |

### Per-section checks:

**Nav**:
- [ ] Logo visible at all sizes
- [ ] Desktop nav hidden on mobile
- [ ] Mobile drawer opens/closes with animation
- [ ] CTA button visible on desktop

**Hero**:
- [ ] Headline legible on mobile (no overflow)
- [ ] CTA buttons stack on mobile, row on desktop
- [ ] Background glow visible but not overwhelming
- [ ] Stat row wraps cleanly on mobile

**TrustBar**:
- [ ] Marquee scrolls smoothly
- [ ] Fade edges on left/right visible
- [ ] Stats grid is 2-col on mobile, 4-col on desktop

**Feature cards**:
- [ ] 1-col mobile, 2-col tablet, 3-col desktop
- [ ] Equal card heights in each row
- [ ] Hover border color change visible

**Comparison table**:
- [ ] Horizontally scrollable on mobile
- [ ] Highlighted column visible
- [ ] `min-w-[540px]` prevents table collapse

**Pricing**:
- [ ] Highlighted plan has ring border
- [ ] Price numbers legible
- [ ] CTA buttons full-width on mobile

**Footer**:
- [ ] 2-col on mobile (brand + first col), 5-col on desktop
- [ ] All links work
- [ ] Copyright year correct

### Standard acceptance criteria:
- No console errors
- No horizontal scroll at any breakpoint
- Lighthouse performance score > 90
- Lighthouse accessibility score > 90
- All CTA links point to correct destinations

---

## Section-by-Section Build Guide

Build sections in this order. Each depends on the data file being set up first.

### Step 1: Create `data/landing.ts` first

Define all content before writing components. Structure:

```typescript
// Stats for TrustBar
export const STATS = [
  { value: 'NUMBER+', label: 'LABEL' },
  // ... 4 items
] as const;

// Platform names for marquee
export const PLATFORMS = ['Name1', 'Name2', ...] as const;

// Features for Features section
export const FEATURES = [
  {
    eyebrow: 'CATEGORY',    // e.g., 'Scheduling'
    title: 'TITLE',
    icon: 'IconName',       // maps to emoji in component
    body: 'PARAGRAPH',
    bullets: ['bullet1', 'bullet2', 'bullet3', 'bullet4'],
  },
  // ... 6 items
] as const;

// Steps for HowItWorks
export const HOW_IT_WORKS_STEPS = [
  { title: 'TITLE', body: 'DESCRIPTION' },
  // ... 3 items
] as const;

// Testimonials
export const TESTIMONIALS = [
  { name: 'NAME', role: 'ROLE, COMPANY', initials: 'NM', quote: 'QUOTE' },
  // ... 4-8 items
] as const;

// Pricing tiers
export const PRICING_TIERS = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    description: 'DESCRIPTION',
    cta: 'Get Started',
    ctaHref: '/auth',
    highlighted: false,
  },
  // ...
] as const;

// Footer columns
export const FOOTER_COLS = [
  {
    title: 'PRODUCT',
    links: [{ label: 'Features', href: '#features' }, ...],
  },
  // ... 3-4 columns
] as const;
```

### Step 2: Build Nav (copy from Pattern D for mobile drawer)
### Step 3: Build Hero (copy from Pattern A for stagger)
### Step 4: Build TrustBar (copy from Pattern E for marquee — server component)
### Step 5: Build Features (copy from Pattern C for staggered cards)
### Step 6: Build HowItWorks (copy from Pattern B for section reveal)
### Step 7: Build Testimonials (copy from Pattern C for staggered cards)
### Step 8: Build Comparison (copy from Pattern B for table reveal)
### Step 9: Build CtaMid (copy from Pattern B for CTA reveal)
### Step 10: Build PricingTeaser (copy from Pattern C for plan cards)
### Step 11: Build CtaFinal (copy from Pattern B, add radial glow)
### Step 12: Build Footer (server component, no animations needed)

---

## Common Mistakes — Avoid These

| Mistake | Correct approach |
|---|---|
| Using `<img>` instead of `next/image` | Always use `<Image>` from `next/image` |
| Hardcoding content inside components | Put all content in `data/landing.ts` |
| Missing `'use client'` on animated components | Any component using framer-motion hooks needs `'use client'` |
| Missing `force-dynamic` on page.tsx | Add `export const dynamic = 'force-dynamic'` to page.tsx |
| Missing `dark` class on `<html>` | `<html className={font.className + ' dark'}>` |
| Using `white/20` for readable text | Use `white/40` minimum for readable text |
| Not duplicating PLATFORMS for marquee | `[...PLATFORMS, ...PLATFORMS]` — both copies required |
| Forgetting `once: true` in `useInView` | Always `useInView(ref, { once: true, margin: '-80px' })` |
| Forgetting `useReducedMotion` check | `initial={reduced ? false : hiddenState}` |
| External links without rel attribute | Always `rel="noopener noreferrer"` on `target="_blank"` |
| Dynamic data in JSON-LD script | Only use hardcoded string literals in JSON-LD objects |
