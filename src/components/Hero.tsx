import { ArrowDown, UtensilsCrossed, MapPin, ShoppingBag } from 'lucide-react';
import { brand, contact, locations, orderConfig } from '@/data/restaurantData';

export function Hero() {
  const orderUrl = orderConfig.url || orderConfig.whatsapp || contact.whatsapp;

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink-950"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/10572741/pexels-photo-10572741.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Shawarma cooking on a vertical rotisserie with golden flames"
          className="h-full w-full animate-slow-zoom object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/30 to-transparent" />
      </div>

      {/* Glow */}
      <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-gold-400/20 blur-[120px] animate-glow-pulse" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-16 lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="mb-6 flex animate-fade-in items-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="font-condensed text-xs font-600 uppercase tracking-[0.4em] text-gold-400 lg:text-sm">
              {brand.fullName}
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-6xl uppercase leading-[0.85] text-white animate-fade-up sm:text-7xl md:text-8xl lg:text-[9rem]">
            {brand.name}
          </h1>
          <h2 className="font-display text-4xl uppercase leading-[0.9] text-gold-400 animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: '0.15s', opacity: 0 }}>
            Shawarma
          </h2>
          <h2 className="font-display text-4xl uppercase leading-[0.9] text-white animate-fade-up sm:text-5xl md:text-6xl lg:text-7xl" style={{ animationDelay: '0.3s', opacity: 0 }}>
            House
          </h2>

          {/* Tagline */}
          <p className="mt-6 font-condensed text-lg font-500 uppercase tracking-[0.2em] text-gray-300 animate-fade-up lg:text-xl" style={{ animationDelay: '0.45s', opacity: 0 }}>
            {brand.tagline}
          </p>

          {/* Supporting text */}
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-400 animate-fade-up lg:text-lg" style={{ animationDelay: '0.6s', opacity: 0 }}>
            {brand.shortDescription}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-4 animate-fade-up sm:flex-row sm:items-center" style={{ animationDelay: '0.75s', opacity: 0 }}>
            <button
              onClick={() => scrollTo('#menu')}
              className="group flex items-center justify-center gap-2 bg-gold-400 px-8 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-ink-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/30"
            >
              <UtensilsCrossed size={18} />
              Explore Menu
            </button>
            <button
              onClick={() => scrollTo('#locations')}
              className="flex items-center justify-center gap-2 border border-gray-600 px-8 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-white transition-all hover:border-gold-400 hover:text-gold-400"
            >
              <MapPin size={18} />
              Get Directions
            </button>
            {orderUrl && (
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-gray-400 transition-colors hover:text-gold-400"
              >
                <ShoppingBag size={18} />
                Order Now
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#signature')}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-gold-400 md:flex"
        aria-label="Scroll down"
      >
        <span className="font-condensed text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
