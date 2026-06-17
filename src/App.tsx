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
      <main id="main-content" className="flex flex-col min-h-[100dvh] md:h-screen md:overflow-hidden">
        {/* Hero Welcome Section */}
        <LandingHero id="landing-hero" />

        {/* Albums Showcase Grid */}
        <div className="flex-1 min-h-0 flex flex-col">
          <AlbumGrid
            id="album-grid"
            albums={ALBUMS}
            onSelectAlbum={setSelectedAlbumId}
          />
        </div>

        {/* Formal Acknowledgment Footer */}
        <footer id="app-footer" className="py-8 md:py-6 flex-shrink-0 mt-auto">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <div className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-mono opacity-60">
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
