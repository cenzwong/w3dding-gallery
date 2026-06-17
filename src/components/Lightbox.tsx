import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Mousewheel } from "swiper/modules";
import type { Album } from "../data/albums";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface LightboxProps {
  album: Album | null;
  onClose: () => void;
  id?: string;
}

export default function Lightbox({ album, onClose, id = "lightbox-modal" }: LightboxProps) {
  useEffect(() => {
    if (album) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [album]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!album) return null;

  return (
    <motion.div
      id={id}
      className="fixed inset-0 z-50 bg-[var(--bg-primary)] flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title-id"
    >
      <div className="flex justify-between items-center p-4 md:p-6 border-b border-[var(--border-color)] gap-4">
        <h2 id="lightbox-title-id" className="text-base md:text-2xl display-text font-normal text-[var(--text-primary)] flex flex-wrap items-center gap-1.5 md:gap-3 leading-tight">
          <span>{album.titleTc}</span>
          <span className="text-[var(--border-color)] hidden md:inline">|</span>
          <span className="text-xs md:text-xl text-[var(--text-secondary)] block md:inline w-full md:w-auto font-normal">{album.title}</span>
        </h2>
        <button
          id="close-lightbox"
          className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--accent)] hover:text-white transition-colors duration-300"
          onClick={onClose}
          aria-label="Close gallery"
          title="Close (Esc)"
        >
          <X size={18} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex-1 overflow-hidden relative">
        <motion.div
          style={{ width: "100%", height: "100%" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
        >
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
            navigation={true}
            pagination={{ clickable: true, type: "fraction" }}
            keyboard={{ enabled: true }}
            mousewheel={true}
            loop={true}
            spaceBetween={0}
            slidesPerView={1}
            className="w-full h-full"
          >
            {album.photos.map((photo, index) => (
              <SwiperSlide key={photo.id} className="flex flex-col justify-between items-center h-full w-full py-4 px-4 md:py-8 md:px-12 box-border">
                <div className="flex-1 w-full min-h-0 flex items-center justify-center relative">
                  <img
                    src={photo.url}
                    alt={photo.caption || `${album.title} photo ${index + 1}`}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                {(photo.captionTc || photo.caption) && (
                  <div className="flex-shrink-0 mt-4 text-center max-w-2xl px-4 pb-8 w-full">
                    {photo.captionTc && <p className="text-sm text-[var(--text-secondary)] tc-informational mb-1">{photo.captionTc}</p>}
                    {photo.caption && <p className="text-sm prose-text text-[var(--text-secondary)] italic">{photo.caption}</p>}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  );
}
