import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { googleReviews } from '@/data/googleReviews';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';
import { useEffect, useState } from 'react';

export function Reviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (googleReviews.length < 2) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % googleReviews.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  const review = googleReviews[active];
  const goTo = (index: number) => setActive((index + googleReviews.length) % googleReviews.length);

  return (
    <section id="reviews" className="relative overflow-hidden bg-ink-950 py-20 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal className="text-center">
          <SectionLabel className="mb-4 justify-center">Testimonials</SectionLabel>
          <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">What People Say</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm text-gray-500">Real customer feedback selected from 4+ star Google reviews.</p>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-12 lg:mt-16">
            <div className="border border-ink-700 bg-ink-800 p-7 sm:p-10 lg:p-14">
              <Quote className="h-10 w-10 text-gold-400/50" />
              <div className="mt-6 flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={20} className="fill-gold-400 text-gold-400" />)}
              </div>
              <p className="mt-6 min-h-[150px] text-lg leading-relaxed text-gray-200 sm:text-xl lg:text-2xl">“{review.text}”</p>
              <div className="mt-8 flex items-end justify-between border-t border-ink-700 pt-5">
                <div>
                  <p className="font-display text-xl uppercase text-white">{review.author}</p>
                  <p className="mt-1 font-condensed text-xs uppercase tracking-[0.15em] text-gray-500">{review.source}</p>
                </div>
                <div className="hidden gap-2 sm:flex">
                  <button type="button" onClick={() => goTo(active - 1)} aria-label="Previous review" className="border border-ink-600 p-2.5 text-gray-400 transition-colors hover:border-gold-400 hover:text-gold-400"><ChevronLeft size={18} /></button>
                  <button type="button" onClick={() => goTo(active + 1)} aria-label="Next review" className="border border-ink-600 p-2.5 text-gray-400 transition-colors hover:border-gold-400 hover:text-gold-400"><ChevronRight size={18} /></button>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {googleReviews.map((item, index) => <button key={item.id} type="button" onClick={() => goTo(index)} aria-label={`Show review ${index + 1}`} className={`h-1.5 transition-all ${index === active ? 'w-8 bg-gold-400' : 'w-2 bg-ink-600'}`} />)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
