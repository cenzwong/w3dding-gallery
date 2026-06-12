# Our Wedding Gallery

A premium, interactive web application to showcase our wedding photo collections. Built using **React**, **Vite**, **Framer Motion**, and **Swiper.js**, styled with modern Vanilla CSS including light and dark modes.

---

## How to Run Locally

Follow these steps to set up and run the website on your local computer.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18+ is recommended).

### Steps:

1. **Open your Terminal** and make sure you are in the project folder directory:
   ```bash
   cd /Users/cenz.wong/Project/w3dding-gallery
   ```

2. **Install the project dependencies** (only required the first time):
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open the website**:
   Once the server starts, it will print both local and network URLs in the terminal:
   - **Local Link**: `http://localhost:5173/w3dding-gallery/`
   - **Network Link**: `http://<your-local-ip>:5173/w3dding-gallery/`

   Hold `Cmd` (or `Ctrl`) and click the local link in your terminal, or open it in your browser. 
   
   **Tip**: Since the server listens on `0.0.0.0`, you can open the **Network Link** on your mobile phone or tablet (as long as they are connected to the same Wi-Fi network) to test how the swipe gestures feel on mobile devices!

---

## How to Preview the Production Build

Before deploying, you can compile and preview the exact production-ready site locally:

1. **Build the project assets**:
   ```bash
   npm run build
   ```
   *This compiles TypeScript, optimizes code, and generates a static `dist/` folder.*

2. **Start the local production preview**:
   ```bash
   npm run preview
   ```
   *This will run a local web server serving the static files from the `dist/` directory, allowing you to check performance and links.*

---

## How to Deploy to GitHub Pages

You can choose between **Automatic Deployment (GitHub Actions)** or **Manual Command-Line Deployment**.

### Option A: Automatic Deployment (Recommended)
We have added a GitHub Action workflow in `.github/workflows/deploy.yml` that builds and deploys your site automatically every time you push changes to your `main` branch.

**Setup Steps:**
1. Create a repository on GitHub and push this project up:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/w3dding-gallery.git
   git push -u origin main
   ```
2. Go to your repository on GitHub.
3. Click on **Settings** -> **Pages** (in the left sidebar).
4. Under **Build and deployment** -> **Source**, change the dropdown from **Deploy from a branch** to **GitHub Actions**.
5. Once selected, future pushes to the `main` branch will trigger the deploy workflow under the **Actions** tab, publishing your site automatically.

---

### Option B: Manual Command-Line Deployment
If you prefer to push builds manually from your local command line:

1. Run the deployment script:
   ```bash
   npm run deploy
   ```
   *This automatically builds the project locally (`npm run build`) and uses the `gh-pages` helper package to commit and push the build assets to the `gh-pages` branch on your GitHub repository.*
2. In your repository on GitHub, under **Settings** -> **Pages**, ensure the **Source** is set to **Deploy from a branch** and the branch is set to `gh-pages`.
