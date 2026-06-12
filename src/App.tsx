import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
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
      <ToggleTheme id="theme-toggle" />

      {/* Main Content */}
      <main id="main-content">
        {/* Hero Welcome Section */}
        <LandingHero id="landing-hero" />

        {/* Albums Showcase Grid */}
        <AlbumGrid
          id="album-grid"
          albums={ALBUMS}
          onSelectAlbum={setSelectedAlbumId}
        />
      </main>

      {/* Lightbox / Carousel Overlay */}
      <AnimatePresence>
        {selectedAlbumId && (
          <Lightbox
            id="lightbox-modal"
            album={selectedAlbum}
            onClose={() => setSelectedAlbumId(null)}
          />
        )}
      </AnimatePresence>

      {/* Elegant Footer */}
      <footer className="footer" id="app-footer">
        <div className="container">
          <p className="footer-text">
            Made with <Heart className="footer-heart" size={14} fill="currentColor" /> for Cenz & partner
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
