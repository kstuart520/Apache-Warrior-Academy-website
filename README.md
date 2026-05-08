# Apache Warrior Academy

Website for Apache Warrior Academy — Brazilian Jiu-Jitsu in Gonzales, TX.

**Live URL:** https://kstuart520.github.io/apache-warrior-academy/
**Custom domain (when ready):** TBD

---

## Project Structure

```
apache-warrior-academy/
├── index.html          # Main page
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Nav, animations, form
├── images/
│   ├── logo.png        # Academy logo (client to provide)
│   ├── hero.jpg        # Hero background photo (client to provide)
│   ├── about.jpg       # About section photo (client to provide)
│   └── kenneth.jpg     # Instructor photo (client to provide)
└── CNAME               # Add when custom domain is confirmed
```

---

## Images Needed From Client

| File | Description | Notes |
|------|-------------|-------|
| `images/logo.png` | Academy logo | PNG with transparent background preferred |
| `images/hero.jpg` | Hero background photo | Action shot or mats, wide/landscape |
| `images/about.jpg` | About section photo | Portrait orientation preferred |
| `images/kenneth.jpg` | Kenneth in his gi | Portrait, 3:4 ratio ideal |

All images are case-sensitive. Drop files directly into the `images/` folder with these exact filenames.

---

## Formspree Setup (Contact Form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — set the email to `apachewarrioracademy@gmail.com`
3. Copy your Form ID (looks like `xpwqabcd`)
4. In `index.html`, find this line:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
5. Replace `YOUR_FORM_ID` with your actual Form ID
6. Save and push — the form is live

---

## Deployment

1. Push all files to `main` branch
2. GitHub → Settings → Pages → Source: `main` / `/(root)` → Save
3. Site goes live at: `https://kstuart520.github.io/apache-warrior-academy/`
4. Add custom domain after confirming the github.io URL works

---

## Custom Domain (When Ready)

1. Add CNAME file to repo root with just the domain on line 1:
   ```
   apachewarrioracademy.com
   ```
2. At DNS registrar, add A records pointing to GitHub:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
3. Add CNAME: `www` → `kstuart520.github.io`
4. In GitHub Pages settings, enter the custom domain
