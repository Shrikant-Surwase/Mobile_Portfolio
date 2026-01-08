import { GlassCard, Section, SectionTitle } from '@/components/ui/Layout';
import { WORK_EXPERIENCE } from '@/constants/experience';

export const WorkExperience = () => {
  return (
    <Section>
      <SectionTitle title="Work" subtitle="Here is my work experience!" bordered={true} />
      <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
        {WORK_EXPERIENCE.map((job, index) => (
          <GlassCard key={index} href={job?.link}>
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-white text-base sm:text-xl font-medium mb-1">{job.role}</h3>
                <p className="text-[#8ab4f8] text-sm">{job.company}</p>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm whitespace-nowrap">
                {job.period}
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
              {job.description}
            </p>
            <div className="space-y-3">
              {job.achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="border-l-2 border-blue-500 bg-gradient-to-r from-blue-500/10 to-transparent px-3 py-2"
                >
                  <p className="text-white text-sm font-medium mb-1">{achievement.projectName}</p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {achievement.projectDescription}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  );
};
