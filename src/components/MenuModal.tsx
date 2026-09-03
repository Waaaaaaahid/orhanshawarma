import { useEffect } from 'react';
import { X, Leaf, Circle } from 'lucide-react';
import type { MenuItem } from '@/data/restaurantData';

type MenuModalProps = {
  item: MenuItem | null;
  onClose: () => void;
};

export function MenuModal({ item, onClose }: MenuModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-ink-700 bg-ink-900 scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-ink-950/80 text-white transition-colors hover:text-gold-400"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent" />
        </div>

        <div className="p-6 lg:p-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="font-condensed text-xs font-600 uppercase tracking-[0.2em] text-gold-400">
              {item.category}
            </span>
            <div className="flex h-5 w-5 items-center justify-center border">
              {item.veg ? (
                <Leaf size={12} className="text-green-500" />
              ) : (
                <Circle size={8} fill="#ef4444" className="text-red-500" />
              )}
            </div>
          </div>

          <h3
            id="modal-title"
            className="font-display text-4xl uppercase leading-tight text-white lg:text-5xl"
          >
            {item.name}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-gray-400">
            {item.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-ink-700 pt-4">
            <span className="font-condensed text-sm uppercase tracking-wider text-gray-500">
              Price
            </span>
            <span className="font-display text-3xl uppercase text-gold-400">
              {item.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
