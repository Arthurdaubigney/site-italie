# Galleria Antica — Milano

Site vitrine multi-pages (Astro, 100 % statique) pour une galerie d'art et d'antiquités à Milan. Contact par téléphone / email (pas de formulaire).

## Démarrer
```bash
npm install
npm run dev        # http://localhost:4321
npm run build && npm run check:seo
```

## À compléter avant la mise en ligne
- `src/data/site.ts` : domaine (`url`, supposé `www.galleria-antica.it`) et adresse. Email et téléphone sont déjà renseignés.
- `public/robots.txt` : mettre le bon domaine dans la ligne `Sitemap`.
- `src/pages/privacy.astro` : bande de texte à faire valider juridiquement.

## Structure
- `src/data/site.ts` — navigation, CTA, catégories (génèrent `/collezioni/[slug]`), FAQ.
- `src/components/` — `ContactBlock`, `Cta`, `Img`, `Faq`, `PageHero`, `CtaBand`.
- `src/layouts/Base.astro` — head SEO (title, description, canonical, OG), JSON-LD (ArtGallery, BreadcrumbList, FAQPage), header glassmorphism, footer.
- `scripts/prepare-assets.py` — télécharge les photos Unsplash, génère WebP 640/1400 et le logo détouré (fond transparent) à partir du logo fourni.
- `scripts/check-seo.mjs` — contrôle title/description/H1/alt+title après build.

Photographies : Unsplash (licence libre), auto-hébergées en WebP.
