import { motion } from "framer-motion";
import type { Album } from "../data/albums";
import { useState } from "react";

interface AlbumDirectoryProps {
  albums: Album[];
  onSelectAlbum: (albumId: string) => void;
}

export default function AlbumDirectory({ albums, onSelectAlbum }: AlbumDirectoryProps) {
  return (
    <motion.main
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full min-h-screen pb-20"
    >
      <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md px-4 py-6 border-b border-gray-900">
        <h1 className="text-3xl font-bold tracking-tight">Albums</h1>
      </header>

      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} onClick={() => onSelectAlbum(album.id)} />
        ))}
      </div>
    </motion.main>
  );
}

function AlbumCard({ album, onClick }: { album: Album; onClick: () => void }) {
  const [loaded, setLoaded] = useState(false);
  const displayTitle = album.titleTc || album.title;

  return (
    <div
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      className="cursor-pointer group relative aspect-square rounded-xl overflow-hidden bg-gray-900 border border-gray-800"
    >
      {!loaded && <div className="skeleton absolute inset-0 z-10"></div>}
      <img
        src={album.coverImage}
        alt={displayTitle}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20"></div>
      <div className="absolute bottom-3 left-3 z-30">
        <h3 className="text-white font-bold leading-tight">{displayTitle}</h3>
        <p className="text-gray-400 text-xs">{album.photos.length} Items</p>
      </div>
    </div>
  );
}
