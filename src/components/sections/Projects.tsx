import { GitHubIcon, PlayIcon } from '@/components/ui/Icons';
import { PROJECTS } from '@/constants/projects';

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div
      className="flex flex-col sm:flex-row items-stretch border border-[#27272a] rounded-lg overflow-hidden cursor-pointer hover:bg-[#0e0e0e] hover:border-[#35353a] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#1e1e1e] relative"
      role="button"
      tabIndex={0}
      aria-label={`Open project: ${project.name}`}
    >
      <div className="sm:w-48 w-full flex-shrink-0 overflow-hidden">
        <img
          alt={project.name}
          loading="lazy"
          width="400"
          height="300"
          decoding="async"
          data-nimg="1"
          className="w-full h-44 sm:h-full object-cover transition-transform duration-300 group-hover:scale-105"
          style={{ color: 'transparent' }}
          src={project.image}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-3 sm:p-4 min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap flex-1 min-w-0">
              <h3 className="text-base sm:text-xl text-white truncate">{project.name}</h3>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
              {project.demoUrl && (
                <button
                  className="text-gray-400 pr-1 sm:pr-2 cursor-pointer opacity-65 hover:opacity-100 transition-colors flex-shrink-0 focus:outline-none"
                  aria-label="View Demo"
                >
                  <PlayIcon />
                </button>
              )}
              {project.githubUrl && (
                <button
                  className="text-gray-400 cursor-pointer hover:text-white transition-colors flex-shrink-0 focus:outline-none"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="sm:w-5 sm:h-5" />
                </button>
              )}
            </div>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mt-2">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="py-4 w-full">
      <div className="max-w-2xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="text-left mb-6 sm:mb-8 border-dashed border-t border-[#27272a] pt-4 sm:pt-6">
          <p className="text-xs sm:text-sm text-gray-400">
            Here are some of my <span className="text-white font-medium">Projects</span>
          </p>
        </div>

        {PROJECTS.map((category) => (
          <div key={category.category} className="mb-8 sm:mb-10">
            <h2 className="text-lg sm:text-2xl text-white mb-4 sm:mb-6 border-dashed border-b border-[#27272a] pb-2">
              {category.category}
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {category.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
