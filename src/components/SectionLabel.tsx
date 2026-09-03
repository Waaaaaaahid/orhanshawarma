type SectionLabelProps = {
  children: string;
  className?: string;
};

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-gold-400" />
      <span className="font-condensed text-xs font-600 uppercase tracking-[0.3em] text-gold-400">
        {children}
      </span>
    </div>
  );
}
