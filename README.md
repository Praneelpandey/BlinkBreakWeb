# BlinkBreak — Launch Website

The launch site for **BlinkBreak**, the spatial combat game you play with your face.
Double-blink to fire plasma cannons, tilt your head to dodge — every mechanic doubles as an
eye exercise that fights digital eye strain. Winner of the Apple Swift Student Challenge 2026.

Built with **React 19 + Vite**. No heavy 3D dependencies — the app itself is the hero:
every phone on the page runs a real screen recording from the game.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Launch checklist

- **App Store link** — paste your App Store / TestFlight URL into `src/config.js`
  (`APP_STORE_URL`). Every "App Store" button on the site picks it up automatically;
  until then they scroll to the download section.
- **Social share image** — `public/og-cover.jpg` (1200×630) is referenced by the
  Open Graph / Twitter meta tags in `index.html`.
- **Page title / description** — edit the `<title>` and meta tags in `index.html`.

## Design system

Apple product-page language: white / `#f5f5f7` surfaces, near-black `#1d1d1f` ink, one
indigo accent (`#5856d6`), system font stack (no webfonts), 8pt spacing scale, and a
tuned dark mode via `prefers-color-scheme`. All tokens live in `:root` at the top of
`src/index.css`.

## Project structure

```
src/
  config.js              ← App Store URL lives here
  App.jsx                ← page composition (section order)
  index.css              ← the full design system
  utils/scroll.js        ← smooth-scroll helper
  hooks/
    useReveal.js         ← scroll-reveal-on-enter
    useInViewVideo.js    ← pause mockup videos offscreen (saves battery)
  components/
    PhoneMockup.jsx      ← reusable CSS iPhone frame + app-screen video
    Nav, Hero, Features, Flight, Beyond, BlinkLab,
    Science, Fleet, Specs, DownloadCTA, Footer

`Flight` is the pinned scroll sequence (calibrate → combat → debrief) —
it switches to a simple stacked layout under 768px via a matchMedia hook.
public/
  media/                 ← portrait app-screen loops + poster frames (served as-is)
  og-cover.jpg           ← social share card
design-assets/
  original-videos/       ← the original 16:9 source recordings (not bundled)
```

## About the mockup videos

The source recordings (`design-assets/original-videos/`) are 16:9 exports with the phone
screen centered on black. `public/media/` contains center-cropped **9:19.5 portrait**
versions that fill the phone mockups pixel-perfect:

| file              | shows                    | source            |
| ----------------- | ------------------------ | ----------------- |
| `calibrate.mp4`   | biometric calibration    | `setup-loop.mp4`  |
| `combat.mp4`      | live double-blink combat | `action-loop.mp4` |
| `debrief.mp4`     | post-flight telemetry    | `proof-loop.mp4`  |

To re-crop after exporting new recordings (needs ffmpeg):

```bash
# landscape sources (1920×1080, screen centered in the middle 498px)
ffmpeg -i setup-loop.mp4 -vf "crop=498:1080:711:0" -an -c:v libx264 -crf 25 \
  -pix_fmt yuv420p -movflags +faststart public/media/calibrate.mp4

# portrait sources (1080×1920 → 886×1920 center crop)
ffmpeg -i proof-loop.mp4 -vf "crop=886:1920:97:0" -an -c:v libx264 -crf 25 \
  -pix_fmt yuv420p -movflags +faststart public/media/debrief.mp4
```

## Deploying

Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages): build with
`npm run build` and serve the `dist/` directory.
