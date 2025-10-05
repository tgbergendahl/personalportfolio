# Personal Portfolio

This is a minimal, responsive single-page portfolio scaffold for Thomas Bergendahl.

Quick start (macOS / zsh):

1. Open locally in your browser:

```bash
open index.html
```

2. Or serve with a simple HTTP server (recommended for testing fetch/local assets):

```bash
# Python 3
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

What you'll find:
- `index.html` - single page with hero, about, projects, skills, contact
- `styles.css` - theme + responsive styles
- `script.js` - theme toggle and year
- `assets/` - placeholder images

React app (Vite)
-----------------

To run the React version (requires Node.js >= 16):

```bash
cd ~/personal_dev/portfolio
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Next steps you might want:
- Replace placeholder text and images with your content
- Add project pages or repo links
- Add analytics or contact form integration
- Deploy to GitHub Pages or Netlify
