# REQUIN – Restaurant website
HTML + CSS + JavaScript + Bootstrap 5 (CDN). No build step.

## Run
Open `index.html`, or `python3 -m http.server`.

## Deploy
GitHub → Settings → Pages → Deploy from branch → `main` / root.

## Notes
- Images currently load from `c.animaapp.com`. Download them into `assets/images/` and update the URLs in `index.html` and `js/main.js` so they never break.
- Dishes/prices: `js/main.js`. Contact info: `index.html`.
- Reservation form only shows a message: connect it to Formspree / EmailJS / your backend.

## Wave image (hero)
Save the wave picture as `assets/images/hero.jpg`. The CSS uses it first and only falls back to the remote URL if the file is missing.

## Dish images
All dishes use photos (JPG) in `assets/images/dishes/`; `bar-grille.svg`, `homard.svg`, `huitres.svg`, `cocktail.svg` are unused leftovers.
