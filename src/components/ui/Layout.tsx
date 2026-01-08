interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`max-w-2xl mx-auto px-4 sm:px-8 md:px-12 ${className}`}>{children}</div>
);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = '', id }: SectionProps) => (
  <section className={`py-4 w-full ${className}`} id={id}>
    <Container>{children}</Container>
  </section>
);

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  bordered?: boolean;
}

export const SectionTitle = ({ title, subtitle, bordered = true }: SectionTitleProps) => (
  <div className={bordered ? 'border-dashed border-t border-[#27272a] pt-2 mb-4' : ''}>
    <h2 className="font-bold font-doto tracking-wider text-xl sm:text-[26px] leading-7 sm:leading-8 text-[#fafafa]">
      {title}
      {subtitle && (
        <span className="text-xs sm:text-sm text-[#404040] font-normal font-jetbrains-mono tracking-wider block sm:inline mt-1 sm:mt-0">
          {' '}
          {subtitle}
        </span>
      )}
    </h2>
  </div>
);

interface ButtonProps {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

export const Button = ({
  href,
  target = '_blank',
  rel = 'noopener noreferrer',
  className = '',
  children,
  ariaLabel,
}: ButtonProps) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className={`flex items-center bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none ${className}`}
    aria-label={ariaLabel}
  >
    {children}
  </a>
);

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className = '' }: GlassCardProps) => (
  <div
    className={`border border-[#27272a] rounded-lg p-4 sm:p-6 hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors ${className}`}
  >
    {children}
  </div>
);

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge = ({ children, className = '' }: BadgeProps) => (
  <button
    className={`flex items-center cursor-pointer bg-[#18181b] border border-[#27272a] rounded-lg px-3 py-2 text-white font-medium text-xs gap-2 shadow transition hover:border-[#c766ff] focus:outline-none ${className}`}
    type="button"
  >
    {children}
  </button>
);
