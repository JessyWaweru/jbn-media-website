# JBN Media website

Marketing site for **jbnmedia.org**, an AI agency for Kenyan businesses: React + Vite, deployed as a static site on Render.

Pages: `/` · `/services` · `/work/goherbal` · `/partners` · `/results` · `/pricing` · `/about` · `/contact` · `/privacy` · `/terms`

## Edit your details

- **WhatsApp number, email, hours:** `src/config.js` (every WhatsApp button reads from here)
- **Home page services list (order, prices, WhatsApp messages):** `src/data/services.js`
- **Prices and package contents, FAQs:** `src/data/plans.js` (AI assistant questions are `aiFaqs`)
- **Case study, partners and results:** `src/data/work.js`. Upcoming work (the "coming soon" cards on the home page) is
  `upcomingWork`: remove `comingSoon` and add a `teaser` and `path` once a case study is ready. Entries marked `placeholder` and the sample revenue
  figure only show in `npm run dev`. `/results` stays hidden on the live site until you set `revenue.kes`.

## Look and feel

All styling is in `src/styles.css`; the variables at the top are the whole palette.

- **Colours** come from the logo: maroon (`--brand`, darker steps up to `--brand-950`), cream (`--bg`) and gold (`--gold`). `--gold-ink` is the gold to use for text on cream. WhatsApp buttons stay WhatsApp green with near-black text (`--wa-ink`), because white on that green is hard to read.
- **Type**: headlines, prices and big numbers use Unbounded (the wordmark's face); everything else is Plus Jakarta Sans.
- **Dark panels** (the lead service card, the call-to-action band, the footer and so on) share one background, `--panel-dark`.
- **The header** is a pill that floats over the page. `--header-h` is its height plus the gaps around it; the heroes use it to slide up behind the header.
- Effects that take a corner radius as a prop (`GlareHover`, `ElectricBorder`, `BorderGlow`) should be given `24`, to match `--radius`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs to dist/
```

## Deploy on Render (static site)

1. Render dashboard → **New → Static Site** → connect this GitHub repo.
2. Build command: `npm ci && npm run build` · Publish directory: `dist`
3. **Redirects/Rewrites** tab → add rule: Source `/*`, Destination `/index.html`, Action **Rewrite**
   (needed so `/pricing` etc. work when opened directly). If you deploy via **New → Blueprint**, `render.yaml` sets this up for you.
   Put these two rules **above** it so WhatsApp link previews show the right page:
   `/work/goherbal` → `/work/goherbal/index.html` and `/partners` → `/partners/index.html` (both **Rewrite**).
4. **Settings → Custom Domains** → add `jbnmedia.org` and `www.jbnmedia.org`.
5. In **Namecheap → Domain List → Manage → Advanced DNS**, add the records Render shows you, typically:
   - `A` record, host `@`, value `216.24.57.1`
   - `CNAME` record, host `www`, value `<your-site>.onrender.com`
   Remove Namecheap's default parking records first. Render issues the HTTPS certificate automatically.
