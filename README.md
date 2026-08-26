# طريق الأوسمة — Medals Way

Official website of **Medals Way L.L.C** (طريق الأوسمة) — a Dubai-based consulting house
specialised in institutional & employee excellence and medals-awards consulting.

## Stack

Pure static site — no build step, no framework, no backend.

- `index.html` — single-page site, Arabic-first (RTL) with a live English (LTR) toggle
- `assets/css/style.css` — "Obsidian & Gold" design system
- `assets/js/main.js` — animations, particles, bilingual toggle, data-driven awards/clients/medals sections
- `assets/brand/logo-mark.svg` — the Medals Way medal mark (also used as favicon)
- `assets/logos/` — award & client entity logos

## Run locally

Any static server works:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Notes

- The contact form opens a prefilled WhatsApp chat (+971 50 563 9940) — no data is stored.
- Fonts are loaded from Google Fonts (Cairo + Outfit).
- Content data (awards, DGEP medal categories, clients) lives in arrays at the top of `assets/js/main.js`.
