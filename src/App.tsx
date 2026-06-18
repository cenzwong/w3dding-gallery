import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ALBUMS } from "./data/albums";
import AlbumDirectory from "./components/AlbumDirectory";
import PhotoWall from "./components/PhotoWall";
import FullscreenModal from "./components/FullscreenModal";

function App() {
  const [currentAlbumId, setCurrentAlbumId] = useState<string | null>(null);
  const [fullscreenUrl, setFullscreenUrl] = useState<string | null>(null);

  const currentAlbum = ALBUMS.find((a) => a.id === currentAlbumId);

  return (
    <>
      <AnimatePresence mode="wait">
        {!currentAlbumId ? (
          <AlbumDirectory key="albums" albums={ALBUMS} onSelectAlbum={setCurrentAlbumId} />
        ) : (
          <PhotoWall
            key="photowall"
            album={currentAlbum!}
            onBack={() => setCurrentAlbumId(null)}
            onPhotoClick={setFullscreenUrl}
          />
        )}
      </AnimatePresence>

      <FullscreenModal url={fullscreenUrl} onClose={() => setFullscreenUrl(null)} />
    </>
  );
}

export default App;
