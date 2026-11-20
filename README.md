# Apache Warrior Academy — Website

Veteran-owned Brazilian Jiu-Jitsu academy in Gonzales, TX.  
Live at **[apachewarrioracademy.com](https://apachewarrioracademy.com)**

---

## Quick Context (Session Handoff)

This site is a **static HTML/CSS/JS** site deployed on **GitHub Pages** from the `main` branch.  
No build step. Push to main → live within ~60 seconds.

**Repo:** `github.com/kstuart520/awa` *(update if different)*  
**Formspree ID:** `mgodlnrg` (used in both contact + enroll forms)  
**Custom domain:** `apachewarrioracademy.com` (CNAME file in root)

---

## Tech Stack

- Static HTML / CSS / JS — no build step, no framework
- Deployed via GitHub Pages (main branch / root)
- Contact + enroll forms powered by [Formspree](https://formspree.io) (`mgodlnrg`)
- Custom domain via `CNAME` file (no extension, just the domain on line 1)
- Fonts: Bebas Neue · Barlow Condensed · Barlow — loaded via Google Fonts

---

## File Structure

```
/
├── index.html          # Homepage
├── about.html          # About the academy
├── programs.html       # Youth & Adult BJJ programs
├── pricing.html        # Membership pricing + drop-in
├── schedule.html       # Class schedule (standalone page)
├── instructor.html     # Coach Kenny bio + credentials
├── enroll.html         # Enrollment form
├── contact.html        # Contact + map
├── CNAME               # Custom domain (apachewarrioracademy.com)
├── css/
│   ├── style.css       # Global styles, brand tokens, components, theme modes
│   └── pages.css       # Inner page layouts (hero, cards, grids) + theme mode overrides
├── js/
│   └── main.js         # Scroll-reveal (IntersectionObserver), nav scroll, hamburger,
│                       # price tabs, schedule toggle, chip selectors, back-to-top
└── images/
    ├── hero.JPG            # Desktop hero image (>768px) — case-sensitive on GitHub
    ├── hero-mobile.JPG     # Mobile hero image (≤768px) — case-sensitive on GitHub
    ├── logo.png            # Nav + footer logo
    ├── kenneth.jpg         # Coach Kenny photo (instructor page)
    ├── favicon.png         # 32×32 favicon
    └── favicon-192.png     # 192×192 PWA icon
```

---

## Theming Architecture

### Two CSS files, one class system

| File | Purpose |
|------|---------|
| `css/style.css` | Global: brand tokens, nav, hero, footer, components (forms, chips, badges, CTA) |
| `css/pages.css` | Inner pages: page-hero banner, value cards, program cards, schedule cards, instructor grid |

### Theme toggle

- JS on every page reads `localStorage.getItem('awa-theme')` → applies `body.light-mode` or `body.dark-mode`
- All theme overrides use `body.light-mode .selector` or `body.dark-mode .selector` with `!important`
- Default class on `<body>` is `class="light-mode"` (JS overrides on load if saved preference differs)
- Toggle button: `id="themeToggle"` → label reads "Light Mode" / "Dark Mode"

### Inner pages vs homepage

- Homepage (`index.html`) uses only `css/style.css`
- All inner pages link both `css/style.css` + `css/pages.css`
- `enroll.html` also has an inline `<style>` block for form layout (base styles only — theme overrides are in `style.css`)

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--red` | `#8B1A1A` | Deep crimson — primary accent, buttons, CTA |
| `--red-dark` | `#5C0F0F` | Dark red — hover states, dark mode buttons |
| `--black` | `#2C2416` | Dark charcoal — from logo stone texture |
| `--near-black` | `#1E1A10` | Near-black — body text in light mode |
| `--cream` | `#C8B89A` | Aged parchment — labels, icons in dark mode |
| `--cream-light` | `#EDE5D5` | Light mode page background |
| `--stone` | `#A89070` | Mid-tone stone — secondary text |
| `--surface` | `#FFFFFF` | Cards |
| `--surface-alt` | `#F0EAE0` | Form backgrounds, card lift on cream bg |

> **Note:** Colors matched to AWA logo (November 2026). Update if logo changes.

---

## Component Reference

### CTA Banner (homepage + instructor page)
```html
<section class="cta-banner" id="trial">
  <div class="cta-inner">
    <span class="label" style="color:rgba(255,255,255,0.6);">No Commitment. No Pressure.</span>
    <h2>YOUR FIRST CLASS<br>IS <em>FREE</em></h2>
    <p>Just show up and see what you're made of.</p>
    <a href="enroll.html" class="btn-white">Claim Your Free Class →</a>
  </div>
</section>
```
- Uses `.cta-banner` (red gradient, `#2C2416` charcoal for `em` text)
- Inner pages that previously used `.page-cta-strip` have been updated to use `.cta-banner`

### Location Pill (homepage hero)
```html
<a href="https://maps.google.com/?q=803+Oil+Patch+Ln,+Gonzales,+TX+78629"
   target="_blank" rel="noopener"
   class="hero-location-pill"
   aria-label="Get directions to Apache Warrior Academy">
  <span class="hero-location-dot"></span> Gonzales, Texas
</a>
```
- Frosted glass pill, links to Google Maps for directions
- Hover: lifts 2px with shadow

### Contact / Enroll Forms

Both forms use chip selectors (`.chip` / `.chip.selected`) for day/program selection.

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Form wrapper | `#F0EAE0` bg | `#3A3020` bg |
| Inputs / selects | `#F0EAE0` bg · `#1E1A10` text | `#2C2416` bg · `#F0EAE0` text |
| Labels | `#1E1A10` | `#C8B89A` |
| Placeholder | `rgba(30,26,16,0.4)` | `rgba(200,184,154,0.4)` |
| Submit button | `#8B1A1A` bg | `#5C0F0F` bg (hover reverses) |
| Chip (default) | `#2C2416` text · subtle dark border | `#C8B89A` text · cream border |
| Chip (selected) | `#8B1A1A` text · red border · light red fill | `#F0EAE0` text · cream border · light cream fill |

- Contact form class: `.contact-form-wrap` → overrides in `style.css`
- Enroll form classes: `.enroll-form-wrap` / `.enroll-form` / `.ef-label` → base in `enroll.html` inline `<style>`, theme overrides in `style.css`

### Mil-Badge (pricing / homepage)
- `.mil-badge` chips — dark mode: `#C8B89A` text on `rgba(200,184,154,0.08)` bg with cream border
- `.military-solo` card text all forced cream in dark mode

### Lightbox Gallery
- Add `data-full="images/filename.jpg"` to any gallery item → triggers built-in lightbox in `main.js`

---

## Pricing

| Plan | Rate |
|------|------|
| Youth Membership | $110/mo |
| Adult Membership | $120/mo |
| Military / First Responder | $100/mo |
| Drop-In (any class) | $20/class |
| Family — 2nd adult | $110/mo |
| Family — 1st youth | $110/mo |
| Family — 2nd youth | $100/mo |
| Family — 3rd+ youth | $90/mo |

First class is always free.

---

## Class Schedule

**Location:** Inside Diamond Gymnastics — 803 Oil Patch Ln, Gonzales, TX 78629  
**Google Maps:** https://maps.google.com/?q=803+Oil+Patch+Ln,+Gonzales,+TX+78629

| Day | Youth BJJ | Adult BJJ |
|-----|-----------|-----------|
| Tuesday | 6:15–7:00 PM | 7:00–8:00 PM |
| Wednesday | 6:15–7:00 PM | 7:00–8:00 PM |
| Saturday | 10:00–11:00 AM | 11:00 AM–12:00 PM |

Saturday classes may be cancelled during competitions — check Facebook for updates.

---

## Contact / Coach Kenny

- **Phone/SMS:** (508) 905-9867
- **Facebook:** [Apache Warrior Academy](https://www.facebook.com/profile.php?id=61588543511512)
- **Instagram:** [@apachewarrioracademy](https://www.instagram.com/apachewarrioracademy)

---

## Deployment Workflow (Tested & Working)

1. Build in Claude → download files → drag into Codespace → `git add . && git commit -m "message" && git push`
2. If push rejected: `git pull --rebase` → `git push`
3. GitHub Pages: Settings → Pages → Branch: main → Folder: / (root) → Save
4. Add custom domain **after** site is confirmed live on the `.github.io` URL
5. CNAME file: no extension, just the domain on line 1

---

## File Naming Rules

- Image filenames are **case-sensitive** on GitHub — match exactly what's in the HTML
- `hero.JPG` and `hero-mobile.JPG` — uppercase `.JPG` extension
- `kenneth.jpg` — lowercase `.jpg`
- `logo.png`, `favicon.png`, `favicon-192.png` — lowercase `.png`
- CNAME file: no file extension at all

---

## Common Pre-Launch Checks

- Search every file for specific numbers/dates (years in business, etc.)
- Also search for written-out versions ("two decades", "twenty years")
- Check meta descriptions — they often get missed in find/replace
- Verify both `www` and non-`www` in Google Search Console
- Submit `sitemap.xml` to Google Search Console after launch
- Request indexing on all pages after DNS switch
- Check for cloaking issues if Google Ads account is involved

---

## Changelog

### November 2026 (session 3 — continued)
- **Location pill → Google Maps link** — `.hero-location-pill` on homepage hero is now an `<a>` tag linking to `https://maps.google.com/?q=803+Oil+Patch+Ln,+Gonzales,+TX+78629`; hover lifts 2px with shadow; `a.hero-location-pill` link styles added to `style.css`
- **README rewritten** — now serves as a full session handoff doc with component reference, theming architecture, and all current specs

### November 2026 (session 3)
- **Contact form theming** — light: `#F0EAE0` wrapper + `#1E1A10` text/labels; dark: `#3A3020` wrapper + `#2C2416` inputs + `#F0EAE0` text + `#C8B89A` labels; submit button `#8B1A1A` light / `#5C0F0F` dark, reversed on hover
- **Enroll form theming** — same spec applied to `.enroll-form-wrap` / `.enroll-form` / `.ef-label`; dark mode overrides added to `style.css`; waiver block + disclaimer themed
- **Chips (contact + enroll)** — unselected: `#2C2416` text in light / `#C8B89A` cream text in dark (was invisible); selected: red in light / cream in dark; all via explicit `body.light-mode`/`body.dark-mode` overrides in `style.css`
- **Instructor CTA** — replaced `.page-cta-strip` with `.cta-banner` to match homepage "YOUR FIRST CLASS IS FREE" section exactly
- **Mil-badge dark mode** — `.mil-badge` chips + all Military card text forced cream in dark mode on both homepage and pricing page
- **Programs hero text** — "Six programs" corrected to "Two programs — Youth BJJ and Adult BJJ"; meta description updated
- **Emojis removed sitewide** — all pictograph emojis stripped from index, pricing, schedule, enroll pages; kept: `✦` marquee separators, `★` review stars, `✓` form success
- **Homepage headline** — "Gonzales County's / Brazilian Jiu-Jitsu / Academy" → "Brazilian Jiu-Jitsu / Academy in / Gonzales County"
- **Enroll hero** — light mode: `#EDE5D5` cream bg + `#2C2416` charcoal text (matches all inner-page banners); dark mode: `#2C2416` bg + cream text
- **"Effective: August 11, 2025" removed** — all 5 instances removed from schedule.html + index.html

### November 2026 (session 2)
- **js/main.js created** — scroll-reveal IntersectionObserver, nav scroll state, hamburger toggle, price tabs, schedule view toggle, chip selectors, back-to-top
- **instructor.html created** — full Coach Kenny page: photo, bio, credentials, philosophy blocks, red CTA strip, footer
- **Pricing tabs** — light mode: charcoal default / red active; dark mode: cream default / red active
- **Dark mode schedule cards** — `.cal-day` now `#3A3020`; legend text forced cream
- **CTA "FREE" em text** — `#2C2416` charcoal in both modes
- **Inner-page banners** — dark mode: charcoal `#2C2416` bg + cream text; light mode: cream bg
- **pages.css theme rules** — comprehensive light/dark overrides for all inner page elements
- **Footer light mode** — changed to `#EDE5D5` cream bg with charcoal text
- **Footer dark mode** — changed to `#1E1A10` near-black; `border-top: none`
- **enroll.html** — missing theme toggle button added to nav

### November 2026 (session 1)
- Hero redesigned to centered unified layout
- Light/Dark mode toggle added to all pages (saves preference in localStorage)
- Brand colors updated to match AWA logo: `#8B1A1A` red · `#2C2416` charcoal · `#C8B89A` cream
- Light mode: uniform `#EDE5D5` cream background sitewide
- Dark mode: uniform `#2C2416` charcoal background, cream text
- Google Reviews section added (Christina McCoy, Laura Romo, Ryan Switzer)
- Sticky mobile bar added (Get Started · Class Times · Call)
- Enrollment form redesigned with visible labels, helper hints, required markers
- Footer copyright updated to 2026 across all pages

### October 2026
- Dual hero images: `hero.JPG` (desktop) + `hero-mobile.JPG` (mobile ≤768px)
- Drop-In tab added to pricing page ($20/class)
- Full light-mode redesign: cream `#E8DDC5` background sitewide
- Facebook + Instagram icons added to all footers
- Address corrected to 803 Oil Patch Ln
- SMS buttons wired up on pricing page

### August 2025
- Site launched at apachewarrioracademy.com
- Static HTML/CSS/JS, deployed via GitHub Pages
- Formspree contact + enrollment forms
- Mobile-responsive navigation
