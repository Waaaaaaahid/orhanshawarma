import { MapPin, Phone, MessageCircle, Navigation, ShoppingBag, Clock } from 'lucide-react';
import type { Location } from '@/data/restaurantData';
import { OpeningHours } from '@/components/OpeningHours';

type LocationCardProps = {
  location: Location;
  onViewDetails?: (location: Location) => void;
};

export function LocationCard({ location, onViewDetails }: LocationCardProps) {
  const phoneUrl = location.phone && !location.phone.includes('[ADD')
    ? `tel:${location.phone}`
    : '';
  const whatsappUrl =
    location.whatsapp && !location.whatsapp.includes('[ADD')
      ? `https://wa.me/${location.whatsapp.replace(/[^0-9]/g, '')}`
      : '';
  const hasMapsUrl = location.mapsUrl && !location.mapsUrl.includes('[ADD');
  const hasOrderUrl = location.orderUrl && !location.orderUrl.includes('[ADD');
  const hasAddress = location.address && !location.address.includes('[ADD');

  return (
    <article className="group flex flex-col overflow-hidden border border-ink-700 bg-ink-800 transition-all duration-400 hover:border-gold-400/50">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        {location.image ? (
          <img
            src={location.image}
            alt={`${location.name} — ${location.area}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-ink-700">
            <MapPin size={40} className="text-ink-600" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-800 to-transparent" />

        {/* Services */}
        {location.services.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
            {location.services.map((service) => (
              <span
                key={service}
                className="bg-ink-950/80 px-2.5 py-1 font-condensed text-[10px] font-600 uppercase tracking-wider text-gold-400 backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <p className="font-condensed text-xs font-600 uppercase tracking-[0.2em] text-gold-400">
          {location.city}
        </p>
        <h3 className="mt-1 font-display text-2xl uppercase leading-tight text-white">
          {location.name}
        </h3>
        <p className="mt-1 font-condensed text-sm uppercase tracking-wider text-gray-400">
          {location.area}
        </p>

        {/* Details */}
        <div className="mt-4 space-y-3">
          {hasAddress && (
            <div className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gray-500" />
              <p className="text-sm leading-relaxed text-gray-400">
                {location.address}
              </p>
            </div>
          )}

          {/* Compact hours preview */}
          {location.hours.length > 0 && !location.hours[0].hours.includes('[ADD') && (
            <div className="flex items-start gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-gray-500" />
              <p className="text-sm text-gray-400">
                {location.hours[0].day}: {location.hours[0].hours}
                <span className="block text-xs text-gray-600">
                  +{location.hours.length - 1} more days
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-ink-700 pt-5">
          {hasMapsUrl && (
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold-400 px-4 py-2.5 font-condensed text-xs font-600 uppercase tracking-wider text-ink-950 transition-colors hover:bg-gold-300"
            >
              <Navigation size={14} />
              Directions
            </a>
          )}
          {phoneUrl && (
            <a
              href={phoneUrl}
              className="flex items-center gap-2 border border-ink-600 px-4 py-2.5 font-condensed text-xs font-600 uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <Phone size={14} />
              Call
            </a>
          )}
          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-ink-600 px-4 py-2.5 font-condensed text-xs font-600 uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>
          )}
          {hasOrderUrl && (
            <a
              href={location.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-ink-600 px-4 py-2.5 font-condensed text-xs font-600 uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              <ShoppingBag size={14} />
              Order
            </a>
          )}
          {onViewDetails && (
            <button
              onClick={() => onViewDetails(location)}
              className="flex items-center gap-2 border border-ink-600 px-4 py-2.5 font-condensed text-xs font-600 uppercase tracking-wider text-white transition-colors hover:border-gold-400 hover:text-gold-400"
            >
              Details
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
