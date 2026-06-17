import type { Album } from "../data/albums";
import { motion } from "framer-motion";

interface AlbumGridProps {
  albums: Album[];
  onSelectAlbum: (albumId: string) => void;
  id?: string;
}

export default function AlbumGrid({ albums, onSelectAlbum, id = "album-grid" }: AlbumGridProps) {
  return (
    <section id={id} className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)] border-y border-[var(--border-color)]">
        {albums.map((album, index) => (
          <motion.article
            key={album.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.2,
              delay: index * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative overflow-hidden h-[60vh] md:h-[85vh] cursor-pointer flex flex-col justify-end"
            onClick={() => onSelectAlbum(album.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onSelectAlbum(album.id);
              }
            }}
            aria-label={`Open ${album.title} album`}
          >
            {/* Background Cover Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden bg-[var(--bg-secondary)]">
              <img
                src={album.coverImage}
                alt={`${album.title} cover`}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                loading="lazy"
              />
              {/* Vignette Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
            </div>

            {/* Typography Overlay Content */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 flex flex-col items-center gap-3 text-center text-white">
              <h2 className="text-2xl md:text-3xl display-text font-normal text-white drop-shadow-sm">
                {album.titleTc} <span className="mx-2 opacity-40">|</span> {album.title}
              </h2>
              <p className="text-sm text-gray-200 tc-informational leading-relaxed max-w-md drop-shadow-sm">
                {album.descriptionTc}
                <span className="prose-text italic mt-2 block text-xs text-gray-300 opacity-90">{album.description}</span>
              </p>
              <div className="mt-4 text-xs tracking-widest uppercase text-gray-300 pt-3 border-t border-white/20 w-32 flex flex-col items-center gap-1.5 group-hover:text-white transition-colors duration-300">
                <span className="font-mono">{album.photos.length} PHOTOS</span>
                <span className="text-base leading-none transform translate-y-0 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
