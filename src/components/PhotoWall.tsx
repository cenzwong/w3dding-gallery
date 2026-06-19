import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import type { Album } from "../data/albums";

interface PhotoWallProps {
  album: Album;
  onBack: () => void;
  onPhotoClick: (url: string) => void;
}

export default function PhotoWall({ album, onBack, onPhotoClick }: PhotoWallProps) {
  const [page, setPage] = useState(1);
  const batchSize = 15;
  const observerTarget = useRef<HTMLDivElement>(null);

  // Generate deterministic spans for all photos in the album to prevent layout shifts
  const spans = useMemo(() => {
    return album.photos.map((_, index) => {
      // Use index to create deterministic "randomness"
      const seed = ((index * 9301 + 49297) % 233280) / 233280;
      let spanClass = "";
      if (seed > 0.85) spanClass = "span-col-2 span-row-2";
      else if (seed > 0.65) spanClass = "span-row-2";
      else if (seed > 0.50) spanClass = "span-col-2";
      return spanClass;
    });
  }, [album.photos]); // Re-calculate when album changes

  const displayedPhotos = album.photos.slice(0, page * batchSize);
  const hasMore = displayedPhotos.length < album.photos.length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [album.id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "400px" }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [hasMore]);

  return (
    <motion.main
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full min-h-screen pb-6"
    >
      <header className="fixed top-0 w-full z-40 bg-gradient-to-b from-black/80 via-black/50 to-transparent pt-12 pb-4 px-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <div className="flex flex-col drop-shadow-md">
            <span className="text-white font-bold leading-tight">{album.titleTc || album.title}</span>
            <span className="text-white/70 text-xs">{album.photos.length} Items</span>
          </div>
        </div>
      </header>

      <div className="bento-grid w-full mt-0">
        {displayedPhotos.map((photo, index) => (
          <GalleryCard
            key={photo.id}
            url={photo.url}
            caption={photo.caption}
            spanClass={spans[index]}
            onClick={() => onPhotoClick(photo.url)}
          />
        ))}
      </div>

      <div ref={observerTarget} className="w-full h-16 flex items-center justify-center mt-4">
        {hasMore && (
          <div className="w-6 h-6 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
        )}
      </div>
    </motion.main>
  );
}

function GalleryCard({
  url,
  caption,
  spanClass,
  onClick,
}: {
  url: string;
  caption?: string;
  spanClass: string;
  onClick: () => void;
}) {
  const [loaded, setLoaded] = useState(false);

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
      className={`relative bg-gray-900 overflow-hidden group cursor-pointer transition-transform active:scale-95 ${spanClass}`}
    >
      {!loaded && <div className="skeleton absolute inset-0 z-10"></div>}
      <img
        src={url}
        alt={caption || "Gallery photo"}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}
