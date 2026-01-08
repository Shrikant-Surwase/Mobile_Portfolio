import { Section } from '@/components/ui/Layout';
import { PATATAP_EMBED } from '@/constants/profile';

export const InteractiveExperience = () => {
  return (
    <Section>
      <div className="text-left mb-2 gap-2 pt-2">
        <h1 className="font-bold font-doto tracking-wider text-lg sm:text-[26px] leading-6 sm:leading-8 text-[#fafafa] border-dashed border-t border-[#27272a] pt-3 sm:pt-4">
          Interactive Experience
        </h1>
        <p className="text-[10px] pb-2 font-figtree sm:text-sm text-[#404040] font-normal tracking-wider">
          i love interactive stuff so enjoy this!
        </p>
        <div className="mx-auto w-full max-w-2xl">
          <div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-white/10 shadow-sm bg-white/5">
            <iframe
              src={PATATAP_EMBED.src}
              title={PATATAP_EMBED.title}
              loading="lazy"
              className="w-full h-[280px] sm:h-[380px] md:h-[420px] border-0"
            ></iframe>
          </div>
          <p className="text-[10px] font-jetbrains-mono pt-2 sm:text-sm text-[#404040] font-normal italic tracking-wider">
            press any key (a-z or spacebar) to create sounds and animations
          </p>
        </div>
      </div>
    </Section>
  );
};
