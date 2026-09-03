import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { contact, locations } from '@/data/restaurantData';

export function MobileCTABar() {
  const phoneUrl = contact.phone ? `tel:${contact.phone}` : '';
  const whatsappUrl = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`
    : '';
  const mapsUrl = locations[0]?.mapsUrl || contact.mapsUrl || '#locations';

  const showBar = phoneUrl || whatsappUrl;
  if (!showBar) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="grid grid-cols-3 border-t border-ink-700 bg-ink-950/95 backdrop-blur-md">
        {phoneUrl && (
          <a
            href={phoneUrl}
            className="flex flex-col items-center gap-1 py-3 text-white"
          >
            <Phone size={18} className="text-gold-400" />
            <span className="font-condensed text-[10px] font-600 uppercase tracking-wider">
              Call
            </span>
          </a>
        )}
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 border-x border-ink-700 py-3 text-white"
          >
            <MessageCircle size={18} className="text-gold-400" />
            <span className="font-condensed text-[10px] font-600 uppercase tracking-wider">
              WhatsApp
            </span>
          </a>
        )}
        <a
          href={mapsUrl}
          className="flex flex-col items-center gap-1 py-3 text-white"
        >
          <MapPin size={18} className="text-gold-400" />
          <span className="font-condensed text-[10px] font-600 uppercase tracking-wider">
            Directions
          </span>
        </a>
      </div>
    </div>
  );
}
