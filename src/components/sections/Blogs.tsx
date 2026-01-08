import { Button, Section } from '@/components/ui/Layout';
import { ExternalLinkIcon } from '@/components/ui/Icons';
import { BLOGS } from '@/constants/blogs';

export const Blogs = () => {
  return (
    <Section>
      <div className="text-left mb-6 sm:mb-8 border-dashed border-t border-[#27272a] pt-6">
        <p className="text-gray-400 text-sm sm:text-base">
          Here are some <span className="text-white font-medium">blogs</span> I&apos;ve written
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3">
        {BLOGS.map((blog) => (
          <a
            key={blog.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-[#27272a] rounded-lg px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 w-full transition-all duration-300 hover:bg-[#0e0e0e] hover:border-[#35353a] hover:scale-[1.01] cursor-pointer"
            aria-label={blog.ariaLabel}
            href={blog.url}
          >
            <span className="font-figtree text-sm sm:text-base text-white truncate">
              {blog.title}
            </span>
            <ExternalLinkIcon className="group-hover:text-white transition-colors" />
          </a>
        ))}
      </div>
    </Section>
  );
};
