import { Check, ArrowRight } from 'lucide-react';
import { signatureProduct } from '@/data/restaurantData';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';

export function SignatureProduct() {
  return (
    <section
      id="signature"
      className="relative overflow-hidden bg-ink-900 py-20 lg:py-32"
    >
      {/* Yellow accent border top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 border border-gold-400/30" />
              <div className="relative overflow-hidden">
                <img
                  src={signatureProduct.image}
                  alt="Nalli Shawarma — Orhan's signature dish"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
              </div>
              {/* Floating label */}
              <div className="absolute -bottom-6 right-6 bg-gold-400 px-6 py-3 lg:right-12">
                <span className="font-display text-xl uppercase text-ink-950 lg:text-2xl">
                  Signature
                </span>
              </div>
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={150}>
            <SectionLabel className="mb-4">
              {signatureProduct.label}
            </SectionLabel>

            <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
              {signatureProduct.title}
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-400 lg:text-lg">
              {signatureProduct.description}
            </p>

            {/* Features */}
            <ul className="mt-8 space-y-3">
              {signatureProduct.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-gold-400"
                  />
                  <span className="text-sm lg:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() =>
                document
                  .querySelector('#menu')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group mt-10 flex items-center gap-2 border border-gold-400 px-8 py-4 font-condensed text-sm font-600 uppercase tracking-[0.15em] text-gold-400 transition-all hover:bg-gold-400 hover:text-ink-950"
            >
              View Menu
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
