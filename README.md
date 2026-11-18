# Apache Warrior Academy — Website

Veteran-owned Brazilian Jiu-Jitsu academy in Gonzales, TX.  
Live at **[apachewarrioracademy.com](https://apachewarrioracademy.com)**

---

## Tech Stack

- Static HTML / CSS / JS — no build step required
- Deployed via GitHub Pages (main branch / root)
- Contact forms powered by [Formspree](https://formspree.io) (`mgodlnrg`)
- Custom domain via CNAME file

---

## File Structure

```
/
├── index.html          # Homepage
├── about.html          # About the academy
├── programs.html       # Youth & Adult BJJ programs
├── pricing.html        # Membership pricing + drop-in
├── schedule.html       # Class schedule (standalone page)
├── enroll.html         # Enrollment form
├── contact.html        # Contact + map
├── CNAME               # Custom domain (apachewarrioracademy.com)
├── css/
│   ├── style.css       # Global styles, brand tokens, components
│   └── pages.css       # Inner page layouts (hero, cards, grids)
├── js/
│   └── main.js         # Shared JS (lightbox, scroll effects)
└── images/
    ├── hero.PNG            # Desktop hero image
    ├── hero-mobile.PNG     # Mobile hero image (≤768px)
    ├── logo.png            # Nav + footer logo
    ├── favicon.png         # 32×32 favicon
    └── favicon-192.png     # 192×192 PWA icon
```

---

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--red` | `#8B1A1A` | Deep crimson — from logo burst panels |
| `--red-dark` | `#5C0F0F` | Dark red shadows — hover states |
| `--black` | `#2C2416` | Dark charcoal — from logo stone texture |
| `--cream` | `#C8B89A` | Aged parchment — from logo background |
| `--cream-light` | `#EDE5D5` | Light mode page background |
| `--stone` | `#A89070` | Mid-tone stone — secondary text |
| `--surface` | `#FFFFFF` | Cards, form backgrounds |
| `--surface-alt` | `#F0EAE0` | Card lift color on cream bg |

> **Note:** Colors matched to AWA logo (November 2026). Update if logo changes.

**Fonts:** Bebas Neue (display) · Barlow Condensed (labels/nav) · Barlow (body)

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
**Effective:** August 11, 2025

| Day | Youth BJJ | Adult BJJ |
|-----|-----------|-----------|
| Tuesday | 6:15–7:00 PM | 7:00–8:00 PM |
| Wednesday | 6:15–7:00 PM | 7:00–8:00 PM |
| Saturday | 10:00–11:00 AM | 11:00 AM–12:00 PM |

⚠ Saturday classes may be cancelled during competitions — check Facebook for updates.

---

## Contact / Coach Kenny

- **Phone/SMS:** (508) 905-9867
- **Facebook:** [Apache Warrior Academy](https://www.facebook.com/profile.php?id=61588543511512)
- **Instagram:** [@apachewarrioracademy](https://www.instagram.com/apachewarrioracademy)

---

## Deployment

1. Push changes to `main` branch
2. GitHub Pages serves from root automatically
3. Custom domain set via `CNAME` file — DNS managed at registrar

**If push is rejected:** `git pull --rebase` then `git push`

---

## Hero Image Naming (Important)

Upload class photos to the `images/` folder with these exact names (lowercase):

| File | Used for |
|------|----------|
| `hero.JPG` | Desktop hero (all screens > 768px) |
| `hero-mobile.JPG` | Mobile hero (≤ 768px) |

> GitHub Pages is case-sensitive. Use `.png` lowercase. No text overlay needed — the site adds the headline text on top.

---

## Changelog

### November 2026
- Hero redesigned to Unified JJ-style centered layout: location pill → academy name → tagline → headline → subtext → Get Started + View Schedule buttons → pricing/address meta line
- Hero image references updated to `hero.JPG` / `hero-mobile.JPG` — upload class photos with these exact names
- Three Pillars strip (Train · Compete · Grow) removed from homepage
- Hero overlay switched from dark to light/white transparent — photo now visible through overlay
- Hero text switched to dark charcoal (#171719) with red accent; subtext dark; meta line dark
- Location pill updated to white frosted glass with dark text
- View Schedule button updated to white card style (matches Unified layout)
- Hero photo object-position set to center bottom
- "Claim Your Free Class" CTA button (above contact section) relinked from Facebook to enroll.html
- Footer copyright updated to 2026 across all pages (index, about, programs, pricing, schedule, contact, enroll) — update annually
- Light/Dark mode toggle added to nav — saves user preference in localStorage; ☀️ Light / 🌙 Dark
- Kenny's photo: upload as `images/kenneth.jpg` — geometric placeholder shows until file is present
- Brand colors updated to match AWA logo: red #8B1A1A, charcoal #2C2416, cream #C8B89A
- Light mode: uniform cream background (#EDE5D5) top to bottom, no alternating section colors
- Dark mode: uniform charcoal background (#2C2416) top to bottom, cream text (#EDE5D5), fully readable
- Theme toggle button updated: reads "Light Mode" / "Dark Mode", no emoji
- Theme toggle added to all pages (index, about, programs, pricing, schedule, contact, enroll)
- MFSLogo.JPG affiliation section: upload logo to images/ folder — section ready to build when you have local partners
- Three Pillars strip added after marquee (Train · Compete · Grow) — dark band, centered, 3 tiles
- Google Reviews section added before Instructor section — 3 real reviews (Christina McCoy, Laura Romo, Ryan Switzer)
- Sticky mobile bar added (Get Started · Class Times · 📞 Call) — visible on mobile only
- Hero address + pricing meta line added below buttons
- Enrollment form (enroll.html) redesigned: visible labels above each field, light background, required field markers, helper hints
- README updated with hero image naming guide

### October 2026
- Added dual hero images: `hero.PNG` (desktop) + `hero-mobile.PNG` (mobile ≤768px) using `<picture>` element
- Added $20 Drop-In tab to pricing page
- Removed schedule list view on homepage — calendar view only
- Full light-mode redesign: cream `#E8DDC5` page background sitewide
- Nav/menu banner updated to cream background with charcoal text
- Facebook + Instagram icons added to all page footers
- Founding Member banner removed (slots filled)
- Address corrected to 803 Oil Patch Ln
- SMS buttons wired up on pricing page with per-plan templates

### August 2025
- Site launched at apachewarrioracademy.com
- Static HTML/CSS/JS, deployed via GitHub Pages
- Formspree contact + enrollment forms
- Mobile-responsive navigation
