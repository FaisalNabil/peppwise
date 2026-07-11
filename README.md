# AcmeOS Theme

A retro desktop-OS styled Astro theme for SaaS marketing sites — draggable windows, a taskbar with a live clock, hard offset shadows, and a two-accent-color design system (amber + blue) built in.

9 pages: Home, Features, Solutions, Pricing, Docs & FAQ, Blog (listing + post), Style Guide, and a 404.

## Requirements

- Node.js 22.12+ and npm 9.6.5+

## Getting Started (Astro source)

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serves the dist/ build locally
```

Every page lives in `src/pages/*.astro`. Shared chrome (head/meta/nav/footer/scripts) lives in `src/layouts/BaseLayout.astro`, with reusable pieces in `src/components/` (`Nav`, `Footer`, `Contact`, `Flag`). All hand-written CSS lives in `public/shared.css` — no CSS framework, no scoped-style rewriting.

## Using the Flat HTML Bundle

If you don't use Node/npm, use the pre-built static export instead: the `dist/` folder produced by `npm run build` is plain HTML/CSS/JS — no build step required to deploy it anywhere.

To preview it locally, serve it with any static server rather than double-clicking the HTML files directly (the pages reference `/shared.css` and `/flags/*.svg` as root-absolute paths, which only resolve correctly through a server):

```bash
npx serve dist/
```

Then open the printed `localhost` URL.

## Customizing

- **Colors, shadows, fonts**: edit the CSS custom properties at the top of `public/shared.css` (`--pep-accent`, `--einv-accent`, `--yellow`, `--shadow-md`, etc.).
- **Nav links, footer, contact copy**: edit `src/components/Nav.astro`, `Footer.astro`, `Contact.astro`.
- **Domain**: update `site` in `astro.config.mjs`, and the `Sitemap:` line in `public/robots.txt`.
- **Region/flag badges**: `<Flag code="sg" />` renders a bordered SVG flag — see `src/components/Flag.astro` and the full catalog on `/style-guide`.
- **Every reusable component** (buttons, os-windows, cards, badges, type scale, color tokens) is cataloged on `/style-guide` — start there when reskinning.

## Credits

- Fonts (Space Grotesk, Inter, IBM Plex Mono) loaded via Google Fonts CDN — no bundled font files.
- Flag icons from the [flag-icons](https://github.com/lipis/flag-icons) package (MIT).

See `THIRD-PARTY-NOTICES.md` for full attribution and `LICENSE` for usage terms.
