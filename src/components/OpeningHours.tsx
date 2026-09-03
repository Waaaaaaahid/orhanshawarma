import { Clock } from 'lucide-react';
import type { DayHours } from '@/data/restaurantData';

type OpeningHoursProps = {
  hours: DayHours[];
};

export function OpeningHours({ hours }: OpeningHoursProps) {
  if (!hours || hours.length === 0) return null;

  return (
    <div className="w-full">
      <div className="mb-3 flex items-center gap-2">
        <Clock size={16} className="text-gold-400" />
        <span className="font-condensed text-xs font-600 uppercase tracking-[0.2em] text-gold-400">
          Opening Hours
        </span>
      </div>
      <ul className="divide-y divide-ink-700 border border-ink-700">
        {hours.map((entry) => (
          <li
            key={entry.day}
            className="flex items-center justify-between px-4 py-2.5"
          >
            <span className="font-condensed text-sm font-500 uppercase tracking-wider text-gray-300">
              {entry.day}
            </span>
            <span className="text-sm text-gray-400">{entry.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
