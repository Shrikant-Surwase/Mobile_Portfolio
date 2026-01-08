import { Container } from '@/components/ui/Layout';

export const Footer = () => {
  return (
    <footer className="w-full py-5 sm:py-6">
      <Container>
        <div className="text-left mb-6 sm:mb-8 border-dashed border-t border-[#27272a] pt-5 sm:pt-6">
          <p className="text-base sm:text-lg font-bold font-doto text-[#c766ff] tracking-wider">
            Shrikant Survase
          </p>
        </div>
        <div className="text-left font-jetbrains-mono space-y-1.5 sm:space-y-2">
          <p className="text-gray-600 text-[10px] sm:text-xs break-words">
            That&apos;s all, folks | Designed &amp; built with some caffiene ☕ and headache...
          </p>
          <p className="text-gray-600 text-[10px] sm:text-xs break-words">
            © Shrikant Survase. All rights reserved (even the bugs).
          </p>
        </div>
      </Container>
    </footer>
  );
};
