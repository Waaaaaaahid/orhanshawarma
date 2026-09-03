import { useEffect } from 'react';
import { X, MapPin, Phone, MessageCircle, Navigation, ShoppingBag, Instagram, Clock } from 'lucide-react';
import type { Location } from '@/data/restaurantData';
import { OpeningHours } from '@/components/OpeningHours';

type BranchModalProps = {
  location: Location | null;
  onClose: () => void;
};

export function BranchModal({ location, onClose }: BranchModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (location) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [location, onClose]);

  if (!location) return null;

  const phoneUrl = location.phone && !location.phone.includes('[ADD')
    ? `tel:${location.phone}`
    : '';
  const whatsappUrl =
    location.whatsapp && !location.whatsapp.includes('[ADD')
      ? `https://wa.me/${location.whatsapp.replace(/[^0-9]/g, '')}`
      : '';
  const hasMapsUrl = location.mapsUrl && !location.mapsUrl.includes('[ADD');
  const hasOrderUrl = location.orderUrl && !location.orderUrl.includes('[ADD');
  const hasInstagram = location.instagramUrl && !location.instagramUrl.includes('[ADD');
  const hasAddress = location.address && !location.address.includes('[ADD');
  const hasDescription = location.description && !location.description.includes('[ADD');

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink-950/90 p-4 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative my-8 w-full max-w-3xl border border-ink-700 bg-ink-900 scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center bg-ink-950/80 text-white transition-colors hover:text-gold-400"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        {/* Hero image */}
        <div className="relative aspect-[16/8] overflow-hidden">
          {location.image ? (
            <img
              src={location.image}
              alt={`${location.name} — ${location.area}`}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-ink-700">
              <MapPin size={48} className="text-ink-600" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 lg:p-8">
            <p className="font-condensed text-xs font-600 uppercase tracking-[0.2em] text-gold-400">
              {location.city}
            </p>
            <h3 className="font-display text-3xl uppercase leading-tight text-white lg:text-4xl">
              {location.name}
            </h3>
            <p className="font-condensed text-sm uppercase tracking-wider text-gray-300">
              {location.area}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-8">
          {/* Services */}
          {location.services.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {location.services.map((service) => (
                <span
                  key={service}
                  className="border border-gold-400/30 px-3 py-1 font-condensed text-[10px] font-600 uppercase tracking-wider text-gold-400"
                >
                  {service}
                </span>
              ))}
            </div>
          )}

          {hasDescription && (
            <p className="mb-6 text-base leading-relaxed text-gray-400">
              {location.description}
            </p>
          )}

          <div className="grid gap-6 md:grid-cols-2">
            {/* Left: address & contact */}
            <div className="space-y-4">
              {hasAddress && (
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-gold-400" />
                    <span className="font-condensed text-xs font-600 uppercase tracking-[0.2em] text-gold-400">
                      Address
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {location.address}
                  </p>
                </div>
              )}

              {phoneUrl && (
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Phone size={16} className="text-gold-400" />
                    <span className="font-condensed text-xs font-600 uppercase tracking-[0.2em] text-gold-400">
                      Phone
                    </span>
                  </div>
                  <a
                    href={phoneUrl}
                    className="text-sm text-gray-400 transition-colors hover:text-gold-400"
                  >
                    {location.phone}
                  </a>
                </div>
              )}
            </div>

            {/* Right: opening hours */}
            <div>
              <OpeningHours hours={location.hours} />
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-3 border-t border-ink-700 pt-6">
            {hasMapsUrl && (
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold-400 px-6 py-3 font-condensed text-sm font-600 uppercase tracking-wider text-ink-950 transition-colors hover:bg-gold-300"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            )}
            {phoneUrl && (
              <a
                href={phoneUrl}
                className="flex items-center gap-2 border border-ink-600 px-6 py-3 font-condensed text-sm font-600 uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Phone size={16} />
                Call Now
              </a>
            )}
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-ink-600 px-6 py-3 font-condensed text-sm font-600 uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
            )}
            {hasOrderUrl && (
              <a
                href={location.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-ink-600 px-6 py-3 font-condensed text-sm font-600 uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <ShoppingBag size={16} />
                Order Now
              </a>
            )}
            {hasInstagram && (
              <a
                href={location.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-ink-600 px-6 py-3 font-condensed text-sm font-600 uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-400"
              >
                <Instagram size={16} />
                Instagram
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
