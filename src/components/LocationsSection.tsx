import { useState, useMemo } from 'react';
import { locations } from '@/data/restaurantData';
import type { Location } from '@/data/restaurantData';
import { LocationCard } from '@/components/LocationCard';
import { BranchModal } from '@/components/BranchModal';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';

export function LocationsSection() {
  const [activeCity, setActiveCity] = useState('ALL');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  // Auto-generate city filters from location data
  const cities = useMemo(() => {
    const uniqueCities = Array.from(
      new Set(
        locations
          .map((loc) => loc.city)
          .filter((city) => city && !city.includes('[ADD'))
      )
    );
    return ['ALL', ...uniqueCities];
  }, []);

  const filteredLocations = useMemo(() => {
    if (activeCity === 'ALL') return locations;
    return locations.filter((loc) => loc.city === activeCity);
  }, [activeCity]);

  return (
    <section
      id="locations"
      className="relative overflow-hidden bg-ink-900 py-20 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <SectionLabel className="mb-4 justify-center">
            Visit Us
          </SectionLabel>
          <h2 className="font-display text-4xl uppercase leading-[0.9] text-white sm:text-5xl lg:text-6xl">
            Find Your Nearest
          </h2>
          <p className="mt-2 font-display text-4xl uppercase leading-[0.9] text-gold-400 sm:text-5xl lg:text-6xl">
            Orhan
          </p>
        </Reveal>

        {/* City filters */}
        {cities.length > 2 && (
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-2 lg:gap-3">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setActiveCity(city)}
                  className={`border px-5 py-2.5 font-condensed text-sm font-600 uppercase tracking-[0.15em] transition-all ${
                    activeCity === city
                      ? 'border-gold-400 bg-gold-400 text-ink-950'
                      : 'border-ink-700 text-gray-400 hover:border-gray-500 hover:text-white'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        {/* Location cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          {filteredLocations.map((location, i) => (
            <Reveal key={location.id} delay={i * 80}>
              <LocationCard
                location={location}
                onViewDetails={setSelectedLocation}
              />
            </Reveal>
          ))}
        </div>

        {/* Empty state */}
        {filteredLocations.length === 0 && (
          <p className="mt-16 text-center text-gray-500">
            No branches in this city yet.
          </p>
        )}
      </div>

      <BranchModal
        location={selectedLocation}
        onClose={() => setSelectedLocation(null)}
      />
    </section>
  );
}
