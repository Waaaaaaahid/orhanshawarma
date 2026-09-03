import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { navLinks, brand, orderConfig, contact } from '@/data/restaurantData';
import { useScrollPosition } from '@/hooks/useScrollReveal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const orderUrl = orderConfig.url || orderConfig.whatsapp || contact.whatsapp;
  const phoneUrl = contact.phone ? `tel:${contact.phone}` : '';
  const whatsappUrl = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`
    : '';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/95 shadow-lg shadow-black/50 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex flex-col leading-none"
            aria-label="Orhan Shawarma House home"
          >
            <span className="font-display text-2xl uppercase tracking-tight text-white transition-colors group-hover:text-gold-400 lg:text-3xl">
              {brand.name}
            </span>
            <span className="font-condensed text-[10px] uppercase tracking-[0.35em] text-gray-400 lg:text-xs">
              Shawarma House
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="font-condensed text-sm font-500 uppercase tracking-[0.15em] text-gray-300 transition-colors hover:text-gold-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            {phoneUrl && (
              <a
                href={phoneUrl}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-all hover:border-gold-400 hover:text-gold-400"
                aria-label="Call now"
              >
                <Phone size={16} />
              </a>
            )}
            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition-all hover:border-gold-400 hover:text-gold-400"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
            )}
            {orderUrl && (
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold-400 px-5 py-2.5 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-ink-950 transition-all hover:bg-gold-300"
              >
                <ShoppingBag size={16} />
                {orderConfig.label}
              </a>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 bg-ink-950 transition-transform duration-400 lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-8">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block border-b border-ink-700 py-4 font-display text-3xl uppercase text-white transition-colors hover:text-gold-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-3">
            {orderUrl && (
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gold-400 py-4 font-condensed text-base font-600 uppercase tracking-[0.15em] text-ink-950"
              >
                <ShoppingBag size={18} />
                {orderConfig.label}
              </a>
            )}
            <div className="flex gap-3">
              {phoneUrl && (
                <a
                  href={phoneUrl}
                  className="flex flex-1 items-center justify-center gap-2 border border-gray-700 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-white"
                >
                  <Phone size={16} /> Call
                </a>
              )}
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 border border-gray-700 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-white"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
