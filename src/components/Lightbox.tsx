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
  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (album) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [album]);

  // Handle escape key to close
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
      className="lightbox-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title-id"
    >
      <div className="lightbox-header">
        <h2 id="lightbox-title-id" className="lightbox-title">
          {album.title}
        </h2>
        <button
          id="close-lightbox"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close gallery"
          title="Close (Esc)"
        >
          <X size={20} />
        </button>
      </div>

      <div className="lightbox-container">
        <motion.div
          style={{ width: "100%", height: "100%" }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel]}
            navigation={true}
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            mousewheel={true}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            className="mySwiper"
          >
            {album.photos.map((photo, index) => (
              <SwiperSlide key={photo.id}>
                <div className="swiper-slide-image-wrapper">
                  <img
                    src={photo.url}
                    alt={photo.caption || `${album.title} photo ${index + 1}`}
                    className="swiper-slide-image"
                    loading="lazy"
                  />
                </div>
                {photo.caption && (
                  <p className="swiper-slide-caption">{photo.caption}</p>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.div>
  );
}
