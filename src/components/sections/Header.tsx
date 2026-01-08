import { Container } from '@/components/ui/Layout';
import { LocationIcon } from '@/components/ui/Icons';

export const Header = () => {
  return (
    <header className="w-full flex flex-wrap items-center justify-between px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4">
      <div className="flex items-baseline gap-2 text-xs sm:text-sm text-[#fafafa]">
        <span className="tracking-widest">IN 09:02 pm</span>
      </div>
      <div className="flex items-center gap-1">
        <LocationIcon aria-hidden />
        <span className="text-xs sm:text-sm text-[#fafafa]">Maharashtra, India</span>
      </div>
    </header>
  );
};
