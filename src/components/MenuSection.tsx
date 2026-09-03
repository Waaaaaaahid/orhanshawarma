import { useState, useMemo } from 'react';
import { menuItems, menuCategories } from '@/data/restaurantData';
import type { MenuItem } from '@/data/restaurantData';
import { MenuCard } from '@/components/MenuCard';
import { MenuModal } from '@/components/MenuModal';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'ALL') return menuItems;
    return menuItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Only show categories that have at least one item
  const availableCategories = useMemo(() => {
    return menuCategories.filter((cat) => {
      if (cat === 'ALL') return true;
      return menuItems.some((item) => item.category === cat);
    });
  }, []);

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-ink-950 py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <Reveal className="text-center">
          <SectionLabel className="mb-4 justify-center">
            Eat Well
          </SectionLabel>
          <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
            The Menu
          </h2>
          <p className="mt-4 font-condensed text-lg uppercase tracking-[0.15em] text-gray-500">
            Bold flavours. Big cravings.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap justify-center gap-2 lg:gap-3">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`border px-5 py-2.5 font-condensed text-sm font-600 uppercase tracking-[0.15em] transition-all ${
                  activeCategory === cat
                    ? 'border-gold-400 bg-gold-400 text-ink-950'
                    : 'border-ink-700 text-gray-400 hover:border-gray-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {filteredItems.map((item, i) => (
            <Reveal key={item.id} delay={i * 60}>
              <MenuCard item={item} onClick={() => setSelectedItem(item)} />
            </Reveal>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <p className="mt-16 text-center text-gray-500">
            No items in this category yet.
          </p>
        )}
      </div>

      <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
