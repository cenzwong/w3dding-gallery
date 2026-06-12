# Wedding Gallery App - Project Plan

This document outlines the architecture, styling principles, component structure, and deployment steps for your modern, highly-aesthetic wedding gallery.

---

## 1. Stack Selection & Evaluation

We selected a fast, high-performance static frontend stack designed to render a premium visual experience:

| Technology | Purpose | Evaluation / Why it's good |
| :--- | :--- | :--- |
| **Vite + React** | Build tool & component UI | Extremely fast compilation (HMR) and produces a optimized static bundle perfect for free GitHub Pages hosting. |
| **Framer Motion** | Animations & Transitions | Ideal for modern, premium layout animations (like cards expanding into screens, text slide-ups, and smooth fade-in loads). |
| **Swiper.js** | Carousel Component | The gold standard for mobile swipe gestures. Perfect for wedding guests browsing photos on their phones. |
| **Vanilla CSS** | Layout & Styling | Using native CSS Custom Properties (variables) allows us to design a tailored luxury design system (glassmorphism, champagne/obsidian modes) without bloating the app. |
| **GitHub Pages** | Hosting / Deployment | A free, secure, and fast hosting option for static web pages. |

### Note on Image Hosting
- **Current Setup**: Direct links using the Google Drive direct stream URL format: `https://lh3.googleusercontent.com/d/FILE_ID`.
- **Precaution**: Google Drive streams are highly convenient but can sometimes rate-limit under heavy simultaneous traffic (e.g. if 200 wedding guests load the gallery at the exact same second). If rate limits occur, you can easily migrate files to a free CDN (like Cloudinary, Imgur) or commit them directly into the repository.

---

## 2. Design & Styling System

The application styling resides in [src/index.css](file:///Users/cenz.wong/Project/w3dding-gallery/src/index.css), following a strict premium visual guideline:
1. **Elegant Serif Headings**: Uses **Cinzel** and **Playfair Display** (loaded from Google Fonts) to establish a classic, celebratory wedding theme.
2. **Modern Sans-Serif Body**: Uses **Inter** for descriptions and numbers to remain legible and clean.
3. **Luxurious Color Palette**:
   - **Light Mode (Elegant Champagne)**: Off-white ivory (`#fcfbf7`), soft cream shadow bases (`#f4f0e6`), and delicate gold accents (`#c5a059`).
   - **Dark Mode (Luxurious Midnight)**: Pure obsidian bases (`#0a0a0a`), deep gray panels (`#121212`), and warm glowing gold accents (`#e5c17d`).
4. **Glassmorphism**: Soft transparent backgrounds (`rgba(255,255,255,0.45)`), blur backdrops (`backdrop-filter: blur(16px)`), and thin gold-tinted borders.
5. **Micro-animations**: Smooth hover zooms on cover photos, arrow slide shifts, custom pulsing heartbeat footer, and staggered entry fading.

---

## 3. Directory & Component Structure

- [index.html](file:///Users/cenz.wong/Project/w3dding-gallery/index.html): Configured for Google Fonts loading and SEO tags (meta description, descriptive title).
- [src/data/albums.ts](file:///Users/cenz.wong/Project/w3dding-gallery/src/data/albums.ts): Houses the hardcoded album array (Pre-Wedding, The Ceremony, The Celebration) mapping photos and captions.
- [src/components/ToggleTheme.tsx](file:///Users/cenz.wong/Project/w3dding-gallery/src/components/ToggleTheme.tsx): Floating glassmorphism icon button to switch color palettes (saves preference in `localStorage`).
- [src/components/LandingHero.tsx](file:///Users/cenz.wong/Project/w3dding-gallery/src/components/LandingHero.tsx): Clean fade-in slide-up welcome header.
- [src/components/AlbumGrid.tsx](file:///Users/cenz.wong/Project/w3dding-gallery/src/components/AlbumGrid.tsx): Renders album cards with lazy-loaded covers, hover-zoom scales, and photo counts.
- [src/components/Lightbox.tsx](file:///Users/cenz.wong/Project/w3dding-gallery/src/components/Lightbox.tsx): A modal wrapper executing Swiper slides, supporting mousewheel, arrow keys, touch swiping, custom gold navigation bullets, and close options.
- [src/App.tsx](file:///Users/cenz.wong/Project/w3dding-gallery/src/App.tsx): Orchestrates layouts and holds the selected album state.

---

## 4. How to Run & Develop Locally

1. **Install dependencies** (run once):
   ```bash
   npm install
   ```
2. **Run dev server**:
   ```bash
   npm run dev
   ```
   *Open the printed localhost URL in your browser to inspect the application.*

3. **Check Build compilation**:
   ```bash
   npm run build
   ```

---

## 5. How to Deploy to GitHub Pages

The repository has been configured to build and deploy to GitHub Pages under the URL path `https://<your-username>.github.io/w3dding-gallery/`.

### Deployment Steps:
1. Ensure your local git repository is connected to your GitHub remote.
2. Run the deployment script:
   ```bash
   npm run deploy
   ```
   *This command builds your project and pushes the static assets to the `gh-pages` branch, which GitHub automatically serves.*
