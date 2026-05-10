# Apache Warrior Academy — Website Reference

**Live URL:** https://kstuart520.github.io/apache-warrior-academy/
**Custom domain (pending):** TBD — add after confirming github.io URL works
**Formspree ID:** mgodlnrg → https://formspree.io/f/mgodlnrg
**Facebook:** https://www.facebook.com/profile.php?id=61588543511512

---

## File Structure

```
apache-warrior-academy/
├── index.html        Main homepage (scrollable, all sections)
├── enroll.html       Standalone enrollment + waiver page (nav CTA destination)
├── videos.html       Video gallery page
├── css/style.css     All styles for all pages
├── js/main.js        Homepage JS (nav, schedule toggle, modal, chips, form)
├── images/
│   ├── logo.png      Academy logo — PNG with transparent background
│   ├── about.jpg     About section photo — portrait orientation (PENDING)
│   ├── kenneth.jpg   Instructor photo — EXACT filename, .jpg extension
│   └── hero.jpg      Hero background — wide/landscape (OPTIONAL — geo design used instead)
└── CNAME             Add when custom domain is confirmed (bare domain, no extension)
```

---

## Image Reference — Critical Rules

| File | Status | Notes |
|------|--------|-------|
| `images/logo.png` | Pending | PNG transparent background preferred |
| `images/kenneth.jpg` | Pending | **Must be .jpg** — referenced in index.html founder section |
| `images/about.jpg` | Pending | Portrait orientation, training photo |
| `images/hero.jpg` | Optional | Geo CSS design used until real photo provided |

**All image filenames are case-sensitive on GitHub Pages.** Drop files into the `images/` folder with exact filenames above. The site handles missing images gracefully with geo placeholders — no blank boxes.

---

## Pages Overview

### index.html — Homepage
Single-page scroll with sections: Hero → Marquee → About → Programs → Pricing → Schedule → Instructor → CTA → Contact → Footer.

**Nav CTA button** (`Enroll Now`) links to `enroll.html`.

**Schedule section** has two view modes toggled by buttons:
- List view — table format with Reserve Spot buttons
- Calendar view — visual day cards with Reserve buttons
Clicking any Reserve button opens the registration modal.

**Registration modal** (on index.html):
- Pre-fills class name, day, time from whichever button was clicked
- Collects name, phone, email, who they're registering
- Includes full waiver with checkbox (required)
- Submits to Formspree with `form_type: Class Registration`

### enroll.html — Enrollment Page
Full standalone enrollment form. Linked from nav CTA on all pages.
- Collects: name, DOB, email, phone, address, emergency contact, medical conditions
- Guardian block appears automatically when "My Child" or "Both of Us" is selected
- Full official AWA waiver (all 9 sections, verbatim from PDF)
- Submits to Formspree with `form_type: Free Trial Enrollment`

### videos.html — Video Gallery
6-slot video grid. Slots 2–6 are geo placeholders.
**Slot 1** has the Facebook Reel embed (reel ID: 2663422537375175).

**To add a video:** replace the `<div class="video-placeholder">...</div>` block in any slot with:
```html
<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe>
</div>
```
For Facebook videos: Video → ··· → Embed → copy `src` URL → use same iframe pattern.

---

## Waiver — Official Text

The full waiver is embedded in two places:
1. **Registration modal** on `index.html` (class reservations)
2. **Enrollment form** on `enroll.html` (full trial sign-up)

Both use the complete 9-section AWA Assumption of Risk, Waiver of Liability, and Indemnification Agreement verbatim from the signed PDF. If the waiver document is ever updated, update both locations.

---

## Formspree — Contact Form & Registrations

All forms submit to: `https://formspree.io/f/mgodlnrg`

**Spam protection in place:**
- Honeypot field (`name="_gotcha"`) on all forms — bots fill it, Formspree rejects
- Log into formspree.io → Settings → enable reCAPTCHA for additional protection

**Form types Kenneth will receive:**
- `form_type: Contact Inquiry` — from the homepage contact form
- `form_type: Class Registration` — from the schedule Reserve Spot modal
- `form_type: Free Trial Enrollment` — from enroll.html

---

## Pricing (Current)

### Individual
| Plan | Rate |
|------|------|
| Youth (Ages 5–13) | $110/mo |
| Adult (Ages 13+) | $120/mo |

### Military / First Responder (Adults 18+ only)
| Plan | Rate |
|------|------|
| Adult — Military Rate | $100/mo ($20 off) |
Active military, veterans, law enforcement, fire, EMS. Valid ID required. Not combinable with Founding Member discount.

### Family Plan
| Member | Rate |
|--------|------|
| First Adult | $120/mo |
| Second Adult | $110/mo |
| First Youth | $110/mo |
| Second Youth | $100/mo |
| Third Youth & Beyond | $90/mo |

### Discounts
- Military / First Responder: $20 OFF/mo (adults only)
- Founding Member: $20 OFF/mo for life — 11 spots remaining

---

## Schedule (Current)

| Day | Time | Class |
|-----|------|-------|
| Saturday | 5:00–6:00 PM | Youth BJJ (Ages 5–13) |
| Saturday | 6:00–7:00 PM | Adult BJJ (Ages 13+) |
| Sunday | 2:00–3:00 PM | Youth BJJ (Ages 5–13) |
| Sunday | 3:00–4:00 PM | Adult BJJ (Ages 13+) |

Location: Inside Diamond Gymnastics, 801 Oil Patch Ln, Gonzales, TX 78629

---

## Deployment Checklist

1. Push all files to `main` branch (`git add -A → commit → push`)
2. GitHub → Settings → Pages → Source: `main` / `/(root)` → Save
3. Confirm live at `https://kstuart520.github.io/apache-warrior-academy/`
4. **Only after confirming github.io URL works** → add custom domain
5. For custom domain: add CNAME file (bare domain, no extension) + update DNS A records:
   - 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
   - CNAME: `www` → `kstuart520.github.io`

---

## Pending From Client

- [ ] `images/kenneth.jpg` — instructor photo
- [ ] `images/about.jpg` — training photo for About section
- [ ] `images/logo.png` — academy logo
- [ ] Additional Facebook/YouTube video URLs for videos.html slots 2–6
- [ ] Custom domain name confirmed
- [ ] Formspree reCAPTCHA enabled (client logs into formspree.io)

---

## Pre-Publish Code Verification (Run Before Every Push)

**Always run these checks before uploading files to GitHub. Publishing broken code causes live site errors that are visible to users.**

### Check 1 — HTML Structure
Open each `.html` file and confirm:
- One `<!DOCTYPE html>` at the top
- `<meta charset="UTF-8">` present in `<head>`
- `<meta name="viewport"...>` present in `<head>`
- Every opened tag has a matching closing tag
- No `index.html#section` hash links (all nav links go to `.html` pages)

### Check 2 — Internal Links
Every `href` pointing to a local file must match an actual filename exactly (case-sensitive):
- `about.html` ✅ / `About.html` ❌
- `kenneth.jpg` ✅ / `kenneth.png` ❌
- `images/logo.png` ✅ / `images/Logo.png` ❌

### Check 3 — CSS Brace Balance
Open `css/style.css` and `css/pages.css`. The number of `{` must equal the number of `}`. One missing brace breaks all styles below it.

### Check 4 — Required Links on Every Page
Every `.html` file must have:
```html
<link rel="stylesheet" href="css/style.css">
<link rel="stylesheet" href="css/pages.css">   ← all pages except index.html
<link rel="icon" type="image/png" href="images/favicon.png">
```

### Check 5 — Formspree ID
Every form `action` must be:
```
https://formspree.io/f/mgodlnrg
```
Never `YOUR_FORM_ID` or any other value.

### Check 6 — Image Filenames (case-sensitive on GitHub)
| File | Correct name |
|------|-------------|
| Logo | `images/logo.png` |
| Hero | `images/hero.png` |
| Instructor | `images/kenneth.jpg` |
| Favicon | `images/favicon.png` |
| Favicon large | `images/favicon-192.png` |
| About photo | `images/about.jpg` |

### Check 7 — Google Verification Tag (index.html only)
```html
<meta name="google-site-verification" content="LA4Jud9aWqhyvaogNPFyvFDFdin0RECuXeDa9Nnw45o">
```
Must appear only in `index.html`, nowhere else.

### Check 8 — After Every Push
1. Hard refresh the live site: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)
2. Open browser DevTools (`F12`) → Console tab → confirm zero red errors
3. Click through every nav link and confirm it opens the correct page
4. Test on mobile (DevTools → toggle device toolbar)

### Quick Self-Check Before Uploading
Ask before pushing:
- [ ] Did I change a filename? Update every reference to it.
- [ ] Did I add a new page? Add it to `sitemap.xml` and all nav menus.
- [ ] Did I add a new image? Confirm exact filename matches the `src=""` in HTML.
- [ ] Did I edit CSS? Count `{` and `}` — they must be equal.
- [ ] Did I edit JS? Check browser console after push for red errors.
