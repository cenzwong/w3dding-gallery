import type { Album } from "../data/albums";
import { motion } from "framer-motion";

interface AlbumGridProps {
  albums: Album[];
  onSelectAlbum: (albumId: string) => void;
  id?: string;
}

export default function AlbumGrid({ albums, onSelectAlbum, id = "album-grid" }: AlbumGridProps) {
  return (
    <section id={id} className="py-12 md:py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
        {albums.map((album, index) => (
          <motion.article
            key={album.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group cursor-pointer flex flex-col gap-6"
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
            <div className="aspect-[4/5] w-full overflow-hidden bg-[var(--bg-secondary)] relative">
               <img
                  src={album.coverImage}
                  alt={`${album.title} cover`}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  loading="lazy"
                />
            </div>

            <div className="flex flex-col gap-2 px-1">
              <div className="flex items-center gap-3">
                 <h2 className="text-xl md:text-2xl display-text font-normal text-[var(--text-primary)]">
                    {album.titleTc} <span className="mx-2 text-[var(--border-color)]">|</span> {album.title}
                 </h2>
              </div>
              <p className="text-sm text-[var(--text-secondary)] tc-informational leading-relaxed">
                 {album.descriptionTc} <br/>
                 <span className="prose-text italic mt-1 block">{album.description}</span>
              </p>
              <div className="mt-4 text-xs tracking-widest uppercase text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-4 flex justify-between items-center group-hover:text-[var(--text-primary)] transition-colors duration-300">
                <span className="font-mono">{album.photos.length} POSTS</span>
                <span>EXPLORE &rarr;</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
