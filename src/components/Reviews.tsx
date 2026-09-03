import { Star, MessageSquare } from 'lucide-react';
import { reviews, reviewsPlaceholder } from '@/data/restaurantData';
import { Reveal } from '@/components/Reveal';
import { SectionLabel } from '@/components/SectionLabel';

export function Reviews() {
  const hasReviews = reviews.length > 0;

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-ink-950 py-20 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <SectionLabel className="mb-4 justify-center">
            Testimonials
          </SectionLabel>
          <h2 className="font-display text-5xl uppercase leading-[0.9] text-white sm:text-6xl lg:text-7xl">
            What People Say
          </h2>
        </Reveal>

        {hasReviews ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {reviews.map((review, i) => (
              <Reveal key={review.id} delay={i * 80}>
                <div className="flex h-full flex-col border border-ink-700 bg-ink-800 p-6 transition-colors hover:border-gold-400/40 lg:p-8">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        size={18}
                        className={
                          idx < review.rating
                            ? 'fill-gold-400 text-gold-400'
                            : 'text-ink-600'
                        }
                      />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-gray-300">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-ink-700 pt-4">
                    <p className="font-display text-lg uppercase text-white">
                      {review.author}
                    </p>
                    <p className="mt-1 font-condensed text-xs uppercase tracking-wider text-gray-500">
                      {review.source}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={100}>
            <div className="mt-12 flex flex-col items-center justify-center border border-dashed border-ink-700 bg-ink-900/50 px-6 py-16 text-center lg:mt-16 lg:py-20">
              <MessageSquare size={40} className="text-ink-600" />
              <p className="mt-6 max-w-md text-base leading-relaxed text-gray-400">
                {reviewsPlaceholder.message}
              </p>
              <p className="mt-3 font-condensed text-xs uppercase tracking-wider text-gray-600">
                No fabricated reviews — only verified customer feedback will be shown here.
              </p>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
