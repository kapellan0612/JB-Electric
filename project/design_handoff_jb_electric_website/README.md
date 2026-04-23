# Handoff: JB Electric Marketing Website

## Overview

This is a complete marketing website for **JB Electric**, a Massachusetts + New Hampshire licensed electrical contractor serving residential and commercial customers. The site is a small lead-gen marketing site with four screens (Home, Services, About, Contact). The primary conversion goal is getting visitors to **request a free quote** — either through the contact form or by calling the phone number (978.397.9878).

Brand voice: **"Wired for Excellence!"** — bold, trustworthy, workmanlike. Not slick or corporate. The design leans heavily on a single, confident color pair: **deep navy (#0E2A5C) + bolt yellow (#FFD00E)**.

---

## About the Design Files

The files in this bundle are **design references**, not production code. They were authored in React + inline JSX served through a single `index.html` entry point, because that's the fastest way to prototype hi-fi interactions. **Do not ship the HTML directly.**

Your job is to **recreate these designs in the target codebase's environment** using its established patterns and libraries. If no codebase exists yet, choose a framework that fits the project (Next.js / Astro / Remix are all good fits for a marketing site of this size) and implement from scratch.

What to treat as authoritative:

- **Visual design** — colors, typography, spacing, radii, shadows, and the exact composition of every screen. Match pixel-for-pixel where possible.
- **Copy** — the text on every screen is the final copy.
- **Interactions** — hover states, entrance animations, form submit flow, screen transitions. These give the brand its feel.

What to treat as scaffolding you'll replace:

- The React + Babel + CDN loading setup.
- The `localStorage`-based screen router (replace with real routing — `next/router`, React Router, file-based routing, etc.).
- The inline `<style>` block (extract into your CSS system — Tailwind, CSS Modules, vanilla-extract, whatever fits).
- Inline style objects (`heroStyles`, `svcStyles`, etc.) — convert to your component/styling convention.

---

## Fidelity

**High-fidelity.** Every color, font size, spacing value, shadow, border radius, and animation timing in the design files is final. The developer should recreate the UI pixel-perfect.

---

## Tech Context

### Framework Recommendation

A static-first framework is ideal: **Next.js (App Router)**, **Astro**, or **Remix**. The site has no user accounts, no dashboard, and no heavy client-side state. All four screens are content pages; only the contact form needs interactivity. Build it as mostly-static pages with one client component for the contact form.

### Dependencies You'll Need

- No UI library required — the design doesn't use any component patterns that need Radix/MUI/etc.
- **Fonts:** Archivo (weights 400, 600, 700, 800, 900; italic 700, 900) + Manrope (weights 400, 500, 600, 700). Load via `next/font`, `@fontsource`, or `<link>` to Google Fonts.
- **Icons:** All icons in the design are inline SVG. Copy them as-is or replace with Lucide React equivalents (all are standard icons — phone, shield, map-pin, lock, check, arrow-right).

### Form Submission

The contact form currently uses a fake 1.8s timeout to simulate submission. Replace with a real backend — either:
- A form service (Formspree, Basin, Netlify Forms)
- An API route that emails the submission to `jhornetbc@gmail.com`

Fields: `name` (required), `phone`, `email` (required), `service` (select), `message`. See `design_files/Contact.jsx`.

---

## Screens

### 1. Homepage — `Hero.jsx` + `Services.jsx`

**Purpose:** First impression. Drive visitors to either call or open the contact form.

**Layout (above the fold):**
- Full-bleed dark navy hero (`#0E2A5C`), min-height 680px.
- Full-bleed photo of an electrician on the right, with a left-to-right navy gradient fade (see "Hero Pattern" token below) so the left side stays fully dark for text legibility.
- Two-column content grid (`1.05fr 0.95fr`, max-width 1200px, gap 48px):
  - **Left column:** yellow pill eyebrow ("LICENSED & INSURED · MA + NH") → 4-line headline → sub-paragraph → two CTAs → row of 4 trust chips with yellow icons.
  - **Right column:** floating white "Our Services" card with 6 service items (each with a yellow checkmark dot), and a navy CTA button at the bottom.

**Headline (4 lines, Archivo Black 66px, -0.025em tracking, line-height 1.02):**
1. `No Surprises.` (white)
2. `No Guesswork.` (white)
3. `Just Electrical` (yellow `#FFD00E`)
4. `Work Done Right.` (yellow, with a **straight yellow underline** 7px tall, offset 8px below the text, drawn in on load)

**Below the fold (Services section — see "Services" screen below).**

---

### 2. Services — `Services.jsx`

**Purpose:** Show the 4 service categories and let users drill into details before converting.

**Layout (white background):**
- **Header row** (max-width 1200px, padding 80px 40px 56px, 2-column grid):
  - Left: `What We Do` eyebrow + `Expert Electrical / Services` Archivo Black 52px title.
  - Right: supporting paragraph + `Request a Free Quote →` yellow button.
  - Bottom border: 1px `rgba(14,42,92,0.08)`.

- **4-up service grid** (no gap, 1px vertical dividers between cards):
  1. **Electrical Installations** — new construction, additions, upgrades
  2. **Lighting Solutions** — indoor, outdoor, landscape, commercial
  3. **Wiring & Rewiring** — knob-and-tube replacement, service upgrades
  4. **Electrical Repairs** — diagnostics, breaker issues, emergency callouts

  Each card has: large muted number (`01`–`04`, Archivo 900 36px, color `rgba(14,42,92,0.08)`), top-right icon in a rounded square (48px, bg `#EEF2FA`, icon color `#1B3D8F`), bold title, short description, and a `Learn more →` footer.

  **Active state** (clicked): card background flips to navy `#0E2A5C` with a 4px yellow top bar (`box-shadow: inset 0 4px 0 0 #FFD00E`). Number becomes `rgba(255,208,14,0.25)`, icon square becomes solid yellow with navy stroke, title and long description both go white/muted-white. Footer swaps `Learn more` text for a yellow `Get a Quote →` button.

- **CTA strip** (full-width navy bar, padding 48px 40px):
  - Bolt icon image on the left (56px tall).
  - `Ready to get started?` Archivo Black 28px + subtitle.
  - Right side: yellow `Request Free Quote` button + ghost-bordered `978.397.9878` phone link.
  - Inner container: max-width 1200px, flex, aligned center.

See `design_files/Services.jsx` for the exact component.

---

### 3. About — inline in `index.html`

**Purpose:** Brand story page. Lighter traffic than the other screens but supports trust-building.

**Layout:**
- **Hero** (navy `#0E2A5C` with a subtle skewed blue overlay on the right):
  - Eyebrow: `About JB Electric` with yellow 24×2px marker line
  - Headline: `Wired for / Excellence!` — second line uses a yellow-to-amber gradient text fill (`linear-gradient(90deg, #FFD00E, #F7A823)` clipped to text)
  - 72px Archivo Black, -0.03em, line-height 0.92
  - Paragraph max-width 560px, white at 62% opacity
  - Yellow `Get a Free Quote →` button

- **Stats bar** (Brand Blue `#1B3D8F` with 3px yellow bottom border):
  - 4 columns, vertical dividers (`rgba(255,255,255,0.10)`)
  - Each: big yellow headline (36px Archivo 900) + small white-muted caps label
  - Content: `Fully / Insured`, `MA / Licensed`, `$0 / Estimate Cost`, `Residential & / Commercial`

- **Services list** (white section):
  - Same eyebrow pattern (`What We Offer` + yellow marker)
  - `Our Core Services` 44px title
  - 2-column grid of 4 service cards, each with icon box + title + long description

---

### 4. Contact — `Contact.jsx`

**Purpose:** The primary conversion point. Form + visible phone number.

**Layout:**

- **Top strip** (navy, 3px yellow bottom border, padding 56px 40px 48px):
  - Left: JB Electric logo → eyebrow `Get in Touch` → `Request a / Free Quote` headline (Archivo Black 56px, second line uses yellow-amber gradient text)
  - Right: huge yellow phone number `978.397.9878` (Archivo Black 32px) + uppercase email

- **Body** (bg `#F4F6FB`, padding 56px 0 80px, 2-column grid `1.3fr 1fr`):

  **Left column — Form:**
  - Intro paragraph (muted)
  - Field layout:
    - Row 1: `Full Name` + `Phone` (2 columns)
    - `Email Address` (full width, required)
    - `Service Needed` (select with 5 options)
    - `Message` (textarea, 120px, resizable vertical)
    - `Send Request →` submit button (yellow, Archivo 700 15px, 14px 28px padding, 8px radius, yellow glow shadow)
  - Labels: Manrope 700 12px caps, tracking 0.04em, color `#0E2A5C`
  - Inputs: 2px border `rgba(14,42,92,0.12)` idle → yellow on focus with soft yellow ring `0 0 0 3px rgba(255,208,14,0.15)`
  - On submit: button morphs into a progress bar (yellow fills left-to-right over 1.4s with shimmer) then shows a **Success card** with a big yellow bolt-strike animation across the card background

  **Right column — Info sidebar (navy card):**
  - 3px gradient bar at top (yellow → amber → orange)
  - Sections: `Call Us` → big yellow phone, `Email`, divider, `Service Area` → Greater Massachusetts, `Hours` → Mon–Fri 7am–6pm with amber `Emergency callouts available` secondary line, divider, 2×2 grid of trust checkmarks (Fully Insured, Licensed, Free Quotes, Res + Com)

---

## Shared Components

### Header — `Header.jsx`

- Sticky, `background: rgba(14,42,92,0.97)` with 12px backdrop blur, 1px yellow-tinted bottom border.
- Inner row (max-width 1200, padding 0 40px, height 72px):
  - Logo (56px tall, uses `jb_logo_white.png`) — clickable, routes home
  - Nav: Home / Services / About / Contact. Inactive = `rgba(255,255,255,0.55)`, active = yellow. Hover = yellow underline sweep (`::after` 2px bar, `transform: scaleX(0 → 1)` from left over 260ms).
  - Right side: phone link (Archivo 700 14px, muted white, yellow phone icon) + yellow `Free Quote` button (10px 22px, 6px radius).

### Footer — `Footer.jsx`

- Background `#07193A` (darker than the hero navy), 72px 40px padding, max-width 1200.
- 4-column grid `1.6fr 1fr 0.8fr 1fr`:
  - **Brand column:** logo (44px) + italic yellow tagline `"Wired for Excellence!"` + short description + 3 outlined yellow-tint badges (Fully Insured, Licensed, Free Quotes)
  - **Services column:** links, Manrope 600 14px, muted white, hover → yellow
  - **Company column:** Home / About / Contact links
  - **Contact column:** big yellow phone (22px Archivo 900), muted email, service area line
- Bottom bar: 1px divider + 20px 40px row with `© 2025 JB Electric. All rights reserved.` left and `Residential · Commercial · Massachusetts` right. All muted white at 22% opacity, Manrope 400 12px.

---

## Design Tokens

**All tokens also have visual references in the `design_system/` folder. Open those HTML files in a browser to see them rendered.**

### Colors

#### Primary (Navy Scale)
| Token | Hex | Use |
|---|---|---|
| `--navy-deep` | `#0E2A5C` | Primary brand, hero bg, body text |
| `--navy-deeper` | `#07193A` | Footer bg |
| `--brand-blue` | `#1B3D8F` | Stats bar, links, eyebrow color, icon color |
| `--electric-blue` | `#2E5AAA` | Micro labels on navy cards (e.g. "Tap to learn more") |

#### Accent (Bolt Scale)
| Token | Hex | Use |
|---|---|---|
| `--accent` | `#FFD00E` | Primary CTA, eyebrow pills, highlights, underlines |
| `--accent-hover` | `#F7A823` | CTA hover, gradient midpoint |
| `--alert` | `#F26A21` | Emergency callout text, gradient endpoint |
| `--accent-tint` | `rgba(255,208,14,0.15)` | Footer badge bg on navy |

**Bolt gradient** (used in logo, top bars, gradient text on some headlines):
`linear-gradient(90deg, #FFD00E 0%, #F7A823 50%, #F26A21 100%)`

#### Neutrals
| Token | Hex | Use |
|---|---|---|
| `--bg-base` | `#FFFFFF` | Cards, page sections |
| `--bg-subtle` | `#F4F6FB` | Page background, panels |
| `--bg-hint` | `#EEF2FA` | Icon square bg, subtle surfaces |
| `--border-default` | `rgba(14,42,92,0.08)` | Card borders, section dividers |
| `--border-input` | `rgba(14,42,92,0.12)` | Form input borders |
| `--fg-muted` | `#6B7A99` | Body text, paragraphs |
| `--fg-subtle` | `#9BAABB` | Captions, footnotes |

### Typography

**Fonts:**
- **Archivo** — headlines, buttons, titles. Weights 700/800/900, italic 700/900.
- **Manrope** — body, nav, labels. Weights 400/500/600/700.

**Scale** (full reference in `design_system/type-scale.html`):

| Use | Font | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|---|
| Hero headline | Archivo | 66px | 900 | -0.025em | 1.02 |
| Section title (Services) | Archivo | 52px | 900 | -0.03em | 0.95 |
| Contact headline | Archivo | 56px | 900 | -0.03em | 0.95 |
| CTA strip title | Archivo | 28px | 900 | -0.02em | 1 |
| Card title (lg) | Archivo | 20px | 800 | -0.01em | 1.2 |
| Card title (sm) | Archivo | 17px | 700 | 0 | 1.2 |
| Body | Manrope | 16px | 400 | 0 | 1.7 |
| Body small | Manrope | 15px | 400 | 0 | 1.65 |
| Trust chip | Manrope | 13px | 600 | 0 | 1.4 |
| Form label | Manrope | 12px | 700 | 0.04em caps | 1 |
| Eyebrow (hero pill) | Archivo | 12px | 800 | 0.10em caps | 1 |
| Section eyebrow | Manrope | 11px | 600 | 0.18em caps | 1 |
| Micro label | Manrope | 10px | 600 | 0.12em–0.16em caps | 1 |

### Spacing

8px base scale: `4, 8, 12, 16, 24, 32, 48, 64`. Section padding is typically `80px` vertical, `40px` horizontal. Container max-width is always `1200px`.

### Border Radii

| Radius | Use |
|---|---|
| `4px` | Badges |
| `6px` | Compact buttons (header CTA, card quote button) |
| `8px` | Form inputs, ghost buttons, mid-size buttons |
| `10px` | Primary CTA button (hero + services header) |
| `12px` | Cards, panels, hero floating card |
| `999px` | Eyebrow pills |

### Shadows

| Name | Value | Use |
|---|---|---|
| sm · card | `0 2px 8px rgba(14,42,92,0.10)` | Service cards, subtle lifts |
| md · success | `0 4px 24px rgba(255,208,14,0.12)` | Form success card |
| cta · yellow-glow | `0 6px 18px rgba(255,208,14,0.35)` | Primary CTA (hero, contact submit) |
| lg · info-panel | `0 16px 48px rgba(14,42,92,0.22)` | Contact sidebar navy card |
| xl · hero-card | `0 20px 50px rgba(0,0,0,0.28), 0 4px 12px rgba(0,0,0,0.12)` | Floating card on dark hero |

---

## Interactions & Animations

All timings and easings are final. Use CSS animations/transitions — no JS animation library needed.

### Entrance (Hero)

When the homepage hero mounts, elements animate in with staggered delays:

| Element | Animation | Delay |
|---|---|---|
| Photo | Fade-in + scale from 1.12 → 1.04 (2.2s) then slow Ken Burns loop (28s) | 0 |
| Yellow pill eyebrow | Scale 0.85 → 1 with overshoot (`cubic-bezier(.2,1.4,.3,1)`, 900ms) | 200ms |
| Headline line 1 ("No Surprises.") | Blur-rise (opacity 0 → 1, translateY 28px → 0, blur 8px → 0, 1500ms) | 450ms |
| Headline line 2 ("No Guesswork.") | Same | 700ms |
| Headline line 3 ("Just Electrical") | Same | 950ms |
| Headline line 4 ("Work Done Right.") | Same | 1200ms |
| Yellow underline under line 4 | `scaleX(0 → 1)` from left, 900ms | 2000ms |
| Sub-paragraph | Fade-up (14px, 1200ms) | 1800ms |
| CTA row | Fade-up | 2100ms |
| Trust chips (4) | Fade-up to 92% opacity, staggered 140ms apart | 2200/2340/2480/2620ms |
| Floating services card | Slide in from right (translateX 48px, translateY 14px, 1500ms) | 1200ms |
| Checklist items (6) | Slide in from left (10px), staggered 250ms | 2000–3250ms |

### On Scroll

Elements with class `jb-rise` fade up + translateY 32px → 0 (700ms) when they enter the viewport (`IntersectionObserver`, threshold 0.12). Service cards use staggered `transition-delay` of 0/100/200/300ms so they cascade.

### Hover

- **Primary yellow button:** `translateY(-2px)` + expanded yellow glow `0 10px 28px rgba(255,208,14,0.42)` over 220ms.
- **Inverse buttons** (those marked `jb-btn-inverse-white`): on hover, background flips to white with navy text. On dark headers, inverse flips to navy-on-yellow.
- **Nav link:** yellow underline sweeps from left (`scaleX(0 → 1)`, 260ms).
- **Phone link:** icon does a wiggle animation (520ms, 5 rotation keyframes) + text turns white.
- **Service card:** lifts `-4px`, icon inside scales 1.08 + rotates -3°, "Learn more" text translates right 4px.
- **Arrow buttons** (any `.jb-btn-arrow`): SVG arrow translates right 4px over 220ms.

### Form Submit

On `handleSubmit`:
1. Button gets `.is-loading` class.
2. Label fades out, background flips to navy.
3. A yellow progress bar fills left-to-right over 1400ms with a shimmer animation (background-position cycles).
4. After 1800ms, `sent = true` — form replaced with a success card.
5. Success card plays a **bolt-strike** animation: a diagonal yellow gradient sweeps across the card (700ms, 80ms delay), while a big yellow bolt icon zaps in with scale + rotate + drop-shadow glow (900ms elastic). A pulsing ring radiates out from the bolt (1800ms, 400ms delay).

### Page Transitions

When `screen` changes, `<main>` remounts with class `jb-page`:
- Opacity 0 → 1, translateY 18px → 0, blur 4px → 0 over 600ms.

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce` — they're disabled (duration 0.01ms). Ensure your implementation keeps this media query.

---

## State Management

Minimal. One state variable per screen:

- **Hero:** `photoLoaded` (boolean) — for shimmer placeholder.
- **Services:** `active` (string | null) — which service card is expanded.
- **Contact:** `form` (object), `focused` (string | null), `sent` (boolean), `submitting` (boolean).
- **App shell:** `screen` (string) — currently persisted to `localStorage` (replace with real routing).

No data fetching. No API calls other than the future contact form endpoint.

---

## Assets

Copy these from `design_files/` to your public/static folder:

| File | Use | Dimensions |
|---|---|---|
| `jb_electric_logo.png` | Primary logo (on light) | — |
| `jb_logo_white.png` | Header / on-navy logo | — |
| `jb_logo_contact.png` | Contact top strip logo | — |
| `jb_logo_footer.png` | Footer logo | — |
| `hero-electrician.png` | Hero full-bleed photo | Right-side crop with navy gradient fade overlay |
| `hero-bg.png` | (Alternate hero bg — currently unused) | — |
| `bolt-icon.png` | CTA strip bolt icon | 56px tall |
| `business_card_back.jpg` | (Reference only — brand orientation) | — |

The logo PNGs are the brand's actual logos — don't regenerate them.

---

## Files in This Bundle

### `design_files/` — the hi-fi prototype
- `index.html` — entry point with all global styles, routes, and the About screen inline
- `Header.jsx` — sticky header
- `Hero.jsx` — homepage hero
- `Services.jsx` — services grid + CTA strip
- `Contact.jsx` — contact form + info sidebar
- `Footer.jsx` — footer
- `_assets.js` — asset resolver (maps filenames to data URIs for standalone use — **discard this, use real paths in your implementation**)
- PNG assets — copy to your static folder

### `design_system/` — visual reference for design tokens
Standalone HTML files, each previewing one aspect of the design system. Open in a browser to see rendered. These ARE the source of truth for colors, type, spacing, buttons, cards, etc.

- `colors-primary.html`, `colors-accent.html`, `colors-semantic.html`
- `type-display.html`, `type-body.html`, `type-scale.html`
- `spacing.html`, `shadows.html`
- `buttons.html`, `badges.html`, `cards.html`, `checklist.html`, `contact-block.html`
- `logo.html`, `hero-pattern.html`

---

## Quick Start Checklist

1. [ ] Stand up framework (Next.js App Router recommended), install fonts (Archivo + Manrope).
2. [ ] Port design tokens (colors, spacing, radii, shadows, type scale) into your CSS system or Tailwind config.
3. [ ] Copy image assets to `public/`.
4. [ ] Build shared layout: `Header` + `Footer` + page wrapper with `jb-page` entrance animation.
5. [ ] Implement Home page (Hero + Services). Hero is the biggest time sink — get the entrance animation right.
6. [ ] Implement Services page (standalone version of the Services grid).
7. [ ] Implement About page.
8. [ ] Implement Contact page + wire up form submission to a real endpoint.
9. [ ] Verify `prefers-reduced-motion` disables animations.
10. [ ] Test on mobile — the current design is desktop-first (1200px container). Add responsive breakpoints; at narrow widths the hero's 2-column layout should stack, service grid should collapse to 2-wide then 1-wide, contact layout should stack.

---

## Contact Info (used in the design)

- Phone: **978.397.9878** (`tel:9783979878`)
- Email: **jhornetbc@gmail.com**
- Service area: Greater Massachusetts + New Hampshire
- Hours: Mon–Fri 7am–6pm, with emergency callouts available
