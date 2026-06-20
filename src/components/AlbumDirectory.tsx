import { motion } from "framer-motion";
import type { Album } from "../data/albums";
import heroImage from "../assets/hero.jpg";

interface AlbumDirectoryProps {
  albums: Album[];
  onSelectAlbum: (albumId: string) => void;
}

export default function AlbumDirectory({ albums, onSelectAlbum }: AlbumDirectoryProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scroll-container w-full min-h-screen bg-black"
    >
      {/* ABOVE THE FOLD: HERO SECTION */}
      <section className="scroll-section relative flex items-center overflow-hidden w-full h-screen">
        {/* Background Image with custom positioning to frame the couple and the window pane */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: "right center",
          }}
        />

        {/* Ambient Dark Overlay: Vertical gradient on mobile (for top text/bottom scroll indicator), horizontal gradient on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/50 z-10 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent" />

        {/* Hero Content: Aligns text to the top on mobile (justify-start pt-24), vertically centered on desktop (md:justify-center md:pt-0) */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-start pt-24 md:justify-center md:pt-0 h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-2xl text-left"
          >
            <span className="text-xs md:text-sm tracking-[0.3em] text-white/60 uppercase font-sans mb-3 block">
              Welcome to
            </span>
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-wide leading-tight">
              Issac & Cenz
            </h1>
            <div className="h-[1px] w-24 bg-white/30 my-6" />
            <h2 className="text-lg md:text-2xl font-serif italic text-white/80 tracking-widest uppercase">
              Gallery
            </h2>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer pointer-events-auto"
          onClick={() => {
            const container = document.querySelector(".scroll-container");
            if (container) {
              container.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }
          }}
        >
          <span className="text-[10px] tracking-[0.25em] text-white/40 uppercase font-sans">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* BELOW THE FOLD: ALBUMS SECTION */}
      <section className="scroll-section relative flex flex-col md:flex-row w-full h-screen overflow-hidden bg-black">
        {albums.map((album, idx) => {
          const displayTitle = album.titleTc || album.title;
          return (
            <motion.div
              key={album.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              onClick={() => onSelectAlbum(album.id)}
              className="group relative flex-1 h-1/2 md:h-full overflow-hidden cursor-pointer border-t md:border-t-0 md:border-l border-white/5 active:scale-[0.99] transition-all duration-300"
            >
              {/* Cover Image */}
              <img
                src={album.coverImage}
                alt={displayTitle}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

              {/* Album Text & Details */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-20">
                <span className="text-xs tracking-[0.2em] text-white/60 uppercase font-sans mb-2 block">
                  {album.photos.length} Items
                </span>
                
                <h3 className="text-3xl md:text-5xl font-display text-white tracking-wide leading-tight">
                  {album.title}
                </h3>
                {album.titleTc && (
                  <p className="text-lg md:text-2xl font-serif text-white/70 italic mt-1 font-light">
                    {album.titleTc}
                  </p>
                )}

                <p className="text-sm text-white/50 max-w-md mt-4 font-sans line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500">
                  {album.descriptionTc || album.description}
                </p>

                <div className="mt-6 flex items-center gap-2 overflow-hidden">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/80 font-sans group-hover:text-white transition-colors">
                    View Gallery
                  </span>
                  <svg
                    className="w-4 h-4 text-white/85 transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </motion.main>
  );
}
