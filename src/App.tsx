import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ALBUMS } from "./data/albums";
import LandingHero from "./components/LandingHero";
import AlbumGrid from "./components/AlbumGrid";
import Lightbox from "./components/Lightbox";
import ToggleTheme from "./components/ToggleTheme";

function App() {
  const [selectedAlbumId, setSelectedAlbumId] = useState<string | null>(null);

  const selectedAlbum = ALBUMS.find((album) => album.id === selectedAlbumId) || null;

  return (
    <>
      {/* Persistent Theme Toggle */}
      <div className="absolute top-6 right-6 z-40">
        <ToggleTheme id="theme-toggle" />
      </div>

      {/* Main Content */}
      <main id="main-content" className="flex flex-col min-h-[100dvh]">
        {/* Hero Welcome Section */}
        <LandingHero id="landing-hero" />

        {/* Albums Showcase Grid */}
        <div className="flex-1">
          <AlbumGrid
            id="album-grid"
            albums={ALBUMS}
            onSelectAlbum={setSelectedAlbumId}
          />
        </div>

        {/* Formal Acknowledgment Footer */}
        <footer id="app-footer" className="py-16 md:py-24 border-t border-[var(--border-color)] mt-auto bg-[var(--bg-secondary)]">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-normal tc-ceremonial mb-4 text-[var(--text-primary)]">鞠躬 <span className="mx-2 font-serif text-[var(--border-color)]">|</span> <span className="font-serif">Thank You</span></h2>
            <p className="text-sm text-[var(--text-secondary)] tc-informational leading-relaxed max-w-xl mx-auto">
              感謝各位親友的見證與祝福。<br/>
              <span className="prose-text italic mt-2 block">With deepest gratitude to our family and friends.</span>
            </p>
            <div className="mt-12 text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono">
              ISSAC & CENZ <span className="mx-2">&copy;</span> 2026
            </div>
          </div>
        </footer>
      </main>

      {/* Lightbox / Carousel Overlay */}
      <AnimatePresence mode="wait">
        {selectedAlbumId && (
          <Lightbox
            key="lightbox"
            id="lightbox-modal"
            album={selectedAlbum}
            onClose={() => setSelectedAlbumId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
