import { Leaf, Circle } from 'lucide-react';
import type { MenuItem } from '@/data/restaurantData';

type MenuCardProps = {
  item: MenuItem;
  onClick: () => void;
};

export function MenuCard({ item, onClick }: MenuCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col overflow-hidden border border-ink-700 bg-ink-800 text-left transition-all duration-400 hover:border-gold-400"
      aria-label={`${item.name} — ${item.price}`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/20 to-transparent" />

        {/* Veg indicator */}
        <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center border bg-ink-950/80 backdrop-blur-sm">
          {item.veg ? (
            <Leaf size={14} className="text-green-500" />
          ) : (
            <Circle size={10} fill="#ef4444" className="text-red-500" />
          )}
        </div>

        {/* Category */}
        <span className="absolute bottom-3 left-3 font-condensed text-[10px] font-600 uppercase tracking-[0.2em] text-gold-400">
          {item.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-xl uppercase leading-tight text-white transition-colors group-hover:text-gold-400">
          {item.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-400">
          {item.description}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-ink-700 pt-3">
          <span className="font-condensed text-lg font-600 text-gold-400">
            {item.price}
          </span>
          {!item.available && (
            <span className="font-condensed text-[10px] uppercase tracking-wider text-red-500">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </button>
  );
}
