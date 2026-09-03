import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages } from '@/data/restaurantData';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const next = useCallback(
    () =>
      setLightboxIndex((prev) =>
        prev === null
          ? prev
          : (prev + 1) % galleryImages.length
      ),
    []
  );

  const prev = useCallback(
    () =>
      setLightboxIndex((p) =>
        p === null
          ? p
          : (p - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, next, prev]);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-ink-900 py-20 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionLabel className="mb-4">Gallery</SectionLabel>
          <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
            From The House
          </h2>
        </Reveal>

        {/* Asymmetric grid */}
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-3 sm:auto-rows-[240px] lg:mt-16 lg:grid-cols-4 lg:gap-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.id}
              delay={i * 50}
              className={
                img.span === 'tall'
                  ? 'row-span-2'
                  : img.span === 'wide'
                  ? 'col-span-2'
                  : ''
              }
            >
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative h-full w-full overflow-hidden"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-ink-950/30 transition-opacity group-hover:bg-ink-950/10" />
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-400 transition-transform duration-500 group-hover:scale-x-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-gold-400"
            aria-label="Close lightbox"
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-gold-400 lg:left-8"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center text-white transition-colors hover:text-gold-400 lg:right-8"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          <img
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            className="max-h-[85vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 text-center text-sm text-gray-400">
            {galleryImages[lightboxIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}
