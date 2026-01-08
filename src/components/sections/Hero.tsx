import Image from 'next/image';
import dp from '../../../public/dp.jpeg';
import { Section } from '@/components/ui/Layout';

export const Hero = () => {
  return (
    <Section>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gray-700 flex items-center justify-center overflow-hidden flex-shrink-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gray-700 flex items-center justify-center transition-transform duration-200 hover:scale-[1.04] focus:scale-[1.04]"
            aria-label="Shrikant's GitHub"
            href="https://github.com"
          >
            <Image
              src={dp}
              className="object-cover w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full pointer-events-none select-none"
              width={80}
              height={80}
              alt="Picture of the author"
            />
          </a>
        </div>
        <div>
          <h1 className="font-bold font-doto tracking-wider text-[22px] sm:text-[26px] leading-7 sm:leading-8 text-[#fafafa]">
            Shrikant Survase
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-[#8ab4f8] text-left font-normal tracking-wider">
            React Native Developer • SDE 1 at Greytip Software
          </p>
        </div>
      </div>
      <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4 font-figtree max-w-xl text-xs sm:text-sm text-[#fafafa] leading-5 sm:leading-6 text-left font-normal">
        <p className="text-gray-400">
          I&apos;m <span className="text-white">Shrikant Survase</span>, a React Native Developer
          currently working as <span className="text-white">SDE 1</span> at{' '}
          <span className="text-white">Greytip Software Pvt</span>. I love building mobile
          applications that make a difference.
        </p>
        <p className="text-gray-400">
          I&apos;ve worked on <span className="text-white">three mobile apps</span> including{' '}
          <span className="text-white">Greythr</span> (an HRMS platform),{' '}
          <span className="text-white">Drively</span> (a car booking app), and a college mobile app
          for students to view notices and timetables.
        </p>
        <p className="text-gray-400">
          I&apos;m passionate about <span className="text-white">React Native</span> development and
          always eager to learn new technologies and best practices to build better mobile
          experiences.
        </p>
      </div>
    </Section>
  );
};
