import { Button, Section } from '@/components/ui/Layout';
import { MailIcon, GitHubIcon, LinkedInIcon, TwitterIcon } from '@/components/ui/Icons';

const SOCIAL_LINKS = [
  {
    href: 'mailto:heysurvase@gmail.com',
    label: 'Email Me',
    icon: MailIcon,
    ariaLabel: 'Email',
  },
  {
    href: 'https://x.com/SuvaseShrikant',
    label: 'Twitter',
    icon: TwitterIcon,
    ariaLabel: 'Twitter',
  },
  {
    href: 'https://github.com/Shrikant-Surwase',
    label: 'GitHub',
    icon: GitHubIcon,
    ariaLabel: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/shrikant-survase-5211531b1/',
    label: 'Linkedin',
    icon: LinkedInIcon,
    ariaLabel: 'LinkedIn',
  },
];

export const SocialLinks = () => {
  return (
    <Section>
      <div className="text-left mb-4">
        <p className="text-gray-400 text-sm border-dashed border-t border-[#27272a] pt-2 mb-4">
          Where to find me <span className="text-white font-medium">(digitally)</span> if you wish
          to
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-3 sm:gap-4">
        {SOCIAL_LINKS.map(({ href, label, icon: Icon, ariaLabel }) => (
          <Button key={label} href={href} ariaLabel={ariaLabel}>
            <Icon />
            {label}
          </Button>
        ))}
      </div>
    </Section>
  );
};
