import { Phone, MessageCircle, MapPin, Instagram, ShoppingBag } from 'lucide-react';
import { contact, locations, orderConfig } from '@/data/restaurantData';
import { Reveal } from '@/components/Reveal';

export function ContactCTA() {
  const phoneUrl = contact.phone && !contact.phone.includes('[ADD')
    ? `tel:${contact.phone}`
    : '';
  const whatsappUrl =
    contact.whatsapp && !contact.whatsapp.includes('[ADD')
      ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`
      : '';
  const mapsUrl = locations[0]?.mapsUrl || contact.mapsUrl || '';
  const hasMaps = mapsUrl && !mapsUrl.includes('[ADD');
  const instagramUrl =
    contact.instagramUrl && !contact.instagramUrl.includes('[ADD')
      ? contact.instagramUrl
      : '';
  const orderUrl = orderConfig.url || orderConfig.whatsapp || contact.whatsapp;

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink-950 py-20 lg:py-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-8xl">
            Craving
          </h2>
          <h2 className="font-display text-5xl uppercase leading-[0.9] text-gold-400 sm:text-6xl lg:text-8xl">
            Shawarma?
          </h2>
          <p className="mt-6 font-condensed text-lg uppercase tracking-[0.15em] text-gray-400 lg:text-xl">
            Come hungry. Leave happy.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 lg:gap-4">
            {phoneUrl && (
              <a
                href={phoneUrl}
                className="flex items-center gap-2 bg-gold-400 px-7 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-ink-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20"
              >
                <Phone size={18} />
                Call Now
              </a>
            )}
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 px-7 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-white transition-all hover:border-gold-400 hover:text-gold-400"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            )}
            {hasMaps && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 px-7 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-white transition-all hover:border-gold-400 hover:text-gold-400"
              >
                <MapPin size={18} />
                Get Directions
              </a>
            )}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 px-7 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-white transition-all hover:border-gold-400 hover:text-gold-400"
              >
                <Instagram size={18} />
                Instagram
              </a>
            )}
            {orderUrl && (
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-600 px-7 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-white transition-all hover:border-gold-400 hover:text-gold-400"
              >
                <ShoppingBag size={18} />
                Order Now
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
