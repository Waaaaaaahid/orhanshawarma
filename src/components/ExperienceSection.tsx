import { experience } from '@/data/restaurantData';
import { Reveal } from '@/components/Reveal';

export function ExperienceSection() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-32">
      {/* Heading */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-8">
            {experience.words.map((word, i) => (
              <span
                key={i}
                className={`font-display text-5xl uppercase leading-none sm:text-7xl lg:text-8xl ${
                  i === 1 ? 'text-gold-400' : 'text-white'
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Editorial collage */}
      <div className="mt-16 grid grid-cols-2 gap-3 px-3 sm:px-5 lg:mt-24 lg:grid-cols-4 lg:gap-4 lg:px-8">
        {experience.images.map((img, i) => (
          <Reveal
            key={i}
            delay={i * 100}
            className={
              i === 2
                ? 'row-span-2'
                : i === 0
                ? 'row-span-2 lg:row-span-1'
                : ''
            }
          >
            <div className="group relative h-full min-h-[250px] overflow-hidden lg:min-h-[300px]">
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink-950/30 transition-opacity group-hover:bg-ink-950/10" />
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold-400 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
