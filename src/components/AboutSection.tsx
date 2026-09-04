import { about } from '@/data/restaurantData';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';

const aboutImage = 'https://res.cloudinary.com/dnahjh4qz/image/upload/v1788518873/images_23_hb44yo.jpg';

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-ink-900 py-20 lg:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <Reveal>
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-3 border border-gold-400/20" />
              <img
                src={aboutImage}
                alt="Nalli Shawarma at Orhan Shawarma House"
                className="relative aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
            </div>
          </Reveal>

          {/* Content */}
          <Reveal delay={150} className="order-1 lg:order-2">
            <SectionLabel className="mb-4">{about.heading}</SectionLabel>

            <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
              {about.altHeading}
            </h2>

            <div className="mt-8 space-y-4">
              {about.body.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-gray-400 lg:text-lg"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-ink-700 pt-8">
              {about.stats.map((stat, i) => (
                <div key={i}>
                  <p className="font-condensed text-[10px] font-600 uppercase tracking-[0.2em] text-gold-400">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-display text-lg uppercase text-white lg:text-xl">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
