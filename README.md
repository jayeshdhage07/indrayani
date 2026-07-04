# 🍃 Hotel Indrayani Pure Veg — Official Website

A modern, mobile-first, SEO-optimized website for **Hotel Indrayani Pure Veg**, a pure vegetarian family restaurant located on the Talegaon-Chakan Road bypass at Induri, Maharashtra.

## 🔗 Live Site
Deployed on Vercel → *(add your URL here after deployment)*

---

## 📁 Project Structure

```
indrayani/
├── index.html            ← Homepage (Hero, Trust Badges, Dishes, Reviews)
├── menu.html             ← Interactive menu with search & category tabs
├── gallery.html          ← Photo gallery with lightbox
├── reservations.html     ← Table booking form
├── contact.html          ← Contact info, Google Map embed
├── vercel.json           ← Vercel deployment config (static site + routing)
├── server.js             ← Local dev server (Node.js, for testing only)
├── css/
│   └── style.css         ← Custom stylesheet (Bootstrap 5 overrides + design system)
├── js/
│   └── main.js           ← Client-side interactivity (filters, forms, modals)
└── assets/
    └── images/           ← AI-generated food photography
```

## ⚙️ Tech Stack

- **HTML5** — Semantic markup, SEO structured data (JSON-LD)
- **CSS3** — Custom design system (Google Fonts: Poppins + Outfit, CSS variables, animations)
- **JavaScript (Vanilla)** — Menu search/filter, gallery lightbox, reservation form logic
- **Bootstrap 5** — Responsive grid, modals, navbar

## 🌐 Key Features

- **Local SEO** — JSON-LD Restaurant schema, unique meta tags per page, Open Graph
- **Interactive Menu** — Real-time dish search + 7 cuisine category tabs
- **Table Reservations** — Form with date constraints, time slots, and success modal
- **Photo Gallery** — Category filters + lightbox zoom
- **Google Map** — Embedded with one-tap directions
- **Click-to-Call** — Header (desktop) + floating pulsing button (mobile)
- **Vercel-ready** — `vercel.json` with clean URL routing and cache headers

## 🚀 Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your GitHub repo
3. Vercel auto-detects static site — **no build command needed**
4. Click **Deploy** ✅

## 💻 Run Locally (for development)

Requires Node.js:
```bash
node server.js
```
Then open → [http://localhost:8000](http://localhost:8000)

---

**Restaurant:** Hotel Indrayani Pure Veg  
**Address:** PPM5+VRR, Talegaon-Chakan Road, Bypass, Induri, Talegaon Dabhade, Maharashtra 410507  
**Cuisine:** Maharashtrian · North Indian · South Indian · Chinese · Biryani  
**Price Range:** ₹200–400 per person
