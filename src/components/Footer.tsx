import { Phone, MessageCircle, MapPin, Instagram, Facebook } from 'lucide-react';
import { brand, contact, navLinks, locations } from '@/data/restaurantData';

export function Footer() {
  const phoneUrl = contact.phone && !contact.phone.includes('[ADD')
    ? `tel:${contact.phone}`
    : '';
  const whatsappUrl =
    contact.whatsapp && !contact.whatsapp.includes('[ADD')
      ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`
      : '';
  const instagramUrl =
    contact.instagramUrl && !contact.instagramUrl.includes('[ADD')
      ? contact.instagramUrl
      : '';
  const facebookUrl =
    contact.facebookUrl && !contact.facebookUrl.includes('[ADD')
      ? contact.facebookUrl
      : '';

  const verifiedLocations = locations.filter(
    (loc) => loc.area && !loc.area.includes('[ADD')
  );

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-ink-700 bg-ink-950 pb-20 pt-16 lg:pb-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-3xl uppercase leading-none text-white">
              {brand.name}
            </h3>
            <p className="mt-1 font-condensed text-sm uppercase tracking-[0.25em] text-gray-500">
              Shawarma House
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-500">
              {brand.tagline}
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-ink-700 text-gray-400 transition-all hover:border-gold-400 hover:text-gold-400"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
              )}
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-ink-700 text-gray-400 transition-all hover:border-gold-400 hover:text-gold-400"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              )}
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-ink-700 text-gray-400 transition-all hover:border-gold-400 hover:text-gold-400"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-condensed text-xs font-600 uppercase tracking-[0.25em] text-gold-400">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(link.href);
                    }}
                    className="text-sm text-gray-400 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-condensed text-xs font-600 uppercase tracking-[0.25em] text-gold-400">
              Locations
            </h4>
            <ul className="mt-4 space-y-2.5">
              {verifiedLocations.length > 0 ? (
                verifiedLocations.map((loc) => (
                  <li key={loc.id}>
                    <a
                      href="#locations"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#locations');
                      }}
                      className="text-sm text-gray-400 transition-colors hover:text-gold-400"
                    >
                      {loc.area}, {loc.city}
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-sm text-gray-600">
                  Branch locations to be added.
                </li>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed text-xs font-600 uppercase tracking-[0.25em] text-gold-400">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              {phoneUrl && (
                <li>
                  <a
                    href={phoneUrl}
                    className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-gold-400"
                  >
                    <Phone size={16} className="text-gray-600" />
                    {contact.phone}
                  </a>
                </li>
              )}
              {whatsappUrl && (
                <li>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-gold-400"
                  >
                    <MessageCircle size={16} className="text-gray-600" />
                    WhatsApp
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gray-600" />
                {contact.primaryAddress}
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-ink-700 pt-6">
          <p className="text-center text-xs text-gray-600">
            © 2026 Orhan Shawarma House. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
