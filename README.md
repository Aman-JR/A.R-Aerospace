# A.R. Aerospace Website

A complete React + Vite + TailwindCSS website for A.R. Aerospace — ready for GitHub + Netlify deployment.

## Pages
- **Home** — Hero, services grid, certifications, partnership, markets, facility, CTA
- **About** — Overview, mission/vision, core values, partnership detail, roadmap
- **Services** — 8 alternating MRO service sections with hover effects
- **Markets** — Commercial & General Aviation segments
- **Certifications** — EASA + DGCA detail, quality standards, scope table
- **Careers** — Filterable job listings with expandable detail
- **Contact** — Contact form with success state

## Tech Stack
- React 18 + TypeScript
- Vite 6
- TailwindCSS v4
- Wouter (routing)
- Lucide React (icons)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for Production

```bash
npm run build
```

Output goes to `dist/` folder.

## Images to Add

Place these in the `/public/` folder:
- `logo.png` — Your A.R. Aerospace logo (white version recommended, nav handles filter automatically)
- `facility.jpg` — Your facility photo (used in About, Home Partnership, Certifications)

## Deploying to Netlify

### Option A: Drag & Drop (quickest)
1. Run `npm run build`
2. Go to netlify.com → New site → Deploy manually
3. Drag the `dist/` folder into Netlify

### Option B: GitHub → Netlify (recommended for auto-deploy)
1. Push this code to GitHub
2. Go to netlify.com → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy

## Custom Domain (GoDaddy → Netlify)

1. In Netlify: Site Settings → Domain Management → Add custom domain
2. Enter your domain (e.g., araerospace.in)
3. Copy the Netlify nameservers shown (e.g., dns1.p05.nsone.net)
4. In GoDaddy: My Products → DNS → Nameservers → Change → Custom
5. Paste Netlify nameservers → Save
6. Back in Netlify → Verify DNS → Enable HTTPS (free SSL)

DNS propagation: 15 min – 24 hours typically.

## Customization

### Colors
Edit `src/index.css` `:root` block:
```css
:root {
  --gold: #b8962e;      /* gold accent */
  --navy: #0f1929;      /* dark navy */
}
```

### Content
- All page content is in `src/pages/` files
- Contact info is in `src/components/Footer.tsx` and `src/pages/Contact.tsx`
- Navigation links are in `src/components/Navbar.tsx`

### Adding Your Logo
Replace the text logo in `src/components/Navbar.tsx` by uncommenting the `<img>` tag and adding your `logo.png` to `/public/`.
