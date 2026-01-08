import Image from 'next/image';
import { Badge, Section, SectionTitle } from '@/components/ui/Layout';
import { SKILLS } from '@/constants/skills';

export const Skills = () => {
  return (
    <Section>
      <SectionTitle title="Skills" subtitle="Which I use/know" />
      <p className="text-xs sm:text-sm text-gray-400 mt-2 mb-4">
        These are the technologies I&apos;ve learned and worked with. This list is constantly
        evolving as I continue to learn and grow as a developer.
      </p>
      <div className="space-y-4 sm:space-y-6">
        {SKILLS.map((category) => (
          <div key={category.title} className="mb-5 sm:mb-6">
            <h3 className="text-xs sm:text-sm font-medium text-gray-400 mb-3 sm:mb-4 uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {category.skills.length > 0 ? (
                category.skills.map((skill) => (
                  <Badge key={skill.label} aria-label={skill.ariaLabel}>
                    <Image
                      alt={`${skill.label} icon`}
                      loading="lazy"
                      width={16}
                      height={16}
                      className="w-4 h-4"
                      src={skill.icon}
                    />
                    <span>{skill.label}</span>
                  </Badge>
                ))
              ) : (
                <p className="text-xs text-gray-500">Coming soon...</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
