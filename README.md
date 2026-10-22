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
| `--red` | `#7A171B` | Accents, buttons, labels |
| `--red-dark` | `#5a1014` | Hover states, gradients |
| `--black` | `#171719` | Primary text, footer bg |
| `--cream` | `#E8DDC5` | Page background, light text on dark |
| `--stone` | `#A39A8E` | Secondary/subtle text |
| `--surface` | `#FFFFFF` | Cards, form backgrounds |
| `--surface-alt` | `#F2ECE0` | Section alt backgrounds |

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

## Changelog

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
