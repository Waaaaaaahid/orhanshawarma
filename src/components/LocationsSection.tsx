import { useMemo, useState } from 'react';
import { locations } from '@/data/locations';
import type { Location } from '@/data/restaurantData';
import { LocationCard } from '@/components/LocationCard';
import { BranchModal } from '@/components/BranchModal';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';

function distanceInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const toRad = (value: number) => (value * Math.PI) / 180;
  const earthRadiusKm = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function LocationsSection() {
  const [activeCity, setActiveCity] = useState('ALL');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [nearestMode, setNearestMode] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [locationError, setLocationError] = useState('');

  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(locations.map((loc) => loc.city)));
    return ['ALL', ...uniqueCities];
  }, []);

  const filteredLocations = useMemo(() => {
    let result = activeCity === 'ALL' ? [...locations] : locations.filter((loc) => loc.city === activeCity);

    if (nearestMode && userLocation) {
      result.sort((a, b) => {
        const distanceA = distanceInKm(userLocation.lat, userLocation.lon, Number(a.latitude), Number(a.longitude));
        const distanceB = distanceInKm(userLocation.lat, userLocation.lon, Number(b.latitude), Number(b.longitude));
        return distanceA - distanceB;
      });
    }

    return result;
  }, [activeCity, nearestMode, userLocation]);

  const handleFindNearest = () => {
    if (!navigator.geolocation) {
      setLocationError('Location services are not supported by your browser.');
      return;
    }

    setLocationError('');
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setUserLocation({ lat: coords.latitude, lon: coords.longitude });
        setNearestMode(true);
        setActiveCity('ALL');
      },
      () => {
        setLocationError('Please allow location access to find the nearest Orhan.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
    );
  };

  return (
    <section id="locations" className="relative overflow-hidden bg-ink-900 py-20 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <SectionLabel className="mb-4 justify-center">Visit Us</SectionLabel>
          <h2 className="font-display text-4xl uppercase leading-[0.9] text-white sm:text-5xl lg:text-6xl">
            Find Your Nearest
          </h2>
          <p className="mt-2 font-display text-4xl uppercase leading-[0.9] text-gold-400 sm:text-5xl lg:text-6xl">
            Orhan
          </p>

          <button
            type="button"
            onClick={handleFindNearest}
            className="mt-8 inline-flex items-center gap-2 border border-gold-400 bg-gold-400 px-6 py-3 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-ink-950 transition-all hover:bg-transparent hover:text-gold-400"
          >
            <span aria-hidden="true">⌖</span>
            Find Nearest Orhan
          </button>

          {locationError && (
            <p className="mt-3 text-sm text-gray-400">{locationError}</p>
          )}
          {nearestMode && userLocation && !locationError && (
            <p className="mt-3 text-sm text-gray-400">
              Showing branches nearest to your current location.
            </p>
          )}
        </Reveal>

        {cities.length > 2 && (
          <Reveal delay={100}>
            <div className="mt-10 flex flex-wrap justify-center gap-2 lg:gap-3">
              {cities.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => {
                    setActiveCity(city);
                    setNearestMode(false);
                  }}
                  className={`border px-5 py-2.5 font-condensed text-sm font-600 uppercase tracking-[0.15em] transition-all ${
                    activeCity === city && !nearestMode
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

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16">
          {filteredLocations.map((location, i) => (
            <Reveal key={location.id} delay={i * 80}>
              <LocationCard location={location} onViewDetails={setSelectedLocation} />
            </Reveal>
          ))}
        </div>

        {filteredLocations.length === 0 && (
          <p className="mt-16 text-center text-gray-500">No branches in this city yet.</p>
        )}
      </div>

      <BranchModal location={selectedLocation} onClose={() => setSelectedLocation(null)} />
    </section>
  );
}
