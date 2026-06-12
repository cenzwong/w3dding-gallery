import type { Album } from "../data/albums";
import { motion } from "framer-motion";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

interface AlbumGridProps {
  albums: Album[];
  onSelectAlbum: (albumId: string) => void;
  id?: string;
}

export default function AlbumGrid({ albums, onSelectAlbum, id = "album-grid" }: AlbumGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };


  return (
    <section id={id} className="albums-section">
      <div className="container">
        <motion.div
          className="albums-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {albums.map((album) => (
            <motion.div
              key={album.id}
              className="album-card-wrapper"
              variants={cardVariants}
              onClick={() => onSelectAlbum(album.id)}
            >
              <div
                className="album-card"
                id={`album-card-${album.id}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onSelectAlbum(album.id);
                  }
                }}
                aria-label={`Open ${album.title} album`}
              >
                <div className="album-image-container">
                  <img
                    src={album.coverImage}
                    alt={`${album.title} cover`}
                    className="album-image"
                    loading="lazy"
                  />
                </div>

                <div className="album-card-overlay" />

                <div className="album-card-info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <ImageIcon size={16} strokeWidth={2} style={{ color: 'var(--accent-gold)' }} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                      {album.photos.length} Photos
                    </span>
                  </div>
                  <h2 className="album-card-title">{album.title}</h2>
                  <p className="album-card-desc">{album.description}</p>
                  <span className="album-card-action">
                    View Gallery <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
